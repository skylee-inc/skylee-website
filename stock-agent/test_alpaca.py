from alpaca.trading.client import TradingClient
from config import API_KEY, SECRET_KEY

trading_client = TradingClient(API_KEY, SECRET_KEY, paper=True)

account = trading_client.get_account()

print("Account connected successfully")
print(f"Status: {account.status}")
print(f"Cash: ${account.cash}")
print(f"Buying Power: ${account.buying_power}")