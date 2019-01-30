const countDownDate = new Date("June 28, 2019 18:00:00");

refresher();

function refresher(){
	
	let now = new Date().getTime();										// milliseconds
	let distance = (countDownDate - now)/1000;							// convert total time left into seconds

	let days = Math.floor(distance / (60 * 60 * 24));					// 12323123 / seconds * minutes * hours = days
	let hours = Math.floor(distance % (60 * 60 * 24) / (60 * 60));		
	let minutes = Math.floor(distance % (60 * 60) / 60);
	let seconds = Math.floor(distance % 60);
	
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = ":" + ("0" + hours).slice(-2);
	document.getElementById("minutes").innerHTML = ":" + ("0" + minutes).slice(-2);
	document.getElementById("seconds").innerHTML = ":" + ("0" + seconds).slice(-2);
	
}

setInterval(refresher, 1000);
