from alpaca.trading.client import TradingClient
from config import API_KEY, SECRET_KEY

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

positions = client.get_all_positions()

print("===== POSITIONS =====")

if not positions:
    print("No positions found")
else:
    for p in positions:
        print(f"Symbol: {p.symbol}")
        print(f"Qty: {p.qty}")
        print(f"Market Value: {p.market_value}")
        print("-" * 30)