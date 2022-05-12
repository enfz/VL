import requests
import csv
import classes

response = requests.get("https://vlrggapi.herokuapp.com/stats/eu")


def response_cleaner() -> list[Player]:
    removeList = ["{", "}", ":", ",", ":{", ":[{"]
    data = []
    tempList = response.text.split('"')
    for item in tempList:
        if item in removeList:
            tempList.remove(item)

    for i in range(len(tempList)):
        if tempList[i] == "player":
            data.append(Player(tempList[i + 1], tempList[i + 3], tempList[i + 5], tempList[i + 7],
                               tempList[i + 9], tempList[i + 11], tempList[i + 13], tempList[i + 15],
                               tempList[i + 17]))
    return data


#with open('rankings.csv') as file:

#    writer = csv.writer(file, delimeter=',', quotechar='""')

