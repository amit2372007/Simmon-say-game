let gameSeq = [];
let userSeq = [];

let level = 0;
let gamestart = false;
let btn = ["red" ,"green" ,"yellow" ,"blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if(gamestart == false) {
        console.log("game Started");
        gamestart = true;
        levelUp();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    } , 1000);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    } , 300);
}
function levelUp() {
    userSeq = [];
       level++;
       h2.innerText = `Level : ${level}`; 

       let randIdx = Math.floor(Math.random() * 3);
       let randcolor = btn[randIdx];
       let randBtn = document.querySelector(`.${randcolor}`);
       gameSeq.push(randcolor);
       console.log(gameSeq);
       btnFlash(randBtn);
}
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp ,1500 );
        }
    }else {
        gameOver();
    } 
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (let i=0 ; i < 4; i++) {
    allBtns[i].addEventListener("click" , btnPress);
}
function gameOver() {
    console.log("game over");
    h2.innerHTML = `Game Over! You score <b>${level}</b> <br/>  Press any key to restart`;
    let body = document.querySelector("body");
    body.classList.add("gameover");
    setTimeout(function() {
        body.classList.remove("gameover");
    } , 1000); 
    gamestart = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
