let tasks = [];
let currentFilter = "all";

/* ================= DOM ================= */

const taskView = document.getElementById("taskView");
const pomodoroView = document.getElementById("pomodoroView");

const navTasks = document.getElementById("navTasks");
const navPomodoro = document.getElementById("navPomodoro");


/* ================= INIT ================= */

function initializeApp() {

    loadTasks();
    loadTheme();
    loadQuote();

    renderTasks();

    /* default view */

    taskView.classList.remove("hidden");
    pomodoroView.classList.add("hidden");

}

initializeApp();


/* ================= NAVIGATION ================= */

function showTasks() {

    taskView.classList.remove("hidden");
    pomodoroView.classList.add("hidden");

    navTasks.classList.add("active");
    navPomodoro.classList.remove("active");

}

function showPomodoro() {

    pomodoroView.classList.remove("hidden");
    taskView.classList.add("hidden");

    navPomodoro.classList.add("active");
    navTasks.classList.remove("active");

}


/* ================= EVENT LISTENERS ================= */

if (navTasks) {

    navTasks.addEventListener("click", showTasks);

}

if (navPomodoro) {

    navPomodoro.addEventListener("click", showPomodoro);

}