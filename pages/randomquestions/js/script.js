const data = {
    head:{
        title : "Random Multiple Choice Test Questions"
    },
    div:{
        headerTitle : "Random Multiple Choice Test Questions",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    },
    questions : [
        {
            question: "What does HTML stand for?",
            answers: ["Hyper Text Markup Language", "High Train Make Language","Hyper Test Marker Language","Hint Try Mark Late"],
            correct: "Hyper Text Markup Language",
        },
        {
            question: "What does CSS stand for?",
            answers: ["Cascading Style Sheets", "Colorful Style Sheets","Creative Style Sheets","Computer Style Sheets"],
            correct: "Cascading Style Sheets",
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: ["<script>", "<javascript>","<js>","<scripting>"],
            correct: "<script>",
        },
        {
            question: "Who is making the Web standards?",
            answers: ["The World Wide Web Consortium", "Google","Microsoft","Apple"],
            correct: "The World Wide Web Consortium",
        },
        {
            question: "Choose the correct HTML element for the largest heading",
            answers: ["<h1>", "<h2>","<h3>","<h4>"],
            correct: "<h1>",
        }
    ],
    questionNumber : 0,
    questionContent : document.getElementById('questionContent'),
    questionEl : document.getElementById('question'),
    abcdInputContainer : document.querySelectorAll('.answer'),
    aInput : document.getElementById('aInput'),
    bInput : document.getElementById('bInput'),
    cInput : document.getElementById('cInput'),
    dInput : document.getElementById('dInput'),
    aLabel : document.getElementById('aLabel'),
    bLabel : document.getElementById('bLabel'),
    cLabel : document.getElementById('cLabel'),
    dLabel : document.getElementById('dLabel'),
    submitButton : document.getElementById('submit')

}

document.title = data.head.title;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});

// Shuffle Array by Decreasing Array Length
function shuffle(array) { 
    let indexLength = array.length, temporaryArrayHolder, generateRandomIndex;
        // LOOP BASE ON ARRAY LENGTH
        while ( indexLength !== 0) {
            
            // GENERATE RANDOM NUMBER BETWEEN 0 AND CURRENT ARRAY LENGTH VALUE
            generateRandomIndex = Math.floor(Math.random() * indexLength);
            // DECREASE ARRAY LENGTH
            indexLength -= 1;
    
            // ASSIGN INDEX VALUE
            temporaryArrayHolder = array[indexLength];
    
            // REPLACE INDEX VALUE BY RANDOM INDEX VALUE
            array[indexLength] = array[generateRandomIndex];
    
            // REPLACE RANDOM INDEX VALUE BY ORIGINAL INDEX VALUE
            array[generateRandomIndex] = temporaryArrayHolder;
    
        
        }
        return array;
}
// Shuffle Answer
function shuffleAnswer(){
    data.questions.forEach(questionsIndex => {
        shuffle(questionsIndex.answers); 
        }
    );
}

function loadQuestion() {
    deselectAnswer()

    const currentQuizData = data.questions[data.questionNumber]

    data.questionEl.innerText = currentQuizData.question
    data.aInput.value = currentQuizData.answers[0]
    data.bInput.value = currentQuizData.answers[1]
    data.cInput.value = currentQuizData.answers[2]
    data.dInput.value = currentQuizData.answers[3]
    data.aLabel.innerText = currentQuizData.answers[0]
    data.bLabel.innerText = currentQuizData.answers[1]
    data.cLabel.innerText = currentQuizData.answers[2]
    data.dLabel.innerText = currentQuizData.answers[3]
    
}

function deselectAnswer() {
    data.abcdInputContainer.forEach(answerIndex => answerIndex.checked = false)
}

function getSelectedAnswer() {
    let selectedAnswer

    data.abcdInputContainer.forEach(answerIndex => {
        if(answerIndex.checked) {
            selectedAnswer = answerIndex.value
        }
    })

    return selectedAnswer
}

data.submitButton.addEventListener('click', async () => {
    const answer = await getSelectedAnswer()
   
    if(answer) {
        
        data.questions[data.questionNumber].selectedAnswer = answer
        data.questionNumber++

        if(data.questionNumber < data.questions.length) {
            loadQuestion()
        } else {
            questionContent.innerHTML = `
                <h2>You answered ${ data.questions.filter(n => n.correct === n.selectedAnswer).length }  / ${ data.questions.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `

        }
    }
})


async function questionInit(){
    await shuffle(data.questions);
    await shuffleAnswer();
    await loadQuestion();
}

questionInit()





