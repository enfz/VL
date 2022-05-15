import requests
import csv



response = requests.get("https://vlrggapi.herokuapp.com/stats/eu")


def response_cleaner() -> list[Player]:
    remove_list = ["{", "}", ":", ",", ":{", ":[{"]
    data = []
    temp_list = response.text.split('"')
    for item in templist:
        if item in remove_list:
            temp_list.remove(item)

    for i in range(len(tempList)):
        if temp_list[i] == "player":
            data.append(Player(tempList[i + 1], tempList[i + 3], tempList[i + 5], tempList[i + 7],
                               tempList[i + 9], tempList[i + 11], tempList[i + 13], tempList[i + 15],
                               tempList[i + 17]))
    return data


#with open('rankings.csv') as file:

#    writer = csv.writer(file, delimeter=',', quotechar='""')

