let collapses = document.querySelectorAll(".collapse")

collapses.forEach(collapsible => {
    console.log(collapsible)
        // this is going to assume there are only 2 children: a header and a body
    let head = collapsible.children[0]
    let body = collapsible.children[1]

    body.classList.add("hidden")

    head.onclick = () => {
        body.classList.toggle("hidden")
        if (head.innerText.includes("+")) {
            head.innerText = head.innerText.replace("+", "-")
        } else {
            head.innerText = head.innerText.replace("-", "+")
        }
    }
})