var map = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6
}
var gusses = 0;
var shipz = 3;



var ships = {
    lives: shipz*3,
    ship: [],
    generateLocations: function(){
        console.log("a");
        let vertical = Math.floor(Math.random() * (shipz+1));
        let horizontal = shipz - vertical;
        let dirMap = {};
        console.log(vertical);
        console.log(horizontal);
        let k = 0;
        for(let i = 0; i<vertical;){
            console.log("aaaa");
            var row = Math.floor(Math.random()*(7-3) )+ 3;
            var col = Math.floor(Math.random()*7);
            console.log("row :",row, "  col: ", col);
            if(!(((row + "" + col) in dirMap) || (((row - 1) +  "" + col) in dirMap) || (((row-2) +  "" + col) in dirMap))){
                this.ship[k++] = row + "" + col; dirMap[(row-1) + "" + col] = true;
                this.ship[k++] = (row-1 )+ "" + col; dirMap[(row-2) + "" + col] = true;
                this.ship[k++] = (row-2) + "" + col; dirMap[row + "" + col] = true;
                i++;
                
            }
        }
        for(let i = 0; i<horizontal;){
            console.log(i);
            var row = Math.floor(Math.random()*7);
            var col = Math.floor(Math.random()*5);
            if(!(((row +  "" + col) in dirMap) || ((row +  "" + (col+1)) in dirMap) || ((row +  "" + (col +2 )) in dirMap))){
                this.ship[k++] = row + "" + col; dirMap[row + "" + (col)] = true;
                this.ship[k++] = (row )+ "" + (col+1); dirMap[row + "" + (col+1)] = true;
                this.ship[k++] = (row) + "" + (col+2); dirMap[row + "" + (col+2)] = true;
                i++;
                
            }
        }

    }
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
     return location.match(/^[A-G][0-6]$/) != null;
}

var guessed = {}

function shoot(location){
    gusses++;
    let r = map[location[0]];
    let c = location[1];
    for(let i of ships.ship){
            console.log(r+c,i);
            if((r+c) === i ){
                displayHit(r+c);
                return;
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

function revealAll(){
    for(let i = 0; i<ships.ship.length; i++){
       displayHit(ships.ship[i]);
    }
}


ships.generateLocations();
for(let i = 0; i<ships.ship.length; i++){
    console.log(ships.ship[i]);
}

document.getElementById("guessButon").onclick = handleInput;
//revealAll();
