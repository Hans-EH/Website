let expFrontEnd = 1;
let colorFrontEnd = "rgb(255, 255, 0)";
let expBackEnd = 0;
let colorBackEnd = "rgb(255, 153, 0)";
let expElectronics = 2;
let colorElectronics = "rgb(0, 255, 0)"
let expJava = 1;
let colorJava = "rgb(255, 51, 0)";
let expGameDev = 1;
let colorGameDev = "rgb(70, 70, 120)";
let expC = 2;
let colorC = "rgb(0,0,255)";
let expGroup = 1;
let colorGroup = "rgb(255,0,0)";

var ctx = document.getElementById('pichart').getContext('2d');
new Chart(document.getElementById("pichart"),
  {
    "type": "doughnut", "data": {
      "labels": ["Front End","Back End","Electronics", "Game Dev.","C","Large Groups (>4)"],
      "datasets": [{
        //"borderWidth": [20],
        "label": "Project Categories", 
        "data": [expFrontEnd,expBackEnd,expElectronics,expGameDev,expC,expGroup],
        "backgroundColor": [colorFrontEnd,colorBackEnd,colorElectronics,colorGameDev,colorC,colorGroup]
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