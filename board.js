var board = "<table>";
const row = 7;
const col = 7;
for(let i = 0; i<row; i++){
    board += "<tr>";
    for(let j = 0; j<col; j++){
        board += ("<td id=" + i) + j + "></td>";
    }
    board += "</tr>";
}
board += "</table>";
let doc = document.getElementById("board");
doc.innerHTML = board;

