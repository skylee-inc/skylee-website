from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce

from config import API_KEY, SECRET_KEY

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

order = MarketOrderRequest(
    symbol="QQQ",
    qty=1,
    side=OrderSide.SELL,
    time_in_force=TimeInForce.DAY
)

response = client.submit_order(order)

print("SELL order submitted")
print("Order ID:", response.id)