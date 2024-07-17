const header_button = document.getElementById("header_button")
const header = document.getElementById("header")
header_button.addEventListener("click", () => {
    console.log(header.style.display)
    if (header.style.display == "block") {
        header.style.display = "none"
    } else {
        header.style.display = "block"
    }

})