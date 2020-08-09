let sqaures = {
    byClassName: document.querySelectorAll('.square'),
    byId: []
}
for (let i = 0; i < 9; i++) {
    sqaures.byId.push(document.getElementById(`${i + 1}`))
}

console.log(sqaures)

var player = 1
player_1 = []
player_2 = []
moves = 0
const winMoves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

let currentPlayer=document.getElementById('currentPlayer');

function game(id) {
    let square = document.getElementById(id);
   
    if (player == 1 && square.innerText == "") {
        square.style.backgroundColor = "green";
        square.innerText = "X"
        moves+=1
        changeCurrentPlayer('O')
        player=2
        winCheck('X');
    }
    else if (player == 2 && square.innerText == "") {
        square.style.backgroundColor = "Yellow";
        square.innerText = "O"
        moves+=1
        changeCurrentPlayer('X')
        player=1
        winCheck('O');
    }
    else{
        alert("wrong move")
    }
}

function winCheck(player){
    win=false
    for(let i=0;i<=7;i++){
        let winCon=winMoves[i];
        let a=(document.getElementById(`${winCon[0]}`)).innerText
        let b=(document.getElementById(`${winCon[1]}`)).innerText
        let c=(document.getElementById(`${winCon[2]}`)).innerText

        if(a=='' || b=='' || c==''){
            continue;
        }
        else if(a===b&& b===c){
            win=true;
        }
    }

    if(win){
        alert(`Player ${player} won`)
        resetGame()
    }
}


function resetGame(){
    for(i=0;i<=8;i++){
        sqaures.byId[i].innerText=''
        sqaures.byId[i].style.backgroundColor='blue'
    }
    currentPlayer.innerText=`Current Player: X`
    player=1
}

function changeCurrentPlayer(s){
    currentPlayer.innerText=`Current Player: ${s}`
}
