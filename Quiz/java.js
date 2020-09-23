const questions = [
    {
        question: "What is 2+2?",
        answers: [
            {
                text: "5", correct: false
            },
            {
                text: "4", correct: true
            },
            {
                text: "3", correct: false
            },
            {
                text: "7", correct: false
            }
        ]
    },
    {
        question: "What country won the very first FIFA World Cup in 1930?",
        answers: [
            {
                text: "Brasil", correct: false
            }
            ,
            {
                text: "Spain", correct: false
            },
            {
                text: "Argentina", correct: false
            },
            {
                text: "Uruguay", correct: true
            }
        ]
    },
    {
        question: "What does HTTP stand for?",
        answers: [
            {
                text: "Hypertext Markup Language", correct: false
            }
            ,
            {
                text: "Hypertext Model Language", correct: false
            },
            {
                text: "Hypertext Transfer Protocol", correct: true
            },
            {
                text: "Hypertext Transmission Protocol", correct: false
            }
        ]
    },
    {
        question: "What is often seen as the smallest unit of memory?",
        answers: [
            {
                text: "megabyte", correct: false
            }
            ,
            {
                text: "gigabyte", correct: false
            },
            {
                text: "kilobyte", correct: true
            },
            {
                text: "byte", correct: false
            }
        ]
    }
    , {
        question: "Who is often called the father of the computer?",
        answers: [
            {
                text: "Charles Babbage", correct: true
            },
            {
                text: "Alan Turing", correct: false
            },
            {
                text: "Larry Page", correct: false
            },
            {
                text: "Bill Gates", correct: false
            }
        ]
    }
    ,
    {
        question: "What is capital city of United States?",
        answers: [
            {
                text: "California", correct: false
            },
            {
                text: "Washington DC", correct: true
            },
            {
                text: "New York", correct: false
            },
            {
                text: "Chicago", correct: false
            }
        ]
    },
    {
        question: "Which part of the atom has no electric charge?",
        answers: [
            {
                text: "Proton", correct: false
            },
            {
                text: "Electron", correct: false
            },
            {
                text: "Neutron", correct: true
            },
            {
                text: "Nucleus", correct: false
            }
        ]
    },
    {
        question: "How many Lord of the Rings films are there?",
        answers: [
            {
                text: "2", correct: false
            },
            {
                text: "3", correct: true
            },
            {
                text: "1", correct: false
            },
            {
                text: "4", correct: false
            }
        ]
    },
    {
        question: "Which cartoon character lives in a pinapple under the sea?",
        answers: [
            {
                text: "Asterix", correct: false
            },
            {
                text: "Spongebob Squarepants", correct: true
            },
            {
                text: "Nemo", correct: false
            },
            {
                text: "Duffy Duck", correct: false
            }
        ]
    },
    {
        question: "What is Which company owns Bugatti, Lamborghini. Audi, Porsche and Ducati? city of United States?",
        answers: [
            {
                text: "Volkswagen", correct: true
            },
            {
                text: "BMW", correct: false
            },
            {
                text: "Tesla", correct: false
            },
            {
                text: "Ford", correct: false
            }
        ]
    }
];
var endOfQuiz = false;
var numberOfCorrectAnswers;
var numberOfQuestions;
var indexCurrentlyQuestion;
const start = document.getElementById('start-btn')
var randomQuestions = questions.sort(() => Math.random() - .5);
const questionElement = document.getElementsByClassName("question")[0];
const questionParagraph = document.getElementById("questionP");
const nextQuestionButton = document.getElementById("next-btn");
const answerElements = document.getElementsByClassName("answer");
const resultElement = document.getElementById("result");

function StartQuiz() {
    RestartQuiz();
    start.style.display = "none";
    document.getElementsByClassName("questions-wrapper")[0].style.display = "flex";
    showNextQuestion();
}
nextQuestionButton.addEventListener("click", showNextQuestion)

function showNextQuestion() {
    if (endOfQuiz)
        return;
    if (indexCurrentlyQuestion < numberOfQuestions) {
        setQuestion(randomQuestions[indexCurrentlyQuestion]);
        setAnswers(randomQuestions[indexCurrentlyQuestion]);
        nextQuestionButton.style.zIndex = -1;
        ChangeBackground("rgb(59, 175, 218");
        RestartButtonColor();
    }
    else {
        ResultPreview();
        endOfQuiz = true;
    }

}

function setQuestion(question) {
    questionParagraph.innerHTML = question.question;
}

function setAnswers(question) {
    for (var i = 0; i < question.answers.length; i++) {
        answerElements[i].innerHTML = question.answers[i].text;
    }
}

function ChangeBackground(boja) {
    document.body.style.transition = "all 0.5s"
    document.body.style.backgroundColor = boja;

}

