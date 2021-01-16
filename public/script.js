// alert("heybhak bsdk man");
let ball=document.querySelector(".ball");
let board=document.querySelector(".board");
let boardbound=board.getBoundingClientRect();
let leftPaddle=document.querySelector(".left");
let rightPaddle=document.querySelector(".right");
let y=true;
let x=true;
let leftPlayerLives=3;
let rightPlayerLives=3;

// user input listen
document.addEventListener("keydown",function(e){
    if(e.key=="w"){
    movePaddle(leftPaddle,-window.innerHeight*0.05);
    }else if(e.key=="s"){
    movePaddle(leftPaddle,window.innerHeight*0.01);
    }else if(e.key=="ArrowUp"){
    movePaddle(rightPaddle,-window.innerHeight*0.1);
    }else if(e.key=="ArrowDown"){
    movePaddle(rightPaddle,window.innerHeight*0.1);
    }
})

function setcolor(idx){
    let allicons=document.querySelectorAll(".fas.fa-circle");
    allicons[idx].style.color="#8e44ad";
}



function movePaddle(cPaddle,change){
    let cPaddleBound=cPaddle.getBoundingClientRect();
    if(cPaddleBound.top+change>=boardbound.top&&
        cPaddleBound.bottom+change<=boardbound.bottom){
    cPaddle.style.top=cPaddleBound.top+change+"px";
    }

}


function moveBall(){
let ballcord=ball.getBoundingClientRect();
let ballTop=ballcord.top;
let ballLeft=ballcord.left;
let ballBottom=ballcord.bottom;
let ballRight=ballcord.right;
// isball bound
// handle horozontal bound

// check if collides with any players vertical boundary
let hasTouchedLeft=ballLeft<boardbound.left;
let hasTouchedRight=ballRight>boardbound.right;
if(hasTouchedLeft||hasTouchedRight){
    if(hasTouchedLeft){
        leftPlayerLives--;
        setcolor(leftPlayerLives);
        if(leftPlayerLives==0){
            alert("Game Over Player 🅱 won 💥💥");
            document.location.reload();

        }else{
            return resetgame();
        }
    }else{
        rightPlayerLives--;
        setcolor(3+rightPlayerLives);
        if(rightPlayerLives==0){
            alert("Game Over Player 🅰 won 💥💥");
            document.location.reload();
        }else{
            return resetgame();
        }
    }

}
function resetgame(){
    ball.style.top=window.innerHeight*0.45+"px";
    ball.style.left=window.innerWidth*0.45+"px";
    requestAnimationFrame(moveBall);

}



if(ballTop<=boardbound.top||ballBottom>=boardbound.bottom){
    y=!y;

}


// handle vertical bound
// if(ballLeft<=boardbound.left||ballRight>=boardbound.right){
//     x=!x;
// }
// ***************colliosion***********
let leftPaddleBounds=leftPaddle.getBoundingClientRect();
let rightPaddleBounds=rightPaddle.getBoundingClientRect();
if(ballLeft<=leftPaddleBounds.right&&
    ballRight>=leftPaddleBounds.left&&
    ballTop+30>=leftPaddleBounds.top && 
    ballBottom-30<=leftPaddleBounds.bottom){
        x=!x;
    }

if(ballLeft<=rightPaddleBounds.right&&
    ballRight>=rightPaddleBounds.left&&
    ballTop+30>=rightPaddleBounds.top && 
    ballBottom-30<=rightPaddleBounds.bottom){
        x=!x;
    }  
//********************* */   



ball.style.top= y==true?ballTop+10+"px":ballTop-10+"px";
ball.style.left= x==true?ballLeft+10+"px":ballLeft-10+"px";
requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);