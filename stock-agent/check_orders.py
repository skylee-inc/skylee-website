from alpaca.trading.client import TradingClient
from config import API_KEY, SECRET_KEY

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

orders = client.get_orders()

for order in orders:
    print("Symbol:", order.symbol)
    print("Side:", order.side)
    print("Status:", order.status)
    print("Qty:", order.qty)
    print("Filled Qty:", order.filled_qty)
    print("-" * 30)