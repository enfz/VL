import requests
import csv

response = requests.get("https://vlrggapi.herokuapp.com/news")
print(response.text)

