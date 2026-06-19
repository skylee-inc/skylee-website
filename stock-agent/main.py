import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt

STARTING_CAPITAL = 10000
SYMBOL = "QQQ"

data = yf.download(SYMBOL, period="1y")

data["SMA20"] = data["Close"].rolling(20).mean()
data["SMA50"] = data["Close"].rolling(50).mean()

data = data.dropna()

data["Signal"] = 0
data.loc[data["SMA20"] > data["SMA50"], "Signal"] = 1
data.loc[data["SMA20"] < data["SMA50"], "Signal"] = -1

latest = data.iloc[-1]

close_price = latest["Close"].iloc[0]
sma20 = latest["SMA20"].iloc[0]
sma50 = latest["SMA50"].iloc[0]

if sma20 > sma50:
    recommendation = "BUY"
    reason = "SMA20 is above SMA50, so the short-term trend is stronger."
elif sma20 < sma50:
    recommendation = "SELL"
    reason = "SMA20 is below SMA50, so the short-term trend is weaker."
else:
    recommendation = "HOLD"
    reason = "SMA20 and SMA50 are equal."

print("========== TRADING REPORT ==========")
print(f"Stock: {SYMBOL}")
print(f"Current Price: ${close_price:.2f}")
print(f"20-Day Average: ${sma20:.2f}")
print(f"50-Day Average: ${sma50:.2f}")
print(f"Recommendation: {recommendation}")
print(f"Explanation: {reason}")
print("====================================")

cash = STARTING_CAPITAL
shares = 0
trade_history = []

for date, row in data.iterrows():
    price = float(row["Close"].iloc[0])
    signal = int(row["Signal"].iloc[0])

    if signal == 1 and shares == 0:
        shares = cash / price
        cash = 0

        trade_history.append({
            "date": str(date.date()),
            "action": "BUY",
            "price": round(price, 2),
            "shares": round(shares, 4)
        })

        print(f"{date.date()} BUY @ ${price:.2f}")

    elif signal == -1 and shares > 0:
        cash = shares * price

        trade_history.append({
            "date": str(date.date()),
            "action": "SELL",
            "price": round(price, 2),
            "shares": round(shares, 4)
        })

        shares = 0

        print(f"{date.date()} SELL @ ${price:.2f}")

final_price = float(data.iloc[-1]["Close"].iloc[0])
portfolio_value = cash + shares * final_price

profit_loss = portfolio_value - STARTING_CAPITAL
total_return = (profit_loss / STARTING_CAPITAL) * 100

trades_df = pd.DataFrame(trade_history)
trades_df.to_csv("trade_history.csv", index=False)

print("\n========== BACKTEST REPORT ==========")
print(f"Starting Capital: ${STARTING_CAPITAL:,.2f}")
print(f"Final Portfolio Value: ${portfolio_value:,.2f}")
print(f"Profit/Loss: ${profit_loss:,.2f}")
print(f"Total Return: {total_return:.2f}%")
print(f"Number of Trades: {len(trade_history)}")
print("Trade history saved to trade_history.csv")
print("====================================")

plt.figure(figsize=(12, 6))
plt.plot(data.index, data["Close"], label=f"{SYMBOL} Close")
plt.plot(data.index, data["SMA20"], label="SMA20")
plt.plot(data.index, data["SMA50"], label="SMA50")
plt.title(f"{SYMBOL} Price vs Moving Averages")
plt.xlabel("Date")
plt.ylabel("Price")
plt.legend()
plt.show()