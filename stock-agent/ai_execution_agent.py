from ai_agent import get_ai_decision
from risk_manager import check_risk

from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce

from config import API_KEY, SECRET_KEY

SYMBOL = "QQQ"
QTY = 1

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

decision = get_ai_decision(SYMBOL)
risk = check_risk(SYMBOL)

print("===== AI EXECUTION AGENT =====")

print(f"Signal: {decision['signal']}")
print(f"Confidence: {decision['confidence']}%")
print(f"Risk Status: {risk['risk_status']}")

if risk["risk_status"] != "SAFE":
    print("Trading blocked by Risk Manager.")
    exit()

if decision["signal"] == "BUY":

    order = MarketOrderRequest(
        symbol=SYMBOL,
        qty=QTY,
        side=OrderSide.BUY,
        time_in_force=TimeInForce.DAY
    )

    submitted_order = client.submit_order(order)

    print("BUY order submitted")
    print("Order ID:", submitted_order.id)

elif decision["signal"] == "SELL":

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
    print("No trade executed.")

print("==============================")