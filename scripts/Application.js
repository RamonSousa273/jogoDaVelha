let gameBegin = false;
let control = 0;
function setPlayer(selectPlayer){
    let player = document.getElementById(selectPlayer).value;
    return player;
}

function verifyWin(){
    let a1 = document.getElementById("a1");
    let b1 = document.getElementById("b1");
    let c1 = document.getElementById("c1");

    let a2 = document.getElementById("a2");
    let b2 = document.getElementById("b2");
    let c2 = document.getElementById("c2");

    let a3 = document.getElementById("a3");
    let b3 = document.getElementById("b3");
    let c3 = document.getElementById("c3");

    let notWiner = true;

    if((a1.innerHTML == b1.innerHTML) && (b1.innerHTML == c1.innerHTML) 
    && (a1.innerHTML != "") && (b1.innerHTML != "") && (c1.innerHTML != "")){
        if(a1.innerHTML == "X"){
            a1.style.color = "red";
            b1.style.color = "red";
            c1.style.color = "red";
            return "Player1 WIN";
        }else{
            a1.style.color = "red";
            b1.style.color = "red";
            c1.style.color = "red";
            return "Player2 WIN";
        }
    }
    if((a2.innerHTML == b2.innerHTML) && (b2.innerHTML == c2.innerHTML) && (a2.innerHTML != "") 
    && (b2.innerHTML != "") && (c2.innerHTML != "")){
        if(a2.innerHTML == "X"){
            a2.style.color = "red";
            b2.style.color = "red";
            c2.style.color = "red";
            return "Player1 WIN";
        }else{
            a2.style.color = "red";
            b2.style.color = "red";
            c2.style.color = "red";
            return "Player2 WIN";
        }
    }
    if((a3.innerHTML == b3.innerHTML) && (b3.innerHTML == c3.innerHTML) && (a3.innerHTML != "") 
    && (b3.innerHTML != "") && (c3.innerHTML != "")){
        if(a3.innerHTML == "X"){
            a3.style.color = "red";
            b3.style.color = "red";
            c3.style.color = "red";
            return "Player1 WIN";
        }else{
            a3.style.color = "red";
            b3.style.color = "red";
            c3.style.color = "red";
            return "Player2 WIN";
        }
    }

    if((a1.innerHTML == a2.innerHTML) && (a2.innerHTML == a3.innerHTML) && (a1.innerHTML != "") 
    && (a2.innerHTML != "") && (a3.innerHTML != "")){
        if(a1.innerHTML == "X"){
            a1.style.color = "red";
            a2.style.color = "red";
            a3.style.color = "red";
            return "Player1 WIN";
        }else{
            a1.style.color = "red";
            a2.style.color = "red";
            a3.style.color = "red";
            return "Player2 WIN";
        }
    }
    if((b1.innerHTML == b2.innerHTML) && (b2.innerHTML == b3.innerHTML) && (b1.innerHTML != "") 
    && (b2.innerHTML != "") && (b3.innerHTML != "")){
        if(b1.innerHTML == "X"){
            b1.style.color = "red";
            b2.style.color = "red";
            b3.style.color = "red";
            return "Player1 WIN";
        }else{
            b1.style.color = "red";
            b2.style.color = "red";
            b3.style.color = "red";
            return "Player2 WIN";
        }
    }
    if((c1.innerHTML == c2.innerHTML) && (c2.innerHTML == c3.innerHTML) && (c1.innerHTML != "") 
    && (c2.innerHTML != "") && (c3.innerHTML != "")){
        if(c1.innerHTML == "X"){
            c1.style.color = "red";
            c2.style.color = "red";
            c3.style.color = "red";
            return "Player1 WIN";
        }else{
            c1.style.color = "red";
            c2.style.color = "red";
            c3.style.color = "red";
            return "Player2 WIN";
        }
    }

    if((a1.innerHTML == b2.innerHTML) && (b2.innerHTML == c3.innerHTML) && (a1.innerHTML != "") 
    && (b2.innerHTML != "") && (c3.innerHTML != "")){
        if(a1.innerHTML == "X"){
            a1.style.color = "red";
            b2.style.color = "red";
            c3.style.color = "red";
            return "Player1 WIN";
        }else{
            a1.style.color = "red";
            b2.style.color = "red";
            c3.style.color = "red";
            return "Player2 WIN";
        }
    }
    if((a3.innerHTML == b2.innerHTML) && (b2.innerHTML == c1.innerHTML) && (a3.innerHTML != "") 
    && (b2.innerHTML != "") && (c1.innerHTML != "")){
        if(a3.innerHTML == "X"){
            a3.style.color = "red";
            b2.style.color = "red";
            c1.style.color = "red";
            return "Player1 WIN";
        }else{
            a3.style.color = "red";
            b2.style.color = "red";
            c1.style.color = "red";
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
            setTimeout(function(){alert(player1 + " Ganhol!!")}, 250);
        }else if(win == "Player2 WIN"){
            setTimeout(function(){alert(player2 + " Ganhol!!")}, 250);
        }
        control++;
    }else{
        alert("Insira o nome dos jogadores e clique no botão jogar.");
    }
}

function beginGame(){
    gameBegin  = true;
    return gameBegin;
}
