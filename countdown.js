const eventDate = Date.parse("03 Jan 2020");

if (Date.now() <= eventDate) {
    document.getElementById("number-days").innerText = Math.ceil((eventDate - Date.now()) / (1000 * 60 * 60 * 24));
} else {
    countdown = document.getElementById("countdown")
    countdown.parentNode.removeChild(countdown)
    document.querySelectorAll(".ticket-button").forEach(button => {
        parent = button.parentNode
        parent.removeChild(button)
        if (parent.innerText === "") {
            parent.parentNode.removeChild(parent)
        }
    })

}