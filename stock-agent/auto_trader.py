import yfinance as yf
from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce
from config import API_KEY, SECRET_KEY

SYMBOL = "QQQ"
QTY = 1

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

data = yf.download(SYMBOL, period="1y")
data["SMA20"] = data["Close"].rolling(20).mean()
data["SMA50"] = data["Close"].rolling(50).mean()
data = data.dropna()

latest = data.iloc[-1]

price = float(latest["Close"].iloc[0])
sma20 = float(latest["SMA20"].iloc[0])
sma50 = float(latest["SMA50"].iloc[0])

if sma20 > sma50:
    signal = "BUY"
elif sma20 < sma50:
    signal = "SELL"
else:
    signal = "HOLD"

positions = client.get_all_positions()
current_qty = 0

for position in positions:
    if position.symbol == SYMBOL:
        current_qty = float(position.qty)

print("===== AUTO TRADER =====")
print(f"Symbol: {SYMBOL}")
print(f"Price: ${price:.2f}")
print(f"SMA20: {sma20:.2f}")
print(f"SMA50: {sma50:.2f}")
print(f"Signal: {signal}")
print(f"Current Position: {current_qty}")

open_orders = client.get_orders()
open_buy_order_exists = False

for order in open_orders:
    if order.symbol == SYMBOL and str(order.side).lower().endswith("buy"):
        open_buy_order_exists = True

if signal == "BUY" and current_qty == 0 and not open_buy_order_exists:
    order = MarketOrderRequest(
        symbol=SYMBOL,
        qty=QTY,
        side=OrderSide.BUY,
        time_in_force=TimeInForce.DAY
    )

    submitted_order = client.submit_order(order)
    print("BUY order submitted")
    print("Order ID:", submitted_order.id)

elif open_buy_order_exists:
    print("Open BUY order already exists. Skipping.")

else:
    print("No trade needed.")