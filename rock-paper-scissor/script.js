//declaring variables for the html elements
let startGame = document.querySelector('.start-game');
let playbox = document.querySelector('.playbox');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let score = document.querySelector('.score');
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
let tie = document.querySelector('.tie');
let scoreMessage = document.querySelector('.score-message');
let again = document.querySelector('.again');
let finalMessage = document.querySelector('.final-message');

let wPoints = 0;
let lPoints = 0;
let tPoints = 0;

let playerChoice = 0;
let computerChoice = 0;

//first function, this refreshes the page into welcome mode
function welcome (){
    //hide buttons, scorebox and final message
    playbox.style.display = 'none';
    score.style.display = 'none';
    finalMessage.style.display = 'none';
    scoreMessage.innerHTML = '';
    again.style.display = 'none';

    //shows start button
    startGame.style.display = 'block';

}

//initializes game, starts new game box
function initiateGame(){
    //hides start button
    startGame.style.display = 'none';
    //setting button values
    wPoints = 0;
    lPoints = 0;
    tPoints = 0;

    //updates score
    win.innerText = `${wPoints} won`;
    lose.innerText = `${lPoints} lost`;
    tie.innerText = `${tPoints} tie(s)`;

    //show playbox and score
    playbox.style.display = 'flex';
    score.style.display = 'flex';

}

//function check's game ending conditions and execute/displays it
function checkEndGame() {
    //player won
    if(wPoints == 3)
    {
        //hides play buttons
        playbox.style.display = 'none';
        //final message and play again button
        finalMessage.style.display = 'block';
        finalMessage.style.backgroundColor = 'rgb(165, 221, 92)';
        finalMessage.innerText = 'Congratulations! You won the game!';
        again.style.display = 'block';

    } //player lost
    else if (lPoints == 3)
    {
        //hides play buttons
        playbox.style.display = 'none';
        //final message and play again button
        finalMessage.style.display = 'block';
        finalMessage.style.backgroundColor = 'rgb(216, 138, 138)';
        finalMessage.innerText = 'Too bad! The computer won this time!';
        again.style.display = 'block';
    }
}

//generates computer choice and decides the winner
function rollUpdate(playerChoice){
    //computer's random choice
    computerChoice = Math.floor(Math.random() * 3);
    
    // --------- deciding who won --------
    //draw 
    if (playerChoice == computerChoice)
    {
        tPoints++;
        tie.innerText = `${tPoints} tie(s)`;
        scoreMessage.innerText = 'It\'s a draw!';
        scoreMessage.style.backgroundColor = 'rgb(255, 255, 255)';
    } // player wins
    else if (
        playerChoice == 0 && computerChoice == 2 ||
        playerChoice == 1 && computerChoice == 0 ||
        playerChoice == 2 && computerChoice == 1)
    {
        wPoints++;
        win.innerText = `${wPoints} won`;
        scoreMessage.innerText = 'Your round!';
        scoreMessage.style.backgroundColor = 'rgb(165, 221, 92)';
    } //player loses
    else {
        lPoints++;
        lose.innerText = `${lPoints} lost`;
        scoreMessage.innerText = 'Lost this round!';
        scoreMessage.style.backgroundColor = 'rgb(216, 138, 138)';
    }

    checkEndGame();
    return;
}


//beginning of the code
welcome();


// Event listeners for button clicks
//beginning
startGame.addEventListener('click',initiateGame);
//play game
//this is a very important way of setting an event, it allows to
//call a function in a specific way after a button was clicked with the
//() => notation
rock.addEventListener('click', () => rollUpdate(0)); 
paper.addEventListener('click', () => rollUpdate(1));
scissor.addEventListener('click', () => rollUpdate(2));
//restart option
again.addEventListener('click',welcome);