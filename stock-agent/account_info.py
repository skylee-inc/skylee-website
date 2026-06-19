from alpaca.trading.client import TradingClient
from config import API_KEY, SECRET_KEY

client = TradingClient(API_KEY, SECRET_KEY, paper=True)

account = client.get_account()

print("===== ACCOUNT INFO =====")
print("Status:", account.status)
print("Cash:", account.cash)
print("Portfolio Value:", account.portfolio_value)
print("Buying Power:", account.buying_power)
print("========================")