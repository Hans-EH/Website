let expC = 2;
let colorC = "rgb(0,0,255)";
let expHTML = 1;
let colorHTML = "rgb(255, 153, 0)";
let expCSS = 1; 
let colorCSS = "rgb(0, 153, 255)";
let expJS = 1;
let colorJS = "rgb(255, 255, 0)";
let expCsharp = 1;
let colorCsharp = "rgb(0, 153, 51)";
let expElectronics = 2;
let colorElectronics = "rgb(0, 255, 0)"
let expJava = 1;
let colorJava = "rgb(255, 51, 0)";

var ctx = document.getElementById('pichart').getContext('2d');
new Chart(document.getElementById("pichart"),
  {
    "type": "doughnut", "data": {
      "labels": ["C","C#","HTML", "CSS", "JavaScript","Electronics","Java"],
      "datasets": [{
        //"borderWidth": [20],
        "label": "Project Categories", 
        "data": [expC,expCsharp,expHTML,expCSS,expJS,expElectronics,expJava],
        "backgroundColor": [colorC,colorCsharp,colorHTML,colorCSS,colorJS,colorElectronics,colorJava]
        //"hidden": true;
      }]
    }
  });

  $("#toggle").click(function() {
    chartInstance.data.datasets.forEach(function(ds) {
     ds.hidden = !ds.hidden;
   });
   chartInstance.update();
 });