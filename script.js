let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// for computer choice 
const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}
// for draw game
const drawGame = () => {
msg.innerText = "Game is Draw!";
msg.style.backgroundColor = "#081b31";
    
}

const showWinner = (userWin, userChoice, compChoice ) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = ` You lost!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice)=>{
    console.log("user choice = ", userChoice);
// Generate computer choice  this way is called modular programming , we divide the task into smaller tasks 
    const compChoice = genComputerChoice();
    console.log(" comp choice = ", compChoice);

    if(userChoice === compChoice){
        // call draw game
        drawGame();

        // rules:
        // Between rock and paper ; paper Wins 
        // Between rock and scissors ; rock wins
        // Between paper and scissors; scissors wins  
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice ==="scissors" ? false : true;
        }else {
            // rock, paper
           userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
   
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
      
        playgame(userChoice);
    });
});