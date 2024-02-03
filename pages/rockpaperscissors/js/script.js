const data = {
    div:{
        headerTitle : "Rock Paper Scissors",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    }
}

document.title = data.div.headerTitle;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});


let playerImage = 1

let score = 0;
let best = 0;
let scissors = "url('img/scissors.png')"
let paper = "url('img/paper.png')"
let rock = "url('img/rock.png')"

document.getElementById('player').style.backgroundImage = paper;

function previous(){
    removeStuffs();
    if (playerImage === 1){
        playerImage = 3
        document.getElementById('player').style.backgroundImage = scissors;
    } else if (playerImage === 2){
        playerImage = 1
        document.getElementById('player').style.backgroundImage = paper;
    } else if (playerImage === 3){
        playerImage = 2
        document.getElementById('player').style.backgroundImage = rock;
    } 

}

function forward(){
    removeStuffs();
    if (playerImage === 1){
        playerImage = 2
        document.getElementById('player').style.backgroundImage = rock;
    } else if (playerImage === 2){
        playerImage = 3
        document.getElementById('player').style.backgroundImage = scissors;
    } else if (playerImage === 3){
        playerImage = 1
        document.getElementById('player').style.backgroundImage = paper;
    } 
}

function generateRandomImage(){
    let opponentImage = Math.floor(Math.random() * 3) + 1 

    if (opponentImage === 1){
        document.getElementById('opponent').style.backgroundImage = rock;
        opponentImage = 2
    } else if (opponentImage === 2){
        document.getElementById('opponent').style.backgroundImage = scissors;
        opponentImage = 3
    } else if (opponentImage === 3){
        document.getElementById('opponent').style.backgroundImage = paper;
        opponentImage = 1
    } 
    return opponentImage
}

function myFunction(){
   removeStuffs();
   let opponentImage =  generateRandomImage();

    if ( (playerImage === 1 && opponentImage ==2) || (playerImage === 2 && opponentImage ==3) || (playerImage === 3 && opponentImage ==1) ){
        score++
        best = score > best ? score : best
        document.getElementById('score').innerHTML = score
        document.getElementById('best').innerHTML = best
        document.getElementById('message').innerHTML = 'You Win!'
    } else if ( (playerImage === 1 && opponentImage ==3) || (playerImage === 2 && opponentImage == 1) || (playerImage === 3 && opponentImage ==2) ){
        document.getElementById('message').innerHTML = 'You Lose!'
        score=0
        document.getElementById('score').innerHTML = score
    } else{
        document.getElementById('message').innerHTML = `It's a Draw!`
    }

}

function removeStuffs() {
    document.getElementById('message').innerHTML = 'Good Luck!'
    document.getElementById('opponent').style.backgroundImage = "url()";
}



/**********************************************************************
**** USE BELOW ONLY IF YOU WANT TO TRIGGER getElementsByClassName *****
**********************************************************************/

// let headerCloseElements = document.getElementsByClassName("header-close");

// Array.from(headerCloseElements).forEach(function(element) {
//     element.addEventListener('click', () => {
//         window.location.href = "../../index.html";
//     });
//   });
//

/**********************************************************************
**** USE BELOW ONLY IF YOU WANT TO TRIGGER getElementsById *****
**********************************************************************/

// document.getElementById("page-close").addEventListener("click", () => {
//     window.location.href = "../../index.html";
// });

