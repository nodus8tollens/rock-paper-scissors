
//Function for random generation of computer value.
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
//Function for playing one round and determining the outcome.
function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "It's a DRAW.";
    }
    else if(playerSelection === "rock" && computerSelection ==="scissors" ||
            playerSelection === "paper" && computerSelection ==="rock" ||
            playerSelection === "scissors" && computerSelection ==="paper"){
        return `${playerSelection} beats ${computerSelection}. Player wins.`;
    }
    else{
        return `${computerSelection} beats ${playerSelection} . Computer wins.`;
    }
}
//Function for playing five consecutive rounds, keeping score and printing the final outcome.
function game(){
    //pl, pc are player and computer scores respectively.
    let pl, pc = 0;
    for(let i = 0; i < 5; i++){
        //Generate five rounds. Prompt player for choice. Play rounds and update pl, pc - scores.
        let player = prompt("Rock, paper or scissors?").toLowerCase();
        alert(playRound(player, computerPlay()));
        if(playRound(player, computerPlay()).includes("Player")){
            pl++;
        }
        else if(playRound(player, computerPlay()).includes("Computer")) {
            pc++;
        }
        else{
            continue;
        }
    }
    if(pl > pc){
        alert("Game Over. Player wins.");
    }
    else if(pc > pl){
        alert("Game Over. Computer wins.");
    }
    else{
        alert("Game Over. It's a draw.");
    }
}