from decision_agent import get_final_decision
from trade_logger import log_trade


from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce

from config import API_KEY, SECRET_KEY

SYMBOL = "QQQ"
QTY = 1

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

decision = get_final_decision(SYMBOL)

final_decision = decision["final_decision"]

print("===== AI EXECUTION AGENT =====")
print(f"Symbol: {decision['symbol']}")
print(f"Daily Signal: {decision['daily_signal']}")
print(f"Hourly Signal: {decision['hourly_signal']}")
print(f"Risk Status: {decision['risk_status']}")
print(f"Final Decision: {final_decision}")
print(f"Reason: {decision['reason']}")

if final_decision == "BUY":
    order = MarketOrderRequest(
        symbol=SYMBOL,
        qty=QTY,
        side=OrderSide.BUY,
        time_in_force=TimeInForce.DAY
    )

    submitted_order = client.submit_order(order)

    print("BUY order submitted")
    print("Order ID:", submitted_order.id)

elif final_decision == "SELL":
    order = MarketOrderRequest(
        symbol=SYMBOL,
        qty=QTY,
        side=OrderSide.SELL,
        time_in_force=TimeInForce.DAY
    )

    submitted_order = client.submit_order(order)

    print("SELL order submitted")
    print("Order ID:", submitted_order.id)

else:
    print("No trade executed. Final decision is HOLD.")

    log_trade(decision)

print("==============================")