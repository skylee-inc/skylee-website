from alpaca.trading.client import TradingClient
from config import API_KEY, SECRET_KEY

SYMBOL = "QQQ"


def check_risk(symbol):
    client = TradingClient(API_KEY, SECRET_KEY, paper=True)

    account = client.get_account()
    positions = client.get_all_positions()
    orders = client.get_orders()

    current_qty = 0
    open_order_exists = False

    # Check current positions
    for position in positions:
        if position.symbol == symbol:
            current_qty = float(position.qty)

    # Check open orders
    for order in orders:
        if order.symbol == symbol:
            open_order_exists = True

    # Rule 1: Block if open order exists
    if open_order_exists:
        return {
            "risk_status": "BLOCKED",
            "reason": "Open order already exists for this symbol.",
            "current_qty": current_qty,
            "cash": float(account.cash)
        }

    # Rule 2: Block if position already exists
    if current_qty > 0:
        return {
            "risk_status": "BLOCKED",
            "reason": "Position already exists for this symbol.",
            "current_qty": current_qty,
            "cash": float(account.cash)
        }

    # Rule 3: Block if cash is too low
    if float(account.cash) < 100:
        return {
            "risk_status": "BLOCKED",
            "reason": "Insufficient cash available.",
            "current_qty": current_qty,
            "cash": float(account.cash)
        }

    # Otherwise safe to trade
    return {
        "risk_status": "SAFE",
        "reason": "No open orders, no existing position, and sufficient cash.",
        "current_qty": current_qty,
        "cash": float(account.cash)
    }


if __name__ == "__main__":
    risk = check_risk(SYMBOL)

    print("===== RISK MANAGER RESULT =====")
    print(risk)