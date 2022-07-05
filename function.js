var region1 = ""; // The region that the players will be generated for the first search bar will come from
var region2 = ""; // The region that the players will be generated for the second search bar will come from
var link1 = "https://vlrggapi.vercel.app/stats/"; // API reference for the first search bar
var link2 = "https://vlrggapi.vercel.app/stats/"; // API reference for the seond search bar
var cors_api_url = 'https://cors-anywhere.herokuapp.com/'; // CORS API link to allow the proxy to work
var players1 = []; // Array of possible players for the first search bar
var players2 = []; // Array of possible players for the second search bar
var player1 = ''; // The player chosen from the first search bar
var player2 = ''; // The player chosen from the second search bar
const playerList1 = document.getElementById('myUL'); // Left search bar elements
const playerList2 = document.getElementById('myUL2'); // Right search bar elements
const header1 = document.getElementById('header1'); // Header to let user know what is selected from the left search bar
const header2 = document.getElementById('header2'); // Header to let user know what is selected from the right search bar


/**
 * Setting constant to async function response, which fetches data from the API 
 */
const loadPlayers1 = async () => {
    try {
        
        const res = await fetch(cors_api_url + link1); // API fetch call to get a response

        const temp = await res.json(); // Temporary variable to store the response as a JSON
        players1 = temp.data.segments; // Takes the segments of the JSON that correspond to the player's variables
        displayPlayers1(players1); // Passes the player's data to displayPlayers1
    } catch (err) { // Catches errors in the fetch process
        console.error(err);
        reset(); // Resets the current variables selected
        alert("You will be quickly redirected to \nhttps://cors-anywhere.herokuapp.com/corsdemo \nto request temporary access to use the client.");
        window.open("https://cors-anywhere.herokuapp.com/corsdemo").focus; // Redirects to the CORS API to request temporary access
    }
};

/**
 * Adds the html for the left search list of players
 * @param {object} players1 Object for the list of players in the left search list
 */
const displayPlayers1 = (players1) => {
    const htmlString1 = players1 // Creates new array with the formatted html for the search list
        .map((player1) => {
            return `
                <li><a onclick="choosePlayer1('${player1.player}', '${player1.org}')">${player1.org + " " + player1.player}</a></li>
            `;
        })
        .join(''); // Joins the array as a string
    playerList1.innerHTML = htmlString1; // Adds the html to the page
};

/**
 * Stores the region choice and updates variables where necessary
 * @param {string} choice 
 */
function chooseRegion1(choice){
    region1 = choice; // Updates the region variable
    link1 = "https://vlrggapi.vercel.app/stats/" + region1 + "/90"; // Updates the API call link
    updateHeader1(); // Updates the header
    loadPlayers1(); // Updates the search bar list
}

/**
 * Updates the search bar based on the input
 */
function searchBar1(){
    var input, filter, ul, li, a, i, txtValue; // temporary variables to keep track of the elements in each html tag
    input = document.getElementById('myInput'); // Gets input bar elements
    if (region1){ // If a region is selected
        filter = input.value.toUpperCase(); // Sets input to upper case to avoid case sensitivity
        ul = document.getElementById('myUL'); // Gets the list elements
        li = ul.getElementsByTagName('li'); // Gets the data inside each list element

        for (i = 0; i < li.length; i++) { // Goes through the items in the list
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) { // If the list item contains the input text
                li[i].style.display = ""; // Keeps the item in the list
            } 
            else { // If the list item doens't contain the input text
                li[i].style.display = "none"; // Removes item in the list
            }
        }
    } else{ // If a region isn't selected
        alert("Please select a region first.")
        input.value = '' // Clears the input bar
}
}

/**
 * Setting constant to async function response, which fetches data from the API 
 */
const loadPlayers2 = async () => {
    try {
        
        const res = await fetch('https://cors-anywhere.herokuapp.com/' + link2); // API fetch call to get a response

        const temp = await res.json(); // Temporary variable to store the response as a JSON
        players2 = temp.data.segments; // Takes the segments of the JSON that correspond to the player's variables
        displayPlayers2(players2); // Passes the player's data to displayPlayers2
    } catch (err) { // Catches errors in the fetch process
        console.error(err);
        reset(); // Resets the current variables selected
        alert("You will be quickly redirected to \nhttps://cors-anywhere.herokuapp.com/corsdemo \nto request temporary access to use the client.");
        window.open("https://cors-anywhere.herokuapp.com/corsdemo").focus; // Redirects to the CORS API to request temporary access
    }
};

