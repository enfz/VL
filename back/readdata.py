import requests
import csv
from classes import Player
from classes import Team

regions = ['eu', 'na']
abbreviations = {'FunPlusPhoenix': 'FPX', 'G2Esports': 'G2', 'TeamLiquid': 'TL', 'Acend': 'ACE', 'Fnatic': 'FNC', 'M3Champions': 'M3C',
                 'GuildEsports': 'GLD', 'OGLDNUTD': 'OGLU', 'BBLEsports': 'BBL', 'NatusVincere': 'NAVI', 'MADLions': 'MAD', 'BIG': 'BIG',
                 'FireFluxEsports': 'FF', 'EXCEL': 'XL', 'Alliance': '[A]', 'RebelsGaming': 'RBLS', 'FOKUS': 'FKS', 'CaseEsports': 'CASE',
                 'NOMEsports': 'NOM', 'Finest': 'FNST', 'Futbolist': 'FUT', 'Divinity': None, 'KOVA': 'KOVA', 'GiantsGaming': 'GIA',
                 'HEET': 'HEET', 'ThunderboltsGaming': 'TBG', 'M4LIK': 'M4LIK', 'SuperMassiveBlaze': 'SMB', 'Dobeg': 'DBG', 'KOI': 'KOI',
                 'SectorOne': 'S1', 'EZKATKA': None, 'TeamQueso': 'TQ', 'WaveEsports': 'WAVE', 'KPIGaming': 'KPI', 'MOUZ': 'MOUZ',
                 'FenerbahçeEsports': 'FB', 'RESET': None, 'AnorthosisFamagustaEsports': 'ANO', 'Honvéd': 'LLH', 'TeamBDS': 'BDS',
                 'UCAMTokiers': 'UCAM', 'Arroz': 'ARZ', 'ZeroTenacity': 'Z10', 'DSYRE': 'DSY', 'ValarMorghulis': 'VMS', 'beGenius': 'BGN',
                 'AngryTitans': 'AT', 'iPonEsport': 'iPon', 'FireFluxYoung': 'FFY', 'GalatasarayEsports': 'GSE', 'TacticalFive': None,
                 'OvationeSports': 'OVA', 'Mkers': 'MK', 'IFParlaEsports': 'PRL', 'SissiStatePunks': None, 'incognito': None,
                 'HeraclesGaming': 'HG', 'RIZON': None, 'DortmundEsports': None, 'Teamhz': None, 'whocars?': None,
                 'HumanTripwires': 'HTW', 'F9Hetic': 'F9', 'Galakticos': 'GAL', 'Ax3': None, 'Sleepless': None,
                 'RegnumCaryaEsports': 'REG', 'B8Esports': 'B8', 'VeselieVintovki': None, 'PAWNGAMING': 'PAWN',
                 'H2O': None, 'Valorando': None, 'CGNEsports': 'CGN', 'KaosNextRüya': None, 'Kahoot': None, 'EnterpriseEsports': 'EP',
                 'XYZ': None, 'Yutoru': 'YTR', 'DiamantEsports': 'DIA', 'AnonymoMentos': 'AM', 'TeamLixa': 'Lixa', 'GiefKalash': None,
                 'PAEBAT': None, 'KlanikEsport': 'KE', 'ALTERNATEaTTaX': 'ATX', 'TeamProgress': None, 'XXChromosome': None,
                 'RealBetis': 'BTS', 'Arctic': 'AG', 'WYLDE': None, 'tyeasy': 'TYE', 'GringoEsports': 'GGO', 'GuildX': 'GUILD', 'TeamAurora': 'AUR',
                 'EKOeSports': None, 'FDPEsports': 'FDP', 'KaragümrükEsports': 'KGE', 'Wygers': 'WYG', '3GünYeter': '3G', 'Team86': '86',
                 'Odium': 'ODIUM', 'FishkaVTom': 'FVT', 'Genbrugsbutik': None, 'EGNSTEPUP': 'EGNSU', 'MAJTKOMAT': None, 'YPPB': None, 'GTZBulls': 'GTZ',
                 'next_viigraem': None, 'Axolotl': None, 'EX0TIKGAMING': None, 'EternalFire': 'EF', 'Yakuza': None, 'ThePawBrothers': None,
                 'UnicornsofLove': 'UOL', 'EPICDUDES': 'DUDES', 'TheGooseHouse': 'TGH', 'OnlyFins': None, 'UnknownprosFemale': None,
                 'CaseHydra': 'Case', 'RapidNinjas': None, 'IntoTheBreach': None, 'OrglessOlafs': None, 'FTWEvo': 'FTW.EVO', 'PURPURE': None,
                 'OG': 'OG', 'QLASH': 'QLSH', 'BalkanStars': None, 'Ungentium': None, 'dogsafari': 'dog$', 'Mandatory': 'MDR', 'KATANACLAN': 'KC',
                 'PrinzenvonStuttgart': None, 'CGNYoungstars': None, 'QLFClan': None, 'BoavistaFC': 'BFC', 'NoodleArmAthletes': None,
                 'Absoluteamateurs': None, 'Entropiq': 'EIQ', 'TeamGalaga': 'GG', 'TeamHeretics': 'TH', 'OdivelasSportClub': 'OSC',
                 'Unknownpros': None, 'Minima': None, 'SahangillerEspor': 'SHN', 'PASCHKA': None, 'Aim.Attack': 'AMT', 'FAWES': 'FWS',
                 'CyberEsports': None, 'TeamOrangeGaming': 'TOG', 'cowanaGaming': 'CG', 'PanthersEsports': 'PNT', 'Redragon': None,
                 'Ozaki8Esports': None, 'MackoEsports': None, 'FadeeGaming': 'FG', 'LaPuenta': None, 'SivassporE-Spor': None,
                 'DIVIZON': None, 'BISONSECLUB': 'BSO', 'JOKERS': 'JKRS', 'CyberGroundGaming': 'CG', 'DeadRabbits': 'DR', 'qz': None,
                 'NonsenseGaming': 'NsG', 'TeamDoggo': 'TD', 'SPARXEsports': None, 'KTRL': None, 'DSYREAcademy': 'DSY', 'KumGaming': None,
                 'Entropy': 'EYG', 'Rix.GGLightning': 'RIX', 'OtherSide': 'OS', 'KarmaClan': 'KRM', 'RambootClub': None}


