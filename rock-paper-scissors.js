function computerPlay(){
    if (Math.floor(Math.random()*3) === 0){
        return "rock";
    }
    else if(Math.floor(Math.random()*3) === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let pS = 0;
let cS = 0;
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a DRAW.";
    }
    else if(playerSelection === "rock" && computerSelection ==="scissors" ||
            playerSelection === "paper" && computerSelection ==="rock" ||
            playerSelection === "scissors" && computerSelection ==="paper"){
        pS++;
        return `${playerSelection} beats ${computerSelection}. Player wins.`;
    }
    else{
        cS++;
        return `${computerSelection} beats ${playerSelection}. Computer wins.`;
    }
}

const container = document.querySelector('body');

const rock = document.createElement('button');
rock.id = "rock";
rock.textContent = "Rock"
const paper = document.createElement('button');
paper.id = "paper";
paper.textContent = "Paper"
const scissors = document.createElement('button');
scissors.id = "scissors";
scissors.textContent = "Scissors"

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const r = document.querySelector('#rock');
const p = document.querySelector('#paper');
const s = document.querySelector('#scissors');

const div = document.createElement('div');

r.addEventListener('click', () => {
    if(pS === 5 || cS === 5){
        div.textContent = `Game Over. Final score is ${pS}:${cS}.`;
    }
    else {
        div.textContent = playRound('rock', computerPlay());
    }
   console.log(pS, cS);
});
p.addEventListener('click', () => {
    if(pS === 5 || cS === 5){
        div.textContent = `Game Over. Final score is ${pS}:${cS}.`;
    }
    else {
        div.textContent = playRound('paper', computerPlay());
    }
    console.log(pS, cS);
});

s.addEventListener('click', () => {
    if(pS === 5 || cS === 5){
        div.textContent = `Game Over. Final score is ${pS}:${cS}.`;
    }
    else {
        div.textContent = playRound('scissors', computerPlay());
    }
    console.log(pS, cS);
});

container.appendChild(div);








