let gameBegin = false;
let control = 0;
function setPlayer(selectPlayer){
    let player = document.getElementById(selectPlayer).value;
    return player;
}

function verifyWin(){
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;

    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;

    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    let notWiner = true;

    if((a1 == b1) && (b1 == c1) && (a1 != "") && (b1 != "") && (c1 != "")){
        if(a1 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }
    if((a2 == b2) && (b2 == c2) && (a2 != "") && (b2 != "") && (c2 != "")){
        if(a2 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }
    if((a3 == b3) && (b3 == c3) && (a3 != "") && (b3 != "") && (c3 != "")){
        if(a3 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }

    if((a1 == a2) && (a2 == a3) && (a1 != "") && (a2 != "") && (a3 != "")){
        if(a1 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }
    if((b1 == b2) && (b2 == b3) && (b1 != "") && (b2 != "") && (b3 != "")){
        if(b1 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }
    if((c1 == c2) && (c2 == c3) && (c1 != "") && (c2 != "") && (c3 != "")){
        if(c1 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }

    if((a1 == b2) && (b2 == c3) && (a1 != "") && (b2 != "") && (c3 != "")){
        if(a1 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }
    if((a3 == b2) && (b2 == c1) && (a3 != "") && (b2 != "") && (c1 != "")){
        if(a3 == "X"){
            return "Player1 WIN";
        }else{
            return "Player2 WIN";
        }
    }

    if(notWiner){
        return "Not WIN";
    }

}

function placePiece(local){
    let player1 = setPlayer("player1");
    let player2 = setPlayer("player2");
    
    let campo = document.getElementById(local);
    if(gameBegin){
        if(control % 2 == 0){
            campo.innerHTML = "X";
        }else{
            campo.innerHTML = "O";
        }
        let win = verifyWin();
        if(win == "Player1 WIN"){
            alert(player1 + " WIN!!");
        }else if(win == "Player2 WIN"){
            alert(player2 + " WIN!!");
        }
        control++;
    }else{
        alert("Insert players name and click in set player button!");
    }
}

function beginGame(){
    gameBegin  = true;
    return gameBegin;
}