/**
 * Adds the html for the left search list of players
 * @param {object} players2 Object for the list of players in the right search list
 */
const displayPlayers2 = (players2) => {
    const htmlString2 = players2 // Creates new array with the formatted html for the search list
        .map((player2) => {
            return `
                <li><a onclick="choosePlayer2('${player2.player}', '${player2.org}')">${player2.org + " " + player2.player}</a></li>
        `;
        })
        .join(''); // Joins the array as a string
    playerList2.innerHTML = htmlString2; // Adds the html to the page
};

function chooseRegion2(choice){
    region2 = choice; // Updates the region variable
    link2 = "https://vlrggapi.vercel.app/stats/" + region2 + "/90"; // Updates the API call link
    updateHeader2(); // Updates the header
    loadPlayers2(); // Updates the search bar list
}

/**
 * Updates the search bar based on the input
 */
function searchBar2(){
    var input, filter, ul, li, a, i, txtValue; // temporary variables to keep track of the elements in each html tag
    input = document.getElementById('myInput2'); // Gets input bar elements
    if (region2){ // If a region is selected
        filter = input.value.toUpperCase(); // Sets input to upper case to avoid case sensitivity
        ul = document.getElementById('myUL2'); // Gets the list elements
        li = ul.getElementsByTagName('li'); // Gets the data inside each list element

        for (i = 0; i < li.length; i++) { // Goes through the items in the list
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) { // If the list item contains the input text
                li[i].style.display = ""; // Keeps the item in the list
            } 
            else { // If the list item doens't contain the input text
                li[i].style.display = "none"; // Removes item in the list
            }
        }
    } else{ // If a region isn't selected
        alert("Please select a region first.");
        input.value = ''; // Clears the input bar
    }
}

/**
 * Updates data for the player that is selected
 * @param {string} name1 // Name of the player chosen
 * @param {string} org1  // Org of the player chosen
 */
function choosePlayer1(name1, org1){
    player1 = players1.find(element => element.player == name1 && element.org == org1); // Searches for the player using the name and org and stores it in the player1 variable
    sessionStorage.setItem("player1", JSON.stringify(player1)); // Adds the player's data to the session storage so that it can be used on compare.html
    updateHeader1(); // Updates the headers to let the user know that a player was chosen
}

/**
 * Updates data for the player that is selected
 * @param {string} name2 // Name of the player chosen
 * @param {string} org2  // Org of the player chosen
 */
function choosePlayer2(name2, org2){
    player2 = players2.find(element => element.player == name2 && element.org == org2); // Searches for the player using the name and org and stores it in the player1 variable
    sessionStorage.setItem("player2", JSON.stringify(player2)); // Adds the player's data to the session storage so that it can be used on compare.html
    updateHeader2(); // Updates the headers to let the user know that a player was chosen
}

/**
 * Updates the left header on the player selection page
 */
function updateHeader1(){
    headerHTML1 = [] // Temporarily stores the inner html as an array
    if (region1 != ''){ // If there is a region currently selected
        headerHTML1.push('Current Region: ' + region1.toUpperCase());
    } else { // If there is no region currently selected
        headerHTML1.push('Please select a region!');
    }

    if (player1 != '') { // If there is a player currently selected
        headerHTML1.push('Current Player: ' + player1.org + ' ' + player1.player);
    } else { // If there is no player currently selected
        headerHTML1.push('Please select a player!')
    }
    const headerText1 = headerHTML1.join('<br>') // Turns string into array with bold tags
    header1.innerHTML = headerText1 // Adds the string into the html
}

/**
 * Updates the right header on the player selection page
 */
