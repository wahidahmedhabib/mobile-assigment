/// Timer

// function coundown() {
//     let date = new Date()
//     let hrs = date.getHours();
//     let minu = date.getMinutes();
//     let secn = date.getSeconds();

//     var hours = document.getElementById("hours").innerText = hrs
//     var minutes = document.getElementById("min").innerText = minu
//     var secound = document.getElementById("sec").innerText = secn
// }
// setInterval(coundown, 1000)

/// CountDown
var i = 15;
var intervalId;

function timer() {
  document.getElementById("container2").innerHTML = i--;
  
  if (i === 0) {
    clearInterval(intervalId);
  }
}

if (i >= 0) {
  intervalId = setInterval(timer, 1000);
}

