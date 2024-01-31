var time = document.querySelector("#time")
var startScreen = document.querySelector("#start-screen")
var startBtn = document.querySelector("#startBtn")
var questions = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var choices = document.querySelector("#choices")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")
var initials = document.querySelector("#initials")
var submit = document.querySelector("#submit")
var secondsLeft = 60
var questionIndex = 0
var timerInterval;
var quizQuestions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Beyonce Knowles' husband is:",
        choices: ["Jay-Z", "Ja Rule", "Nas", "Tupac Shakur"],
        answer: "Jay-Z"
    },
    {
        title: "The world's largest country by area is:",
        choices: ["China", "Russia", "Canada", "Jamaica"],
        answer: "Russia"
    },
]

//create startQuiz function that starts time
//create a function 
function startQuiz (){
startScreen.setAttribute("class", "hide")
questions.removeAttribute("class", "hide")

timerInterval = setInterval(function(){
secondsLeft = secondsLeft-1 //subtracts 1 from secondsLeft
time.textContent = secondsLeft // updates time div to display newest secondsLeft value
if (secondsLeft <=0) {
    clearInterval (timerInterval)
    console.log("quiz over")
}
}, 1000) //runs each second

/// call displayQuestions function 
displayQuestions()
}

//create function that displays questions
function displayQuestions(){

var currentQuestion = quizQuestions[questionIndex]

questionTitle.textContent = currentQuestion.title
// clears out previous answer choices
choices.innerHTML = ""
//renders new answer choices and appends them to choices div
currentQuestion.choices.forEach(function(choice){

    var newButton = document.createElement("button")
    newButton.textContent = choice
    newButton.setAttribute("value", choice)
    // attach checkAnswer function to compare value against correct answer
    newButton.onclick=checkAnswer
    // append = attach
    choices.append(newButton)
})
}
// create function that checks answer choices when clicked
function checkAnswer(){
    if (this.value === quizQuestions[questionIndex].answer) {
        console.log("correct")
        alert("CORRECT!")
    }
    else{
        console.log("incorrect")
        alert("INCORRECT!")
        // make sure to penalize user for incorrect answer
    }
    // moves to next questionIndex
    questionIndex++
    // if we run out of questions run stopQuiz function, otherwise render next question
    if (questionIndex===quizQuestions.length){
        stopQuiz()
    } else {
        displayQuestions()
    }
    
}
// create function to end quiz and stop time
function stopQuiz(){
    questions.setAttribute("class","hide")
    endScreen.removeAttribute("class", "hide")
    clearInterval (timerInterval)
    finalScore.textContent = secondsLeft
}




startBtn.onclick = startQuiz
