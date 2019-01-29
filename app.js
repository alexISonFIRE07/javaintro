const countDownDate = new Date("June 28, 2019 18:00:00");


  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));




  document.getElementById("days").innerHTML=days;
  document.getElementById("hours").innerHTML= ":" + hours;
  document.getElementById("minutes").innerHTML= ":" + minutes;

function refresher(){
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));




  document.getElementById("days").innerHTML=days;
  document.getElementById("hours").innerHTML= ":" + hours;
  document.getElementById("minutes").innerHTML= ":" + minutes;
}
setInterval(refresher, 1000);
