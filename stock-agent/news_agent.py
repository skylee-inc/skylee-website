import json

SYMBOL = "QQQ"


def get_news_sentiment(symbol):
    return {
        "symbol": symbol,
        "sentiment": "NEUTRAL",
        "confidence": 50,
        "reason": "News sentiment API is not connected yet. Defaulting to neutral."
    }


if __name__ == "__main__":
    news = get_news_sentiment(SYMBOL)

    print("===== NEWS SENTIMENT AGENT =====")
    print(json.dumps(news, indent=4))