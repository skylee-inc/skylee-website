import csv
import os
from datetime import datetime

LOG_FILE = "trading_log.csv"


def log_trade(decision):
    file_exists = os.path.isfile(LOG_FILE)

    with open(LOG_FILE, "a", newline="") as file:
        writer = csv.writer(file)

        # Write header only once
        if not file_exists:
            writer.writerow([
                "Timestamp",
                "Symbol",
                "Daily Signal",
                "Hourly Signal",
                "News Sentiment",
                "Risk Status",
                "Final Decision",
                "Reason"
            ])

        writer.writerow([
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            decision["symbol"],
            decision["daily_signal"],
            decision["hourly_signal"],
            decision["news_sentiment"],
            decision["risk_status"],
            decision["final_decision"],
            decision["reason"]
        ])

    print("Trade decision logged successfully.")