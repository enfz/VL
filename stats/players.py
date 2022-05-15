

class Team:
    region: str
    players: list[Player]

    def __init__(self, region: str, players: list):
        self.region = region
        self.players = players


class Player:
    name: str
    org: str
    acs: float
    kd: float
    kast: int
    adr: float
    kpr: float
    apr: float
    fkpr: float
    fdpr: float
    hs: int
    cl: int

    def __init__(self, name: str, org: str, acs: float, kd: float, 
                 kast: int, adr: float, kpr: float, apr: float,
                 fkpr: float, fdpr: float, hs: int, cl: int):
        self.name, self.org, self.acs, self.kd, self.kast, self.adr, \
            self.kpr, self.apr, self.fkpr, self.fdpr, self.hs, self.cl = \
            name, org, acs, kd, kast, adr, kpr,apr, fkpr, fdpr, hs, cl

