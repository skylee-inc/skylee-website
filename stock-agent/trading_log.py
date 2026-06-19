from alpaca.trading.client import TradingClient
from config import API_KEY, SECRET_KEY
import pandas as pd

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

orders = client.get_orders()

log = []

for order in orders:
    log.append({
        "symbol": order.symbol,
        "side": order.side,
        "status": order.status,
        "qty": order.qty,
        "submitted_at": order.submitted_at
    })

df = pd.DataFrame(log)
df.to_csv("alpaca_orders_log.csv", index=False)

print("Trading log saved to alpaca_orders_log.csv")