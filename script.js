const quizData = [
    {
        question: "In quale città italiana si trova “Piazza di Spagna”?",
        a: "Milano",
        b: "Bologna",
        c: "Roma",
        d: "Venezia",
        correct: "c",
    },
    {
        question: "Quando è finita la Seconda Guerra Mondiale?",
        a: "1948",
        b: "1945",
        c: "1968",
        d: "1893",
        correct: "b",
    },
    {
        question: "Quanti tasti ci sono in un pianoforte?",
        a: "88",
        b: "97",
        c: "109",
        d: "57",
        correct: "a",
    },
    {
        question: "In che anno è iniziata la demolizione del muro di Berlino?",
        a: "1979",
        b: "1839",
        c: "1974",
        d: "1989",
        correct: "d",
    },
];

const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('domanda')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

//Load di più quiz
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
           score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } 
        else{
            if(currentQuiz < quizData.length) {
                loadQuiz()
            } 
            else{
                quiz.innerHTML = `
                <h2>La tua risposta ha totalizzato ${score}/${quizData.length} punto/i.</h2>
                <button class="submit" onclick="location.reload()">Riprova e Ricarica</button>
                `
            }
       }
    }
})