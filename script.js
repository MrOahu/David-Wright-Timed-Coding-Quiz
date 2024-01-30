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
  ]

//create startQuiz function that starts time
//create a function 
function startQuiz (){
startScreen.setAttribute("class", "hide")
questions.removeAttribute("class", "hide")

setInterval(function(){
secondsLeft = secondsLeft-1 //subtracts 1 from secondsLeft
time.textContent = secondsLeft // updates time div to display newest secondsLeft value
}, 1000) //runs each second

/// call displayQuestions function 
displayQuestions()
}

//create function that displays questions
function displayQuestions(){
var currentQuestion = quizQuestions[questionIndex]
questionTitle.textContent = currentQuestion.title

currentQuestion.choices.forEach(function(choice){

    var newButton = document.createElement("button")
    newButton.textContent = choice


    // append = attach
    choices.append(newButton)
})
}
// create function that checks answer choices when clicked

// create function to end quiz and stop time





startBtn.onclick = startQuiz
