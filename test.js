const type = document.getElementById("type")
const server = document.getElementById("server")
const channel = document.getElementById("channel")
const server_setting = document.getElementById("server_setting")
const private_setting = document.getElementById("private_setting")
type.onchange = function () {
    console.log(this.value);
    if (this.value == "private") {
        server_setting.style.display = "none";
        private_setting.style.display = "block";
    } else {
        server_setting.style.display = "block";
        private_setting.style.display = "none";
    }
}
const message_send = document.getElementById("message_send")
message_send.addEventListener("click", () => {
    console.log("clicked")
    const input_area = document.getElementById("input_area")
    input_area.value = ""
    add_newMessage()
})

const header_open_button = document.getElementById("header_open_button")
const header_close_button = document.getElementById("header_close_button")
const header_open = document.getElementById("header_open")
const header_close = document.getElementById("header_close")
header_open_button.addEventListener("click", () => {
    header_open.style.display = "none"
    header_close.style.display = "block"
})
header_close_button.addEventListener("click", () => {
    header_open.style.display = "block"
    header_close.style.display = "none"
})

const file = document.getElementById("file")
const file_up = document.getElementById("file_up")
file_up.addEventListener("click", () => {
    file.click()
})

function add_newMessage() {
    var newContent = document.createElement("pre")
    newContent.className = "content"
    newContent.innerHTML = "content"

    var newMessage_text = document.createElement("pre")
    newMessage_text.className = "message_text"
    newMessage_text.appendChild(newContent)

    var newText = document.createElement("div")
    newText.className = "text"

    var newName = document.createElement("p")
    newName.className = "name"
    newName.innerText = "User"

    var newTime = document.createElement("p")
    newTime.className = "time"
    newTime.innerText = "today"

    newText.appendChild(newName)
    newText.appendChild(newTime)
    newText.appendChild(newContent)

    var newMessage = document.createElement("div")
    newMessage.className = "message"

    var newIcon = document.createElement("img")
    newIcon.src = "https://cdn.discordapp.com/attachments/1209128947896287273/1209129995490828350/HsSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKaxX9TPXFcYWdeKQAAAABJRU5ErkJggg.png?ex=65e5cd0f&is=65d3580f&hm=dee853664883004c0d7355b6b5d0ae50ec1dc40f466141f363e44a23884b752a&"
    newIcon.className = "icon"

    newMessage.appendChild(newIcon)
    newMessage.appendChild(newText)

    var parent = document.getElementById("message_area")
    parent.insertBefore(newMessage, null)
}