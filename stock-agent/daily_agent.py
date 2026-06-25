import yfinance as yf
import json

SYMBOL = "QQQ"


def get_daily_decision(symbol):
    data = yf.download(symbol, period="1y")

    data["SMA20"] = data["Close"].rolling(20).mean()
    data["SMA50"] = data["Close"].rolling(50).mean()

    delta = data["Close"].diff()
    gain = delta.where(delta > 0, 0)
    loss = -delta.where(delta < 0, 0)

    avg_gain = gain.rolling(14).mean()
    avg_loss = loss.rolling(14).mean()

    rs = avg_gain / avg_loss
    data["RSI"] = 100 - (100 / (1 + rs))

    data = data.dropna()
    latest = data.iloc[-1]

    price = float(latest["Close"].iloc[0])
    sma20 = float(latest["SMA20"].iloc[0])
    sma50 = float(latest["SMA50"].iloc[0])
    rsi = float(latest["RSI"].iloc[0])

    if sma20 > sma50 and rsi < 70:
        signal = "BUY"
        reason = "Daily trend is bullish and RSI is not overbought."
    elif sma20 < sma50 and rsi > 30:
        signal = "SELL"
        reason = "Daily trend is bearish and RSI is not oversold."
    else:
        signal = "HOLD"
        reason = "Daily signal is mixed."

    return {
        "symbol": symbol,
        "timeframe": "daily",
        "price": round(price, 2),
        "sma20": round(sma20, 2),
        "sma50": round(sma50, 2),
        "rsi": round(rsi, 2),
        "signal": signal,
        "reason": reason
    }


if __name__ == "__main__":
    decision = get_daily_decision(SYMBOL)
    print("===== DAILY TREND AGENT =====")
    print(json.dumps(decision, indent=4))
    