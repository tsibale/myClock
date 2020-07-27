// JavaScript Document

setInterval(() => {
	const timeText = new Date().toLocaleString("ja-JP");
	document.querySelector("#currentTime").textContent = timeText;
}, 1000)

setInterval(() => {
	const timeText2 = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
	document.querySelector("#currentTimeUS").textContent = timeText2;
}, 1000)

setInterval(() => {
	const timeText3 = new Date().toLocaleString("en-GB");
	document.querySelector("#currentTimeGB").textContent = timeText3;
}, 1000)
