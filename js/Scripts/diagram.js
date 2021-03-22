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
//Backend should be cold colors, front end should be warm colors, physical projects should be green variants

var ctx = document.getElementById('pichart').getContext('2d');
new Chart(document.getElementById("pichart"),
  {
    "type": "doughnut", "data": {
      "labels": ["C","C#","HTML", "CSS", "JavaScript","Electronics"],
      "datasets": [{
        "label": "My First Dataset", "data": [expC,expCsharp,expHTML,expCSS,expJS,expElectronics],
        "backgroundColor": [colorC,colorCsharp,colorHTML,colorCSS,colorJS,colorElectronics]
      }]
    }
  });