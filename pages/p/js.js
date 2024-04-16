window.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        val_score += val_per_second / 10
        val_score = Math.round(val_score * 10) / 10
        auto()
        display()
    }, 100);
})

function display_scoreboard() {
    score.innerText = val_score
}
function display() {
    display_scoreboard()
    update_up1()
    update_up2()
    update_up3()
}
function auto() {
    let click = new Event('click')
    up1.dispatchEvent(click)
    up2.dispatchEvent(click)
    up3.dispatchEvent(click)
}


let val_score = 0
let val_per_click = 1
let val_per_second = 1
const click_button = document.getElementById("click_button")
const score = document.getElementById("score")
click_button.addEventListener("click", () => {
    val_score++
    display()
})

function calc_val_per_second() {
    val_per_second = 0
    val_per_second += val_up1_power
}


let val_up1_level = 0
let val_up1_cost = 1
let val_up1_power = 0
const up1 = document.getElementById("up1")
const up1_level = document.getElementById("up1_level")
const up1_cost = document.getElementById("up1_cost")
const up1_power = document.getElementById("up1_power")
const up1_progress = document.getElementById("up1_progress")
up1.addEventListener("click", () => {
    if (val_score >= val_up1_cost) {
        val_score -= val_up1_cost
        val_up1_level++
        val_up1_cost += val_up1_level * 0.5
        val_up1_power++
        update_up1()
        calc_val_per_second()
        display_scoreboard()
    }
})
function update_up1() {
    up1_level.innerText = val_up1_level
    up1_cost.innerText = val_up1_cost
    up1_power.innerText = val_up1_power
    up1_progress.style.width = String(Math.min(100, Math.round(val_score * 100 / val_up1_cost))) + "%"
}


let val_up2_level = 0
let val_up2_cost = 1
let val_up2_power = 0
const up2 = document.getElementById("up2")
const up2_level = document.getElementById("up2_level")
const up2_cost = document.getElementById("up2_cost")
const up2_power = document.getElementById("up2_power")
const up2_progress = document.getElementById("up2_progress")
up2.addEventListener("click", () => {
    if (val_score >= val_up2_cost) {
        val_score -= val_up2_cost
        val_up2_level++
        val_up2_cost += val_up2_level + val_up2_cost * 0.5
        val_up2_power += val_up2_level
        update_up2()
        calc_val_per_second()
        display_scoreboard()
    }
})
function update_up2() {
    up2_level.innerText = val_up2_level
    up2_cost.innerText = val_up2_cost
    up2_power.innerText = val_up2_power
    up2_progress.style.width = String(Math.min(100, Math.round(val_score * 100 / val_up2_cost))) + "%"
}


let val_up3_level = 0
let val_up3_cost = 1
let val_up3_power = 0
const up3 = document.getElementById("up3")
const up3_level = document.getElementById("up3_level")
const up3_cost = document.getElementById("up3_cost")
const up3_power = document.getElementById("up3_power")
const up3_progress = document.getElementById("up3_progress")
up3.addEventListener("click", () => {
    if (val_score >= val_up3_cost) {
        val_score -= val_up3_cost
        val_up3_level++
        val_up3_cost += val_up3_level * val_up3_level * 5
        val_up3_power += val_up3_level * val_up3_level
        update_up3()
        calc_val_per_second()
        display_scoreboard()
    }
})
function update_up3() {
    up3_level.innerText = val_up3_level
    up3_cost.innerText = val_up3_cost
    up3_power.innerText = val_up3_power
    up3_progress.style.width = String(Math.min(100, Math.round(val_score * 100 / val_up3_cost))) + "%"
}





































