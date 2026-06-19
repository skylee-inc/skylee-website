from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce
from config import API_KEY, SECRET_KEY

try:
    trading_client = TradingClient(API_KEY, SECRET_KEY, paper=True)

    account = trading_client.get_account()
    print("Connected to Alpaca")
    print(f"Account status: {account.status}")
    print(f"Cash: {account.cash}")

    order = MarketOrderRequest(
        symbol="QQQ",
        qty=1,
        side=OrderSide.BUY,
        time_in_force=TimeInForce.DAY
    )

    submitted_order = trading_client.submit_order(order)
    print("Paper BUY order submitted")
    print(f"Order ID: {submitted_order.id}")

except Exception as e:
    print("Error occurred:")
    print(e)