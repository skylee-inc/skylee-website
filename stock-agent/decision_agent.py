from daily_agent import get_daily_decision
from ai_agent import get_ai_decision
from risk_manager import check_risk
import json

SYMBOL = "QQQ"


def get_final_decision(symbol):
    daily_decision = get_daily_decision(symbol)
    hourly_decision = get_ai_decision(symbol)
    risk = check_risk(symbol)

    daily_signal = daily_decision["signal"]
    hourly_signal = hourly_decision["signal"]
    risk_status = risk["risk_status"]

    if risk_status == "BLOCKED":
        final_decision = "HOLD"
        reason = f"Risk Manager blocked trading: {risk['reason']}"

    elif daily_signal == "BUY" and hourly_signal == "BUY":
        final_decision = "BUY"
        reason = "Daily and hourly agents both agree on BUY."

    elif daily_signal == "SELL" and hourly_signal == "SELL":
        final_decision = "SELL"
        reason = "Daily and hourly agents both agree on SELL."

    else:
        final_decision = "HOLD"
        reason = (
            f"Signals are mixed. Daily Agent says {daily_signal}, "
            f"Hourly Agent says {hourly_signal}."
        )

    return {
        "symbol": symbol,
        "daily_signal": daily_signal,
        "hourly_signal": hourly_signal,
        "risk_status": risk_status,
        "current_position": risk["current_qty"],
        "cash": risk["cash"],
        "final_decision": final_decision,
        "reason": reason
    }


if __name__ == "__main__":
    result = get_final_decision(SYMBOL)

    print("===== DECISION AGENT RESULT =====")
    print(json.dumps(result, indent=4))