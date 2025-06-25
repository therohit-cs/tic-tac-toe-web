let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reser-btn");

let turnB=true;//playerA, playerB

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
        console.log("box was clicked");
        if(turnB) {
            turnB=false;
            box.innerText="O";
        } else {
            turnB=true;
            box.innerText="X";
        }
        box.disabled=true;
    });
});

