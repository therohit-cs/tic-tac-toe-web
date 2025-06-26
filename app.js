let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnB=true;//playerA, playerB
let count=0;//To track draw

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnB) {
            //playerB
            turnB=false;
            box.innerText="O";
            box.style.backgroundColor="#3eaf9e";
        } else {
            //playerA
            turnB=true;
            box.innerText="X";
            box.style.backgroundColor="#af3e4d";
        }
        box.disabled=true;

        checkWinner();
        count++;

        let isWinner=checkWinner();

        if(count ==9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () =>{
    msg.innerText="Game was a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

const resetBoxes = () =>{
       turnB=true;
       count=0;
       enableBoxes();
       msgContainer.classList.add("hide");
       for(let box of boxes) {
       box.style.backgroundColor="";
       }
};  

const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for( let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click",resetBoxes);
resetBtn.addEventListener("click",resetBoxes);