def response_cleaner(region: str) -> list[Player]:
    url = "https://vlrggapi.herokuapp.com/stats/" + region + "/90"
    response = requests.get(url)
    remove_list = ["{", "}", ":", ",", ":{", ":[{"]
    players = []
    temp_list = response.text.split('"')
    for item in temp_list:
        if item in remove_list:
            temp_list.remove(item)

    for i in range(len(temp_list)):
        if temp_list[i] == "player":
            name = temp_list[i + 1]
            org = temp_list[i + 3]
            acs = temp_list[i + 5]
            kd = temp_list[i + 7]
            kast = temp_list[i + 9][:len(temp_list[i + 9]) - 1]
            adr = temp_list[i + 11]
            kpr = temp_list[i + 13]
            apr = temp_list[i + 15]
            fkpr = temp_list[i + 17]
            fdpr = temp_list[i + 19]
            hs = temp_list[i + 21][:len(temp_list[i + 21]) - 1]
            players.append(Player(name, org, acs, kd, kast, adr, kpr, apr, fkpr, fdpr, hs))
    return players


def team_list(players: list[Player], region: str) -> list[Team]:
    url = "https://vlrggapi.herokuapp.com/rankings/" + region
    response = requests.get(url)
    remove_list = ["{", "}", ":", ",", ":{", ":[{"]
    teams = []
    temp_list = response.text.split('"')
    for item in temp_list:
        if item in remove_list:
            temp_list.remove(item)

    for i in range(len(temp_list)):
        if temp_list[i] == "rank":
            name = temp_list[i + 3]
            abb = abbreviations[temp_list[i + 3]]
            logo = temp_list[i + 7]
            rank = temp_list[i + 1]
            teams.append(Team(name, abb, region, logo, rank))
    for player in players:
        for team in teams:
            team.add_player(player)
    return teams


def write_to_file(filename: str, region: str):
    with open('rankings.csv', encoding='UTF8', newline='') as file:
        writer = csv.writer(file, lineterminator='\n')

        for team in team_list(response_cleaner(region), region):
            player = str(team.players)
            writer.writerow([team.region, team.name, player, team.rank])
