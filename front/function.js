var region1 = ""
var region2 = ""
var link1 = "https://vlrggapi.herokuapp.com/stats/"
var link2 = "https://vlrggapi.herokuapp.com/stats/"
var players = []
const userCardTemplate = document.querySelector("[data-player-template]")

function searchBar(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
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
}

function chooseRegion1(choice){
    region1 = choice;
    link1 = "https://vlrggapi.herokuapp.com/stats/" + region1 + "/90"
    pos = 0
    fetch(link)
        .then(res => res.json())
        .then(data => {
            data.array.forEach(element =>{
                players[pos] = element
                pos += 1
            })
        })
}

function chooseRegion2(choice){
    region2 = choice;
    link2 = "https://vlrggapi.herokuapp.com/stats/" + region2 + "/90"
    pos = 0
    fetch(link)
        .then(res => res.json())
        .then(data => {
            data.array.forEach(element =>{
                players[pos] = element
                pos += 1
            })
        })
}

function choosePlayer(choice){

}