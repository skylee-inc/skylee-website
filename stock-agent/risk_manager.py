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

    for position in positions:
        if position.symbol == symbol:
            current_qty = float(position.qty)

    for order in orders:
        if order.symbol == symbol:
            open_order_exists = True

    if open_order_exists:
        return {
            "risk_status": "BLOCKED",
            "reason": "Open order already exists for this symbol.",
            "current_qty": current_qty,
            "cash": float(account.cash)
        }

    return {
        "risk_status": "SAFE",
        "reason": "No open order conflict found.",
        "current_qty": current_qty,
        "cash": float(account.cash)
    }


risk = check_risk(SYMBOL)

print("===== RISK MANAGER RESULT =====")
print(risk)