function RestartButtonColor() {
    for (var i = 0; i < answerElements.length; i++) {
        answerElements[i].style.backgroundColor = "rgb(80, 193, 233)";
        answerElements[i].style.border = "5px solid rgb(59, 175, 218)";
    }
}

function PaintAnswerButton(correctAnswer) {
    if (correctAnswer != null) {
        correctAnswer.style.backgroundColor = "green";
        correctAnswer.style.border = "5px solid rgb(26, 148, 49)";
        for (var i = 0; i < 4; i++) {
            if (correctAnswer.innerHTML != answerElements[i].innerHTML) {
                answerElements[i].style.backgroundColor = "red";
                answerElements[i].style.border = "5px solid rgb(255, 50, 50)";
            }
        }
    }
    else {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {

                if (answerElements[i].innerHTML == randomQuestions[indexCurrentlyQuestion].answers[j].text) {
                    if (randomQuestions[indexCurrentlyQuestion].answers[j].correct == true) {
                        answerElements[i].style.backgroundColor = "green";
                        answerElements[i].style.border = "5px solid rgb(26, 148, 49)";
                        break;
                    }
                    else {
                        answerElements[i].style.backgroundColor = "red";
                        answerElements[i].style.border = "5px solid rgb(255, 50, 50)";
                        break;
                    }

                }
            }
        }
    }
}
function RestartQuiz() {
    RestartQuizData();
    RestartQuizView();
}
function ResultPreview() {
    SetOpacity(document.getElementsByClassName("questions-wrapper")[0],0.5);
    SetOpacity(nextQuestionButton,0.5);
    SetOpacity(document.getElementsByClassName("header")[0],0.5);
    SetOpacity(resultElement,1);
    // document.getElementsByClassName("questions-wrapper")[0].style.opacity = 0.5;
    // nextQuestionButton.style.opacity = 0.5;
    // document.getElementsByClassName("header")[0].style.opacity = 0.5;
    // resultElement.style.opacity = 1;
    document.getElementsByClassName("number")[0].innerHTML = numberOfCorrectAnswers + " / " + numberOfQuestions;
    var messageP = document.getElementsByClassName("message")[0];
    if (numberOfCorrectAnswers <= 2)
        messageP.innerHTML = "Go home..";
    else if (numberOfCorrectAnswers <= 5)
        messageP.innerHTML = "Keep trying.."
    else if (numberOfCorrectAnswers <= 7)
        messageP.innerHTML = "Very good.";
    else if (numberOfCorrectAnswers <= 9)
        messageP.innerHTML = "Nearly better than administrator :/";
    else if (numberOfCorrectAnswers == 10)
        messageP.innerHTML = "You're the boss."
    resultElement.style.display = "block";
}

function IsCorrectAnswer(possibeCorrectAnswer) {
    if (numberOfQuestions == indexCurrentlyQuestion) {
        ResultPreview();
        return;
    }
    if (numberOfQuestions - 1 == indexCurrentlyQuestion)
        nextQuestionButton.innerHTML = "Finish";
    if (answerElements[0].style.backgroundColor == "rgb(80, 193, 233)") {
        for (var i = 0; i < randomQuestions[indexCurrentlyQuestion].answers.length; i++) {
            var answer = randomQuestions[indexCurrentlyQuestion].answers[i];
            if (possibeCorrectAnswer.innerHTML === answer.text) {
                if (answer.correct == true) {
                    ChangeBackground("green");
                    PaintAnswerButton(possibeCorrectAnswer);
                    numberOfCorrectAnswers++;
                }
                else {
                    PaintAnswerButton(null);
                    ChangeBackground("red");
                }
            }
        }
        nextQuestionButton.style.zIndex = 1;
        indexCurrentlyQuestion++;
    }
}

function RestartQuizData() {
    numberOfQuestions = 10;
    numberOfCorrectAnswers = 0;
    indexCurrentlyQuestion = 0;
    endOfQuiz = false;
    randomQuestions = questions.sort(() => Math.random() - .5);
}

function RestartQuizView(){
    SetOpacity(document.getElementsByClassName("questions-wrapper")[0],1);
    SetOpacity(nextQuestionButton,1);
    SetOpacity(document.getElementsByClassName("header")[0],1);
    document.getElementsByClassName("questions-wrapper")[0].style.display = "none";
    start.style.display = "block";
    document.getElementsByClassName("questions-wrapper")[0].style.opacity = 1;
    nextQuestionButton.style.opacity = 1;
    document.getElementsByClassName("header")[0].style.opacity = 1;
    document.getElementById("result").style.display = "none";
    nextQuestionButton.innerHTML = "Next";
}

function SetOpacity(element, opacity){
    element.style.opacity=opacity;
}