function updateHeader2(){
    headerHTML2 = [] // Temporarily stores the inner html as an array
    if (region2 != ''){ // If there is a region currently selected
        headerHTML2.push('Current Region: ' + region2.toUpperCase());
    } else { // If there is no region currently selected
        headerHTML2.push('Please select a region!');
    }

    if (player2 != '') { // If there is a player currently selected
        headerHTML2.push('Current Player: ' + player2.org + ' ' + player2.player);
    } else { // If there is no player currently selected
        headerHTML2.push('Please select a player!');
    }
    const headerText2 = headerHTML2.join('<br>') // Turns string into array with bold tags
    header2.innerHTML = headerText2 // Adds the string into the html
}

/**
 * Resets all variables on the main player selection page
 */
function reset(){
    region1 = "";
    region2 = "";
    link1 = "https://vlrggapi.vercel.app/stats/";
    link2 = "https://vlrggapi.vercel.app/stats/";
    players1 = [];
    players2 = [];
    player1 = '';
    player2 = '';
    if (playerList1){ // If a player was already selected in the first search bar
        playerList1.innerHTML = ""; // Resets the saved html
    }
    if (playerList2){ // If a player was already selected in the second search bar
        playerList2.innerHTML = ""; // Resets the saved html
    }
    updateHeader1(); // Resets the left header
    updateHeader2(); // Resets the right header
    sessionStorage.clear(); // Clears the variables from compare.html
}

/**
 * Function that produces the html with the player data on  the compare.html page
 */
function tablePlayers(){ 
    const table = document.getElementById('stats') // Elements inside the player stats table
    var strings = [] // Temporary array to store all html elements
    var playerAVariables = [] // All variables in the first players' JSON
    var playerBVariables = [] // All variables in the second players' JSON
    const varNames = ['Name', 'Org', 'Average Combat Score', 'Kills to Death Ratio', 'Average Damage per Round', 'Kills per Round',
     'Assists per Round', 'First Kills per Round', 'First Deaths per Round', 'Headshot Percentage', 'Clutch Success Percentage'] // All headers in the first column
    var playerA = JSON.parse(sessionStorage.getItem("player1")); // Takes the stored players' information and puts it back into the JSON format 
    var playerB = JSON.parse(sessionStorage.getItem("player2")); // Takes the stored players' information and puts it back into the JSON format

    if (playerA && playerB){ // Checks that 2 players were selected/inputted before coming to the page
        for(var key in playerA){ // Goes through each variable in the player JSON element
            playerAVariables.push(playerA[key]); // Adds the variables for the first player
            playerBVariables.push(playerB[key]); // Adds the variables for the second player
        }

        strings.push('<tr><th>Players</th><th>' + playerA.org + " " + playerA.player + '</th><th>' + playerB.org + " " + playerB.player + '</th></tr>'); // Title row with player names

        for(var i = 2; i < playerAVariables.length; i++){ // Goes through each variable for each player
            if(playerAVariables[i] > playerBVariables[i]){ // In the case that the first player is better than the second player in that category
                strings.push('<tr><th>' + varNames[i] + '</th><th class="higher">' + playerAVariables[i] + '</th><th class="lower">' + playerBVariables[i] + '</th></tr>');
            } else if(playerAVariables[i] < playerBVariables[i]){ // In the case that the second player is better than the first player in that category
                strings.push('<tr><th>' + varNames[i] + '</th><th class="lower">' + playerAVariables[i] + '</th><th class="higher">' + playerBVariables[i] + '</th></tr>');
            } else { // In the case that both players
                strings.push('<tr><th>' + varNames[i] + '</th><th class="draw">' + playerAVariables[i] + '</th><th class="draw">' + playerBVariables[i] + '</th></tr>');
            }
        }
        
        const htmlPlayerString = strings.join('\n'); // Takes all html elements from array and puts it into one string
        table.innerHTML = htmlPlayerString; // Adds the html elements to the player stats table
    }
    else{ // If 2 players are not selected/inputted
        alert("Please select 2 players to compare.");
        window.location.href = "index.html"; // Redirects user back to player selection page
    }
}

/**
 * Function that resets the stored data on the compare.html page
 */
function resetCompare(){
    updateHeader1();
    updateHeader2();
    sessionStorage.clear();
}