import requests
import csv
from players import Player


response = requests.get("https://vlrggapi.herokuapp.com/stats/eu")


def response_cleaner() -> list[Player]:
    remove_list = ["{", "}", ":", ",", ":{", ":[{"]
    data = []
    temp_list = response.text.split('"')
    for item in temp_list:
        if item in remove_list:
            temp_list.remove(item)

    for i in range(len(temp_list)):
        if temp_list[i] == "player":
            data.append(Player(temp_list[i + 1], temp_list[i + 3], temp_list[i + 5], temp_list[i + 7],
                               temp_list[i + 9], temp_list[i + 11], temp_list[i + 13], temp_list[i + 15],
                               temp_list[i + 17]))
    return data


#with open('rankings.csv') as file:

#    writer = csv.writer(file, delimeter=',', quotechar='""')

