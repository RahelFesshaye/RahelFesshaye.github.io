// function me() {
//     return "raki";
// }
// console.log(me());


// function ok(){

//     var xx = document.getElementById("haben");
// xx.onclick = delayMsg;

// var yy = document.getElementById("defuse");
// yy.onclick=defuse;
// }
var id = 0;


// window.onload = ok;

//  var x;
function delayMsg() {
  id = setTimeout(booyah,3000);
    document.getElementById("output").innerHTML = "wait for it...";
}
function booyah(){
    document.getElementById("results").innerHTML = "boom";
}

function defuse() {
    clearTimeout(id);
    document.getElementById("results").innerHTML = "defuse u r safe";
}