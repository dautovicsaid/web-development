const questions = [
    {
        text: "Ko je osnivac kompanije dsad",
        answers: [
            { letter: 'A', text: 'Bill Gejts' },
            { letter: 'B', text: 'Ber Grils' },
            { letter: 'C', text: 'Adam Vers' },
        ],
        correcAnswer: "A"
    },
    {
        text: "Koji je naziv prvog programera",
        answers: [
            { letter: 'A', text: 'Nikola Tesla' },
            { letter: 'B', text: 'Marko Markovic' },
            { letter: 'C', text: 'Van Dam' },
        ],
        correcAnswer: "C"
    }, {
        text: "Ko je napisao knjigu",
        answers: [
            { letter: 'A', text: 'Agata Kristi' },
            { letter: 'B', text: 'Ber Grils' },
            { letter: 'C', text: 'Adam Vers' },
        ],
        correcAnswer: "B"
    }
];

var remainingTime = 15;
var remainingTimeInterval;

function startQuiz() {
    let quizWrapper = document.getElementById("quiz_wrapper");

    let questionsHTML = [];

    questions.forEach((question, questionIndex) => {
        questionsHTML.push(`<h1> ${question.text} </h1>`);
        question.answers.forEach((answer) => {
            questionsHTML.push(`<label> <input type="radio" name="question${questionIndex}" value="${answer.letter}"></input>${answer.letter} : ${answer.text}</label>`)
        })
    })

    quizWrapper.innerHTML = questionsHTML.join("");

    remainingTimeInterval = setInterval(() => {
        remainingTime--;
        document.getElementById("time_wrapper").innerHTML = `Preostalo je jos ${remainingTime} sekundi`;
        if(remainingTime == 0) finishQuiz();
    },1000);
}


function finishQuiz() {
    let points = 0;
    questions.forEach((question, questionIndex) => {
        let userAnswer = document.querySelector(`input[name=question${questionIndex}]:checked`);
        if (userAnswer!=null && userAnswer.value == question.correcAnswer) {
            points++;
        }
    });

    displayPoints(points);
    clearInterval(remainingTimeInterval);
    document.getElementById("time_wrapper").remove();

    remainingTime = 15;
}

function displayPoints(points) {
    let pointsWrapper = document.getElementById("pointswrapper");

    pointsWrapper.classList.add("alert");

    if (points < (questions.length / 2)) {
        pointsWrapper.classList.add("alert-danger");
    } else {
        pointsWrapper.classList.add("alert-success");
    }

    pointsWrapper.innerHTML = `Osvojeno: ${points} od mogucih ${questions.length} poena`;
}

startQuiz();

document.getElementById("finishQuizButton").addEventListener('click', finishQuiz);