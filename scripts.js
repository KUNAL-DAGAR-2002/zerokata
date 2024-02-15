let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let newGame = document.querySelector(".newGame");
let pl1 = document.querySelector(".one");
let pl2 = document.querySelector(".two");
let turn = 0;
let gameValue = 0;

newGame.disabled = true;

let wins= [[0,1,2],
           [0,3,6],
           [0,4,8],
           [1,4,7],
           [2,5,8],
           [2,4,6],
           [3,4,5],
           [6,7,8]];
console.log(wins);

boxes.forEach((box,idx) => {
    box.addEventListener("click", () => {
        if(turn===0){
            box.innerText = "O";
            box.style.backgroundColor = '#F4E285';
            box.style.color = "black";
            turn = 1;
        }
        else if(turn===1){
            box.innerText = "X";
            box.style.backgroundColor = '#F4A259';
            box.style.color = "black";
            turn = 0;
        }
        box.disabled = true;
        checkWinner();
    
    });
});


let resetGame = () => {
    turn = 0;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "🔍";
        box.style.backgroundColor = "white";
        box.style.color = "black";
    }
    reset.disabled = false;
    newGame.disabled = true;
}

let newgame = () => {
    resetGame();
    for(let item of boxes){
        item.classList.remove("win");
    }
    pl1.classList.remove("winnerClass");
    pl1.classList.remove("fail");
    pl2.classList.remove("winnerClass");
    pl2.classList.remove("fail");
    newGame.disabled = true;
    reset.disabled = false;
}

let checkWinner = () => {
    for(win of wins){
        //console.log(win[0], win[1], win[2]);
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;
        //console.log(pos1,pos2,pos3);
        if(pos1!="🔍" && pos2!=="🔍" && pos3!=="🔍"){
            if(pos1===pos2 && pos2===pos3){
                if(pos1=="O"){pl1.classList.add("winnerClass");pl2.classList.add("fail");}
                else if(pos2=="X"){pl2.classList.add("winnerClass");pl1.classList.add("fail");}
                boxes[win[0]].classList.add("win");
                boxes[win[1]].classList.add("win");
                boxes[win[2]].classList.add("win");

                gameValue = 1;
                for(let box of boxes){
                    box.disabled = true;
                }
                reset.disabled = true;
                newGame.disabled = false;
                newGame.addEventListener("click",newgame);
                
            }
        }
    }
}
reset.addEventListener("click",resetGame);




