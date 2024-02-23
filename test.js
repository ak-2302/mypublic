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