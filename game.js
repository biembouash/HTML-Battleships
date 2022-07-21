var map = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5
}
var gusses = 0;
var ships = 3;



var ships = {
    lives: ships*3,
    ship1: ["00", "01", "02"],
    ship2: ["10", "11", "12"],
    ship3: ["20", "21", "22"]
}

function displayHit(location){
    displayMessage(location);
    ships.lives--;
    document.getElementById(location).setAttribute("class", "hit");
    if(ships.lives === 0)
        displayMessage("THE END<br> GUESSES: " + gusses);
    else
        displayMessage("HIT!");
}
function displayMiss(location){
    document.getElementById(location).setAttribute("class", "miss");
    displayMessage("MISSED KKJK");
}
function displayMessage(msg){

    document.getElementById("msgArea").innerHTML = msg;

}

function isValidLocation(location){
     return location.match(/^[A-F][0-6]$/) != null;
}

var guessed = {}

function shoot(location){
    gusses++;
    let r = map[location[0]];
    let c = location[1];
    for(let i in ships){
        for(let j in ships[i]){
            console.log(r+c, j);
            if((r+c) === ships[i][j] ){
                displayHit(r+c);
                return;
            }
        }
    }
    displayMiss(r+c);

}

function handleInput(){
    let location = document.getElementById("guessInput").value;
    displayMessage(isValidLocation(location));
    console.log(location);
    console.log(isValidLocation(location));
    if(isValidLocation(location) && !(location in guessed)){
        guessed[location] = true;
        shoot(location);
    }else{
        displayMessage("Choose another location man");
    }
}



document.getElementById("guessButon").onclick = handleInput;

