var s = 0
var ns = 0

async function getData(){
const data = await fetch("http://localhost:3000/select")
    json = await data.json()
    for(var i =0;i<=json.length-1;i++){
        if(json[i].czy_wykonane==0){
            ns++
        }
        else if(json[i].czy_wykonane==1){
            s++
        }
        console.log(ns)
        console.log(s)
    }
    zrob()
}


function zrob(){

var xValues = ["Wykonane","Nie Wykonane"];
var yValues = [s,ns];
var barColors = ["#3D2645","#832161"];

new Chart("myChart",{
    type: "pie",
    data: {
        labels: xValues,
datasets: [{
backgroundColor: barColors,
data: yValues
}]
},
options: {
title: {
display: true,
text: "Liczba Ukończonych Zadań"
}
}
});




}


