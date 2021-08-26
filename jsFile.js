//import FileSaver from 'file-saver';
function buildQuiz() {
    // variable to store the HTML output
    const output = [];
    quizContainerAll.style = "display: block";
    loginContainer.style = "display: none";
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}
   
async function showResults() {
  // gather answer containers from our quiz
  quizAnswers.style = "display: block";
  quizContainerAll.style = "display: none";
  loginContainer.style = "display: none";
  
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const outputAnswers = [];
  // keep track of user's answers
  let numCorrect = 0;
  // for each question
const userAnswers = {};
  myQuestions.map(
    (currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      userAnswers[`Question ${questionNumber+1}`] = parseInt(userAnswer) ;
  });
  const answersJson = await (await fetch('http://localhost:3000/average-answers')).json();
  const averageAnswers = Object.keys(answersJson[0]).map(questionKey => answersJson[0][questionKey]);

  Object.keys(userAnswers).forEach((key, answerIndex) => {
    const answersToDisplay = [];
    const averageDiff = Math.round(averageAnswers[answerIndex] - userAnswers[key]);
    if (averageDiff < 0) {
       //console.log('Para bens voce esta acima! gutten tag', averageDiff * -1);
       answersToDisplay.push(
        `<label>
          "You are above the average with ${averageDiff} points"  
        </label>`
      );
     } else {
       //console.log('Infelizmente abaixo');
       answersToDisplay.push(
        `<label>
          "You are below the average with ${averageDiff} points"  
        </label>`
      );
     }
     outputAnswers.push(
      `<div class="question"> ${key} </div>
      <div class="answers"> ${answersToDisplay.join('')} </div>`
    );
  
    });


  userAnswers['User'] = nameLogin;
  
  await fetch('http://localhost:3000/save-answers', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userAnswers)
  });
    
    quizAnswers.innerHTML = outputAnswers.join('');
  }




function restartQuizz() {
  window.location.reload();
}

const answers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10'
]

const myQuestions = [
  {
    question: "Question 1",
      answers,
  },
  {
    question: "Question 2",
      answers,
  },
  {
    question: "Question 3",
      answers,
  },
  {
    question: "Question 4",
      answers,
  },
  {
    question: "Question 5",
      answers,
  },
  {
    question: "Question 6",
      answers,
  },
  {
    question: "Question 7",
      answers,
  },
  {
    question: "Question 8",
      answers,
  },
  {
    question: "Question 9",
      answers,
  },
  {
    question: "Question 10",
      answers,
  }
];

// elementos da DOM
const quizContainer = document.getElementById('quiz');
const quizAnswers = document.getElementsByClassName('quiz-answers')[0];
const quizContainerAll = document.getElementsByClassName('quiz-container')[0];
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('restart');
const startButton = document.getElementById('start');
const loginContainer = document.getElementsByClassName('login')[0];
const nameLogin = document.getElementById('yourname').value;

// display quiz 
//buildQuiz();

// on submit, show results (event listeners)
submitButton.addEventListener('click', showResults);
resetButton.addEventListener('click',restartQuizz);
startButton.addEventListener('click',buildQuiz);
