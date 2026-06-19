from ai_agent import get_ai_decision
from risk_manager import check_risk

SYMBOL = "QQQ"

decision = get_ai_decision(SYMBOL)
risk = check_risk(SYMBOL)

print("===== AI STOCK AGENT REPORT =====")
print(f"Symbol: {decision['symbol']}")
print(f"Price: ${decision['price']}")
print(f"Technical Signal: {decision['signal']}")
print(f"Confidence: {decision['confidence']}%")
print(f"Technical Reason: {decision['reason']}")
print(f"Risk Status: {risk['risk_status']}")
print(f"Risk Reason: {risk['reason']}")
print(f"Current Position: {risk['current_qty']}")
print(f"Available Cash: ${risk['cash']}")

if risk["risk_status"] == "BLOCKED":
    final_decision = "HOLD"
    explanation = "The agent will not place a new trade because risk manager blocked trading."
else:
    final_decision = decision["signal"]
    explanation = "The agent can proceed because risk manager approved trading."

print(f"Final Decision: {final_decision}")
print(f"Explanation: {explanation}")
print("=================================")