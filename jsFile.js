function buildQuiz() {
    // variable to store the HTML output
    const output = [];
    quizContainerAll.style = "display: block";
    loginContainer.style = "display: none";
    graph.style = "display: none";
  
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

function getResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const outputAnswers = [];
  
  // for each question
const userAnswers = {};
  myQuestions.map(
    (currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      userAnswers[`Q${questionNumber+1}`] = parseInt(userAnswer) ;
  });
return userAnswers;
};

function buildGraph(userAnswers, userName){
    const answerArray = Object.values(userAnswers); 
    debugger;
    const AnswersPlanung = {
    labels: [
      'Planung und Konzeption',
      'Produkt- und Prozessentwicklung',
      'Beschaffung',
      'Produktion',
      'Nutzung & Instandhaltung'
       ],
    datasets: [{
      label: userName,
      // data: [4, -1, 2, 2, 3, 4],
      data: answerArray,
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Max Wert',
      data: [4, 3, 3, 5, 3],
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    },
    {
      label: 'MittelWert',
      data: [3, 3, 2, 5, 2],
      fill: false,
      backgroundColor: 'rgba(41, 241, 195, 1)',
      borderColor: 'rgb(41, 241, 195)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }
  ]
  };  
  
  const configPlanung = {
    type: 'radar',
    data: AnswersPlanung,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

const chartPlanung = document.getElementById("answerChartPlanung");
const body = document.getElementById('body');
var myChartPlanung = new Chart(chartPlanung,configPlanung);
};


async function showResults() {
  // gather answer containers from our quiz
  /* quizAnswers.style = "display: block"; */
  quizContainerAll.style = "display: none";
  loginContainer.style = "display: none";
  graph.style = "display: block";
  
  
/*    const answersJson = await (await fetch('http://localhost:3000/send-info')).json();
  const obj = JSON.parse(answersJson);
  console.log(obj);  */
  /* const averageAnswers = Object.keys(answersJson[0]).map(questionKey => answersJson[0][questionKey]); 
 */
  
  var userAnswers = getResults();
  const nameLogin = document.getElementById('yourname').value;
  buildGraph(userAnswers, nameLogin);
  userAnswers['User'] = nameLogin;
  


  await fetch('http://localhost:3000/save-answers', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userAnswers)
  });
    


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
  '5'
]

const myQuestions = [
  {
    question: "Gibt es eine Schnittstelle zw. CAD/ERP/MES/CAQ etc., um QM-Daten in dieser Phase nutzen zu k\u00f6nnen?",
      answers,
  },
  {
    question: "Werden Informationen aus der Nutzungsphase des Produktes erfasst, um die qualit\u00e4tsrelevanten Potentiale daraus f\u00fcr die Prozessoptimierung nutzen zu k\u00f6nnen?",
      answers,
  },
  {
    question: "Werden qualit\u00e4tsbezogene Daten innerhalb der Lieferkette per Schnittstelle zum Lieferanten ausgetauscht (automatisch), um z.B. eine automat. Wareneingangspr\u00fcfung mittels Smart Contracts durchf\u00fchren zu k\u00f6nnen?",
      answers,
  },
  {
    question: "Ist in der Produktion ein Manufacturing Execution System (MES) integriert, auf welches das Qualit\u00e4tsmanagement Zugriff hat?",
      answers,
  },
  {
    question: "Werten Sie Produktdaten Ihrer Produkte in der Nutzungsphase beim Kunden aus, um so optimale Wartungszeitpunkte zu definieren und somit eine optimale Produktqualit\u00e4t zu gew\u00e4hrleisten?",
      answers,
  }
];


 $('#pdfButton').click(function(event) {
  // get size of report page
  var reportPageHeight = $('#graph-answers').innerHeight();
  var reportPageWidth = $('#graph-answers').innerWidth();
  
  // create a new canvas object that we will populate with all other canvas objects
  var pdfCanvas = $('<canvas />').attr({
    id: "canvaspdf",
    width: reportPageWidth+500,
    height: reportPageHeight+500
  });
  
  // keep track canvas position
  var pdfctx = $(pdfCanvas)[0].getContext('2d');
  var pdfctxX = 300;
  var pdfctxY = 200;
  // var buffer = 100;
  
  // for each chart.js chart
  $("canvas").each(function(index) {
    
     var canvasHeight = $(this).innerHeight();
     var canvasWidth = $(this).innerWidth();

    // var canvasHeight = 500;
    // var canvasWidth = 500;
    
    // draw the chart into the new canvas
    pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
    pdfctxX = canvasWidth;
    pdfctxY = canvasHeight;
    
    // our report page is in a grid pattern so replicate that in the new canvas
     if (index % 2 === 1) {
      pdfctxX = 0;
      pdfctxY = canvasHeight;
    }  
  });
  
  // create new pdf and add our new canvas as an image
  var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
  pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);
  
  // download the pdf
  pdf.save('Auswertung.pdf');
}); 




// elementos da DOM
const quizContainer = document.getElementById('quiz');
/* const showAnswers = document.getElementById('answers'); */
/* const quizAnswers = document.getElementById('quiz-answers'); */
const quizContainerAll = document.getElementsByClassName('quiz-container')[0];
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('restart');
const resetButtonFinal = document.getElementById('restartFinal');
const startButton = document.getElementById('start');
const loginContainer = document.getElementsByClassName('login')[0];
const graph = document.getElementById('graph-answers');


// const PDFButton = document.getElementById('pdfButton');
// display quiz 
//buildQuiz();



// on submit, show results (event listeners)
submitButton.addEventListener('click', showResults);
resetButton.addEventListener('click',restartQuizz);
resetButtonFinal.addEventListener('click',restartQuizz);
startButton.addEventListener('click',buildQuiz);

// PDFButton.addEventListener('click', generatePDF);

