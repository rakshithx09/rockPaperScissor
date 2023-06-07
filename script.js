

// computer choice

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors" ];
    return choice[Math.floor(Math.random()*(choice.length))];
}

// set player selection

function optionName(opt){
    if(opt.className == "option-1"){
        return "rock"
    } else if (opt.className == "option-2"){
        return "paper";
    }else {
        return "scissors";
    }
}






// Game keeps going on until a player scores 5 points

let compPoints = 0;
let playerPoints = 0;

const compPointsCount  = document.querySelector('.game-section .computer-points h1');
const playerPointsCount  = document.querySelector('.game-section .player-points h1');
const computerChoice = document.createElement('h2');
const roundInfo =  document.createElement('p');
const popup = document.querySelector('#popup');

function playRound(playerSelection, computerSelection){
    
    document.querySelector('.game-section .round-info').appendChild(computerChoice);
    document.querySelector('.game-section .round-info').appendChild(roundInfo);
    if(playerSelection == computerSelection){
        computerChoice.textContent = `Computer chose ${computerSelection}`;
        roundInfo.textContent = "Its a draw!";
    } else if((computerSelection == "paper" && playerSelection == "rock")||(computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
        compPoints++;
        if(compPoints == 5 && playerPoints < 5){
            document.querySelector('#popup h2').textContent = 'You Lose!';
            popup.classList.add('active');
            document.querySelector('#main').classList.toggle('blur');
            return;
        }
        computerChoice.textContent = `Computer chose ${computerSelection}`;
        roundInfo.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        compPointsCount.textContent = compPoints;
    } else{
        playerPoints++;
        if(playerPoints == 5 && compPoints < 5){
            document.querySelector('#popup h2').textContent = 'You Win!';
            popup.classList.add('active');
            document.querySelector('#main').classList.toggle('blur');
            return;
        }
        computerChoice.textContent = `Computer chose ${computerSelection}`;
        roundInfo.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerPointsCount.textContent = playerPoints;
    }

    document.querySelector('.game-section > h3').textContent = "First to score 5 points wins";

}




// Start game when user selects an option
let options = document.querySelectorAll('.options > div');
options.forEach(option => {
    option.addEventListener('click', () => playRound(optionName(option.className), getComputerChoice()));
});

// play game again on clicking a button in the result popup
let tryAgain = document.querySelector('#popup button');
tryAgain.addEventListener('click', ()=>location.reload());








    








