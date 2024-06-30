const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const myScoreDisplay = document.querySelector(".myScore");
const compScoreDisplay = document.querySelector(".compScore");
const result = document.querySelector(".result");
const yourSelectionDisplay = document.querySelector(".yourChoice");
const compSelectionDisplay = document.querySelector(".compChoice");
let yourSelection;
let compSelection;
let myNumber;
let compNumber;
let myScore = 0;
let compScore = 0;

rock.addEventListener("click", () => {
    myNumber = 0;
    random = Math.random() * 3;
    compNumber = Math.floor(random);

    if (myNumber == compNumber) {
        yourSelection = "Rock";
        compSelection = "Rock";
        result.innerText = "Draw";
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
    else if (compNumber == 1) {
        yourSelection = "Rock";
        compSelection = "Paper";
        result.innerText = "Computer Won";
        compScore++;
        compScoreDisplay.innerText = "Comp: " + compScore;
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
    else {
        yourSelection = "Rock";
        compSelection = "Scissors";
        result.innerText = "You Won"
        myScore++;
        myScoreDisplay.innerText = "You: " + myScore;
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
})

paper.addEventListener("click", () => {
    myNumber = 1;
    random = Math.random() * 3;
    compNumber = Math.floor(random);

    if (myNumber == compNumber) {
        yourSelection = "Paper";
        compSelection = "Paper";
        result.innerText = "Draw";
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
    else if (compNumber == 0) {
        yourSelection = "Paper";
        compSelection = "Rock";
        result.innerText = "You Won"
        myScore++;
        myScoreDisplay.innerText = "You: " + myScore;
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
    else {
        yourSelection = "Paper";
        compSelection = "Scissors";
        result.innerText = "Computer Won";
        compScore++;
        compScoreDisplay.innerText = "Comp: " + compScore;
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
})

scissors.addEventListener("click", () => {
    myNumber = 2;
    random = Math.random() * 3;
    compNumber = Math.floor(random);

    if (myNumber == compNumber) {
        yourSelection = "Scissors";
        compSelection = "Scissors";
        result.innerText = "Draw";
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
    else if (compNumber == 1) {
        yourSelection = "Scissors";
        compSelection = "Rock";
        result.innerText = "Computer Won";
        compScore++
        compScoreDisplay.innerText = "Comp: " + compScore;
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
    else {
        yourSelection = "Scissors";
        compSelection = "Paper";
        result.innerText = "You Won"
        myScore++
        myScoreDisplay.innerText = "You: " + myScore;
        yourSelectionDisplay.innerText = "You Chose : " + yourSelection;
        compSelectionDisplay.innerText = "Computer Chose : " + compSelection;
    }
})

