function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks() {

    const stored = localStorage.getItem("tasks");

    if (stored) {

        tasks = JSON.parse(stored);

    }

}