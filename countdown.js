const eventDate = Date.parse("03 Jan 2020");

console.log(document)

if (Date.now() <= eventDate) {
    document.getElementById("number-days").innerText = Math.ceil((eventDate - Date.now()) / (1000 * 60 * 60 * 24));
} else {
    countdown = document.getElementById("countdown")
    countdown.parentNode.removeChild(countdown)
    ticketButtons = document.getElementsByClassName("ticket-button")
    console.log(ticketButtons)
    for (let i = 0; i < ticketButtons.length; i++) {
        console.log(ticketButtons[i].parentNode)
        parent = ticketButtons[i].parentNode
        parent.removeChild(ticketButtons[i])
            // console.log(parent.innerText).replace(" ", "8")
        if (parent.innerText === "") {
            parent.parentNode.removeChild(parent)
        }
    }
}