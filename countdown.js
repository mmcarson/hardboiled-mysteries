const eventDate = Date.parse("03 Jan 2020");

document.getElementById("number-days").innerText = Math.ceil((eventDate - Date.now()) / (1000 * 60 * 60 * 24));