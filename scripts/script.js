let d = new Date(document.lastModified);
let day = d.getUTCDate();
let month = d.getMonth();
month = month+1;
let fullyear = d.getFullYear()
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = hour + ":" + minutes + ":" + seconds;
let fulldate =  month + "/" + day + "/" + fullyear + " " + time; 
document.getElementById("lastupdated").textContent = fulldate;

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");	
}