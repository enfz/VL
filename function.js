var region1 = "";
var region2 = "";
var link1 = "https://vlrggapi.vercel.app/stats/";
var link2 = "https://vlrggapi.vercel.app/stats/";
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
var players1 = [];
var players2 = [];
var player1 = '';
var player2 = '';
const playerList1 = document.getElementById('myUL');
const playerList2 = document.getElementById('myUL2');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');


const loadPlayers1 = async () => {
    try {
        
        const res = await fetch(cors_api_url + link1);

        const temp = await res.json();
        players1 = temp.data.segments;
        displayPlayers1(players1);
    } catch (err) {
        console.error(err);
        alert("You will be quickly redirected to \nhttps://cors-anywhere.herokuapp.com/corsdemo \nto request temporary access to use the client.");
        window.open("https://cors-anywhere.herokuapp.com/corsdemo").focus;
    }
};

const displayPlayers1 = (players) => {
    const htmlString1 = players
        .map((player) => {
            return `
                <li><a onclick="choosePlayer1('${player.player}', '${player.org}')">${player.org + " " + player.player}</a></li>
            `;
        })
        .join('');
    playerList1.innerHTML = htmlString1;
};

function chooseRegion1(choice){
    region1 = choice;
    link1 = "https://vlrggapi.vercel.app/stats/" + region1 + "/90";
    updateHeader1();
    loadPlayers1();
}

function searchBar1(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    if (region1){
        filter = input.value.toUpperCase();
        ul = document.getElementById('myUL');
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            } 
            else {
            li[i].style.display = "none";
            }
        }
    } else{
        alert("Please select a region first.")
        input.value = ''
}
}

const loadPlayers2 = async () => {
    try {
        
        const res = await fetch('https://cors-anywhere.herokuapp.com/' + link2);

        const temp = await res.json();
        players2 = temp.data.segments;
        displayPlayers2(players2);
    } catch (err) {
        console.error(err);
    }
};

const displayPlayers2 = (players2) => {
    const htmlString2 = players2
        .map((player2) => {
            return `
                <li><a onclick="choosePlayer2('${player2.player}', '${player2.org}')">${player2.org + " " + player2.player}</a></li>
        `;
        })
        .join('');
    playerList2.innerHTML = htmlString2;
};

function chooseRegion2(choice){
    region2 = choice;
    link2 = "https://vlrggapi.vercel.app/stats/" + region2 + "/90";
    updateHeader2();
    loadPlayers2();    
}

function searchBar2(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput2');
    if (region2){
        filter = input.value.toUpperCase();
        ul = document.getElementById('myUL2');
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            } 
            else {
            li[i].style.display = "none";
            }
        }
    } else{
        alert("Please select a region first.");
        input.value = '';
    }
}

function choosePlayer1(name1, org1){
    player1 = players1.find(element => element.player == name1 && element.org == org1);
    sessionStorage.setItem("player1", JSON.stringify(player1));
    updateHeader1();
}

function choosePlayer2(name2, org2){
    player2 = players2.find(element => element.player == name2 && element.org == org2);
    sessionStorage.setItem("player2", JSON.stringify(player2));
    updateHeader2();
}

function updateHeader1(){
    headerHTML1 = []
    if (region1 != ''){
        headerHTML1.push('Current Region: ' + region1.toUpperCase());
    } else {
        headerHTML1.push('Please select a region!');
    }

    if (player1 != '') {
        headerHTML1.push('Current Player: ' + player1.org + ' ' + player1.player);
    } else {
        headerHTML1.push('Please select a player!')
    }
    const headerText1 = headerHTML1.join('<br>')
    header1.innerHTML = headerText1
}

function updateHeader2(){
    headerHTML2 = []
    if (region2 != ''){
        headerHTML2.push('Current Region: ' + region2.toUpperCase());
    } else {
        headerHTML2.push('Please select a region!');
    }

    if (player2 != '') {
        headerHTML2.push('Current Player: ' + player2.org + ' ' + player2.player);
    } else {
        headerHTML2.push('Please select a player!');
    }
    const headerText2 = headerHTML2.join('<br>')
    header2.innerHTML = headerText2
}

function reset(){
    region1 = "";
    region2 = "";
    link1 = "https://vlrggapi.vercel.app/stats/";
    link2 = "https://vlrggapi.vercel.app/stats/";
    players1 = [];
    players2 = [];
    player1 = '';
    player2 = '';
    if (playerList1){
        playerList1.innerHTML = "";
    }
    if (playerList2){
        playerList2.innerHTML = "";
    }
    updateHeader1();
    updateHeader2();
    sessionStorage.clear();
}

function tablePlayers(){ 
    const table = document.getElementById('stats')
    var strings = []
    var playerAVariables = []
    var playerBVariables = []
    const varNames = ['Name', 'Org', 'Average Combat Score', 'Kills to Death Ratio', 'Average Damage per Round', 'Kills per Round', 'Assists per Round', 'First Kills per Round', 'First Deaths per Round', 'Headshot Percentage', 'Clutch Success Percentage']
    var playerA = JSON.parse(sessionStorage.getItem("player1"));
    var playerB = JSON.parse(sessionStorage.getItem("player2"));

    if (playerA && playerB){
        for(var key in playerA){
            playerAVariables.push(playerA[key]);
            playerBVariables.push(playerB[key]);
        }

        strings.push('<tr><th>Players</th><th>' + playerA.org + " " + playerA.player + '</th><th>' + playerB.org + " " + playerB.player + '</th></tr>');

        for(var i = 2; i < playerAVariables.length; i++){
            if(playerAVariables[i] > playerBVariables[i]){
                strings.push('<tr><th>' + varNames[i] + '</th><th class="higher">' + playerAVariables[i] + '</th><th class="lower">' + playerBVariables[i] + '</th></tr>');
            } else if(playerAVariables[i] < playerBVariables[i]){
                strings.push('<tr><th>' + varNames[i] + '</th><th class="lower">' + playerAVariables[i] + '</th><th class="higher">' + playerBVariables[i] + '</th></tr>');
            } else {
                strings.push('<tr><th>' + varNames[i] + '</th><th class="draw">' + playerAVariables[i] + '</th><th class="draw">' + playerBVariables[i] + '</th></tr>');
            }
        }
        
        const htmlPlayerString = strings.join('\n');
        table.innerHTML = htmlPlayerString;
    }
    else{
        alert("Please select 2 players to compare.");
        window.location.href = "index.html";
    }
}

function resetCompare(){
    updateHeader1();
    updateHeader2();
    sessionStorage.clear();
}