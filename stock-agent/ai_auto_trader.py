from ai_agent import get_ai_decision
from risk_manager import check_risk

SYMBOL = "QQQ"

decision = get_ai_decision(SYMBOL)
risk = check_risk(SYMBOL)

print("===== AI AUTO TRADER =====")

print(f"Symbol: {decision['symbol']}")
print(f"Signal: {decision['signal']}")
print(f"Confidence: {decision['confidence']}%")

print(f"Risk Status: {risk['risk_status']}")
print(f"Risk Reason: {risk['reason']}")

if risk["risk_status"] == "BLOCKED":
    final_decision = "HOLD"

elif decision["signal"] == "BUY":
    final_decision = "BUY"

elif decision["signal"] == "SELL":
    final_decision = "SELL"

else:
    final_decision = "HOLD"

print(f"Final Decision: {final_decision}")

print("==========================")