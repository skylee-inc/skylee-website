import yfinance as yf
import json

SYMBOL = "QQQ"

def get_ai_decision(symbol):
    data = yf.download(symbol, period="1y")

    data["SMA20"] = data["Close"].rolling(20).mean()
    data["SMA50"] = data["Close"].rolling(50).mean()
    data = data.dropna()

    latest = data.iloc[-1]

    price = float(latest["Close"].iloc[0])
    sma20 = float(latest["SMA20"].iloc[0])
    sma50 = float(latest["SMA50"].iloc[0])

    difference = abs(sma20 - sma50)
    confidence = min(95, round((difference / sma50) * 1000, 2))

    if sma20 > sma50:
        signal = "BUY"
        reason = "SMA20 is above SMA50, so QQQ is showing an upward trend."
    elif sma20 < sma50:
        signal = "SELL"
        reason = "SMA20 is below SMA50, so QQQ is showing a downward trend."
    else:
        signal = "HOLD"
        reason = "SMA20 and SMA50 are equal, so there is no clear trend."

    decision = {
        "symbol": symbol,
        "price": round(price, 2),
        "sma20": round(sma20, 2),
        "sma50": round(sma50, 2),
        "signal": signal,
        "confidence": confidence,
        "reason": reason
    }

    return decision


decision = get_ai_decision(SYMBOL)

print("===== AI STOCK AGENT DECISION =====")
print(json.dumps(decision, indent=4))