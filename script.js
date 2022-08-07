const startbutton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')
const answerButtonsElement = document.getElementById ('answer-buttons')

startbutton.addEventListener('click', startGame)

function startGame() {
console.log('started')
startbutton.classList.add('hide')
questionContainerElement.classList.remove ('hide')
setNextQuestion()
}

function setNextQuestion() {
    function showQuestion(question){

    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions= [
    {
        question: 'Who was the first president?',
        answers:[
        { text: 'George Washington', correct:true},
        { text: 'Thomas Edison', correct:false}
    ]
    }
]