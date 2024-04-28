let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-btn");
let container =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX=true;
let count=0;
let c;

let answers=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Box was clicked")
        if(turnX)
        {
            box.innerText = "X";
            box.style.color="Purple";
            turnX=false;
        }
        else
        {
            box.innerText = "O";
            turnX=true;
        }
        ++count;

        box.disabled=true; 

        checkWinner();

        if(count===9 && c!==1)
        {
            draw();
        }
    })
})

const checkWinner = ()=>{
    answers.forEach((answer)=>{
        // console.log(boxes[answer[0]],boxes[answer[1]],boxes[answer[2]]);
        let pos1val=boxes[answer[0]].innerText;
        let pos2val=boxes[answer[1]].innerText;
        let pos3val=boxes[answer[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                // console.log("Winner ",pos1val);
                disableboxes();
                showWinner(pos1val);
            }
        }
    })
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    container.classList.remove("hide");
    c=1;
}

const disableboxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableboxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}

const resetgame = ()=>{
    turnX=true;
    enableboxes();
    container.classList.add("hide");
}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

const draw=()=>{
    msg.innerText="DRAW";
    container.classList.remove("hide");
}