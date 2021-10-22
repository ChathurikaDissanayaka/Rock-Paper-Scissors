let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreborad_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randNumber = Math.floor(Math.random()*3);
    return choices[randNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock"; 
    if(letter === "p") return "Paper"; 
    return "Scissors";
}

function win(user, computer) {
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win 🥳`;
    userChoice_div.classList.add('border-glow-win');
    setTimeout(() => userChoice_div.classList.remove('border-glow-win'), 300);
}

function lose(user, computer) {
    const userChoice_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. You Lost 🙁`;
    userChoice_div.classList.add('border-glow-lost');
    setTimeout(() => userChoice_div.classList.remove('border-glow-lost'), 300);
}

function draw(user, computer) {
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}. It's a draw 🙊`;
    userChoice_div.classList.add('border-glow-draw');
    setTimeout(() => userChoice_div.classList.remove('border-glow-draw'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch (userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); 
            break;
    }
}

rock_div.addEventListener('click', () => game("r"));

paper_div.addEventListener('click', () => game("p"));

scissors_div.addEventListener('click', () => game("s"));
