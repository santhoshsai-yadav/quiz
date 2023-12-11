const quizdata = [
    {
        question: "which language runs in a web browser",
        a: "java",
        b: "c",
        c: "python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "what does css stand for",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "what does HTML stand for",
        a: "How to Make Lasagna",
        b: "HyperText Markup Language",
        c: "HotMail",
        d: "Opening tag has a / in front.",
        correct: "b",
    },
    {
        question: "what was the year javascript launcher",
        a: "2000",
        b: "2023",
        c: "none",
        d: "1995",
        correct: "d",
    },
]



const quiz = document.getElementById("quiz");
const answerele = document.querySelectorAll('.answer');
const questione1 = document.getElementById('question');
const atext = document.getElementById("a-text");
const btext = document.getElementById("b-text");
const ctext = document.getElementById("c-text");
const dtext = document.getElementById("d-text");
const submit = document.getElementById("submit");

let currentquiz = 0
let score = 0

loadquiz()

function loadquiz() {
    deselectanswer()
    const currentquizdata = quizdata[currentquiz]

    questione1.innerHTML = currentquizdata.question
    atext.innerText = currentquizdata.a
    btext.innerText = currentquizdata.b
    ctext.innerText = currentquizdata.c
    dtext.innerText = currentquizdata.d
}

function deselectanswer() {
    answerele.forEach(answerel => answerel.checked = false)
}
function getselected() {
    let answer
    answerele.forEach(answere1 => {
        if (answere1.checked) {
            answe = answere1.id
        }
    })
    return answe
}

submit.addEventListener('click', () => {
    const answer = getselected()
    if (answer) {
        if (answer === quizdata[currentquiz].correct) {
            score++
        }
        currentquiz++

        if (currentquiz < quizdata.length) {
            loadquiz()
        } else{
            quiz.innerHTML=`
            <h2> You Answered ${score}/${quizdata.length}questions correctly </h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})