const button = document.getElementById("button")
const setting = document.getElementById("setting")
button.addEventListener("click", () => {
    if (setting.style.height == "100vh") {
        setting.style.height = "0"
        setting.style.visibility = 0
    } else {
        setting.style.height = "100vh"
        setting.style.visibility = 100
    }
})