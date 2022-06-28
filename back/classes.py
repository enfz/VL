
class Player:
    name: str
    org: str
    acs: float
    kd: float
    adr: float
    kpr: float
    apr: float
    fkpr: float
    fdpr: float
    hs: int
    cp: int

    def __init__(self, name: str, org: str, acs: str, kd: str,
                 adr: str, kpr: str, apr: str, fkpr: str,
                 fdpr: str, hs: str, cp: int):
        self.name, self.org, self.acs, self.kd, self.adr, self.kpr,\
            self.apr, self.fkpr, self.fdpr, self.hs, self.cp = \
            name, org, float(acs), float(kd), float(adr),\
            float(kpr), float(apr), float(fkpr), float(fdpr), int(hs), int(cp)

    def get_org(self) -> str:
        return self.org


class Team:
    name: str
    abb: str
    region: str
    logo: str
    players: list[Player]
    rank: str

    def __init__(self, name: str, abb: str, region: str, logo: str, rank: str):
        self.name = name
        self.abb = abb
        self.region = region
        self.logo = logo
        self.players = []
        self.rank = rank

    def add_player(self, player: Player):
        if player not in self.players and player.get_org() == self.abb:
            self.players.append(player)

    def get_abb(self) -> str:
        return self.abb
