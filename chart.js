
const AnswersPlanung = {
    labels: [
      [['Daten \u00fcber die Art und Weise,'],[' wie Kunden Ihre Produkte nutzen']],
      [['Qualit\u00e4tsbezogenen Daten aus'],['verschiedenen Phasen '],['des Produktlebenszyklus']],
      [['Machine Learning '],['Verfahren']],
      [['Technologien des Digital'],[' & Virtual Engineering']],
      [['Schnittstelle zw.'],[' CAD/ERP/MES/CAQ etc.']],
      [['Einbeziehen der Mitarbeiter aus dem'],[' QM f\u00fcr das Umsetzen von Smart Eng.']],
      [['Involvierung QM-Mitarbeiter/Nutzung'],[' QM-Daten im Varianten-'],[' und Konfigurationsmanagement']],
      [['Involvierung QM-Mitarbeiter/Nutzung'],[' QM-Daten im Anforderungs- und'],[' Requirementmanagement']]
    ],
    datasets: [{
      label: 'Company Name',
      data: [4, -1, 2, 2, 3, 4, 1,0],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Max Wert',
      data: [4, 2, 2, 3, 2, 4, 2, 1],
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
      data: [1, 2, 3, 2, 3, 1, 2, 3],
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

 /*  const AnswersRahmenbedingungen = {
    labels: [
      [['Unterst\u00fctzung der Einhaltung'],[' von Kunden- oder'],[' Normanforderungen']],
      [['Digitale Unterst\u00fctzung'],[' des Anforderungsmanagements']],
      [['Automatisierte Durchf\u00fchrung '],['der Prozesse']],
      [['Gibt es in dieser Phase ein systematisches'],['Wissensmanagement? Wird dieses'],[' digital unterst\u00fctzt?']],
      [['Notwendige IT-Infrastruktur /'],[' IT-Hardware und Software '],['vorhanden']],
      [['Notwendige personelle Ressourcen'],[' und Kompetenzen vorhanden']],
      [['Daten in ausreichender Qualit\u00e4t'],[' und Single Point of Truth']]
    ],
    datasets: [{
      label: 'Company Name',
      data: [4, -1, 2, 2, 3, 4, 1],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Max Wert',
      data: [4, 2, 2, 3, 2, 4, 2],
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
      data: [1, 2, 3, 2, 3, 1, 2],
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
 */
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

/*   const configRahmenbedingungen = {
    type: 'radar',
    data: AnswersRahmenbedingungen,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  }; */
 
/*   function generatePDF(){
    var doc = new jsPDF();

    doc.text(20,20, "your results");
    
    doc.save('results.pdf'); 

} 
*/

/* function generatePDF() {
  
  var specialElementHandlers = {
      '#editor': function (element, renderer) {
          return true;
      }
  };
  var doc = new jsPDF();
  doc.fromHTML($("#body").html(), 15, 15, {
          'width':170,
          'elementHandlers': specialElementHandlers
  });
  doc.save('role.pdf');
}
 */

 
/* function generatePDF() {
  var doc = new jsPDF();  //create jsPDF object
   doc.fromHTML(document.getElementById("body"), // page element which you want to print as PDF
   10,
   10, 
   {
     'width': 150  //set width
   },
   function(a) 
    {
     doc.save("HTML2PDF.pdf"); // save file name as HTML2PDF.pdf
   });
 } */

/*  $('#pdfButton').click(function(event) {
  // get size of report page
  var reportPageHeight = $('#body').innerHeight();
  var reportPageWidth = $('#body').innerWidth();
  
  // create a new canvas object that we will populate with all other canvas objects
  var pdfCanvas = $('<canvas />').attr({
    id: "canvaspdf",
    width: reportPageWidth,
    height: reportPageHeight
  });
  
  // keep track canvas position
  var pdfctx = $(pdfCanvas)[0].getContext('2d');
  var pdfctxX = 0;
  var pdfctxY = 0;
  var buffer = 100;
  
  // for each chart.js chart
  $("canvas").each(function(index) {
    // get the chart height/width
    var canvasHeight = $(this).innerHeight();
    var canvasWidth = $(this).innerWidth();
    
    // draw the chart into the new canvas
    pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
    pdfctxX += canvasWidth + buffer;
    
    // our report page is in a grid pattern so replicate that in the new canvas
    if (index % 2 === 1) {
      pdfctxX = 0;
      pdfctxY += canvasHeight + buffer;
    }
  });
  
  // create new pdf and add our new canvas as an image
  var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
  pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);
  
  // download the pdf
  pdf.save('filename.pdf');
}); */


const chartPlanung = document.getElementById("answerChartPlanung");
/* const chartRahmenbedingungen = document.getElementById("answerChartRahmenbedingungen"); */

var myChartPlanung = new Chart(chartPlanung,configPlanung);
/* var myChartRahmenbedingungen = new Chart(chartRahmenbedingungen,configRahmenbedingungen); */

const PDFButton = document.getElementById('pdfButton');
const body = document.getElementById('body');

PDFButton.addEventListener('click', generatePDF);
