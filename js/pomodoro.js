/* ================= POMODORO TIMER ================= */

let timer = null
let timeLeft = 1500
let currentMode = "focus"
let isRunning = false

/* durations */

const durations = {

    focus: 1500,
    short: 300,
    long: 900

}

/* DOM */

const timerDisplay = document.getElementById("pomodoroTimer")

const startBtn = document.getElementById("startPomodoro")
const pauseBtn = document.getElementById("pausePomodoro")
const resetBtn = document.getElementById("resetPomodoro")

const tabs = document.querySelectorAll(".pomo-tab")

/* display update */

function updateTimerDisplay() {

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    timerDisplay.textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`

}

/* start */

function startTimer() {

    if (isRunning) return

    isRunning = true

    timer = setInterval(() => {

        timeLeft--

        updateTimerDisplay()

        if (timeLeft <= 0) {

            clearInterval(timer)
            isRunning = false

            alert("Session finished!")

        }

    }, 1000)

}

/* pause */

function pauseTimer() {

    clearInterval(timer)
    isRunning = false

}

/* reset */

function resetTimer() {

    clearInterval(timer)

    isRunning = false

    timeLeft = durations[currentMode]

    updateTimerDisplay()

}

/* mode switching */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"))

        tab.classList.add("active")

        currentMode = tab.dataset.mode

        timeLeft = durations[currentMode]

        resetTimer()

    })

})

/* buttons */

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetBtn.addEventListener("click", resetTimer)

/* init */

updateTimerDisplay()