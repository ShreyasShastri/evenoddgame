var evodClick = new Audio("click-sound.wav");
var startClick = new Audio("start-click.wav");

var aNumber=null;
var evenCount=0;
var oddCount=0;
const TOTALQUESTION=20;
const TIMER=1000;
var totalTime = (TOTALQUESTION + 1) * TIMER;


let evenElement=document.getElementById("even");
let oddElement=document.getElementById("odd");


function RandomNumber(){
    let value = Math.floor(Math.random() * 1000) + 2;
    return value;
}

function refreshPage(){
    window. location. reload();
    }


function GenerateRandomNumber(){
    var disableButton = document.getElementById("start-button");
    disableButton.disabled = true;
    var tag = document.getElementById("random-value");
    var now = new Date().getTime();
    var intervalId = setInterval(() => {
        aNumber = RandomNumber();
        tag.innerText = aNumber;

        if (new Date().getTime() - now > totalTime) {
            clearInterval(intervalId);
            if(evenCount+oddCount == TOTALQUESTION){
                alert("YOU WIN !!!");
                refreshPage();
                return;
            }else{
                alert("YOU LOOSE !!!");
                refreshPage();
                return;
            }
            
        }
    }, TIMER);
}

function ifOdd(){
    if(aNumber % 2 == 0){
        alert("Wrong button Clicked !! You LOOSE");
        refreshPage();
    }
    
}

function ifEven(){
    if(aNumber % 2 != 0){
        alert("Wrong button Clicked !! You LOOSE");
        refreshPage();
    }
    
}


function EvenIncrement(){
    evenCount += 1;
    evenElement.innerText = evenCount;
}

function OddIncrement(){
    oddCount += 1;
    oddElement.innerText = oddCount;
}