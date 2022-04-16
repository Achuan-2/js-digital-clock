// javascript for switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");
formatSwitchBtn.addEventListener("click", () => {
	formatSwitchBtn.classList.toggle("active");
	var formatValue = formatSwitchBtn.getAttribute("data-format");
	if (formatValue == "12") {
		formatSwitchBtn.setAttribute("data-format", "24");
	} else {
		formatSwitchBtn.setAttribute("data-format", "12");
	}
});
//get current time in javascipt
function clock() {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var period = "&nbsp;&nbsp;";
	// set the 12-hour clock format
	var formatValue = formatSwitchBtn.getAttribute("data-format");
	if (formatValue == "12") {
		if (hours > 12) {
			hours = hours - 12;
			period = "PM";
		} else {
			period = "AM";
		}
	}
	// add the 0 the values lower than 0
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	document.querySelector(".hours").innerHTML = hours;
	document.querySelector(".minutes").innerHTML = minutes;
	document.querySelector(".seconds").innerHTML = seconds;
	document.querySelector(".period").innerHTML = period;

	// get the date in javascript
	var today = new Date();
	var dayNumber = today.getDate();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var monthName = today.toLocaleString("en", { month: "short" });
	var dayName = today.toLocaleString("en", { weekday: "long" });
	document.querySelector(".month-name").innerHTML = monthName;
	document.querySelector(".day-name").innerHTML = dayName;
	document.querySelector(".day-number").innerHTML = dayNumber;
	document.querySelector(".year").innerHTML = year;
}
var update_clock = setInterval(clock, 1000);

// javacript for dot menu toggle
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");
dotMenuBtn.addEventListener("click", () => {
	dotMenu.classList.toggle("active");
});
// click other place to close the dot menu
document.addEventListener("click", (e) => {
	if (e.target.id != "active-menu") {
		dotMenu.classList.remove("active");
	}
});
