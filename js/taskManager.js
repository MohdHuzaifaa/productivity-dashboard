const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("category");
const prioritySelect = document.getElementById("priority");
const deadlineDate = document.getElementById("deadlineDate");
const deadlineTime = document.getElementById("deadlineTime");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");

addTaskBtn.addEventListener("click", addTask);


/* ADD TASK */

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") return;

    const task = {

id: Date.now(),
text: text,
category: categorySelect.value,
priority: prioritySelect.value,
deadline: combineDateTime(deadlineDate.value, deadlineTime.value),
completed:false

};
    tasks.push(task);

    saveTasks();

    renderTasks();

    taskInput.value = "";
    deadlineDate.value = "";
    deadlineTime.value = "";

}


/* DELETE */

function deleteTask(id) {

    tasks = tasks.filter(task => task.id != id);

    saveTasks();

    renderTasks();

}


/* COMPLETE */

function toggleComplete(id) {

    tasks = tasks.map(task => {

        if (task.id == id) {

            task.completed = true;

        }

        return task;

    });

    saveTasks();

    renderTasks();

}


/* RENDER */

function renderTasks() {

    taskList.innerHTML = "";

    const filtered = getFilteredTasks();

    if (filtered.length === 0) {

        emptyState.style.display = "block";

    } else {

        emptyState.style.display = "none";

    }

    filtered.forEach(task => {

        const li = document.createElement("li");

        li.classList.add("task");

        if (task.completed) {

            li.classList.add("completed");

        } else {

            li.classList.add("pending");

        }

        li.innerHTML = `

<div class="task-left">

<input
type="checkbox"
class="complete-checkbox"
data-id="${task.id}"
${task.completed ? "checked disabled" : ""}
>

<div class="task-info">

<span class="task-text">${task.text}</span>

<span class="category-badge">${task.category}</span>

<span class="priority-badge priority-${task.priority}">
${task.priority}
</span>

<span class="deadline">
${formatDeadline(task.deadline)}
</span>

</div>

</div>

<button class="delete-btn" data-id="${task.id}">
Delete
</button>

`;

        taskList.appendChild(li);

    });

    attachTaskEvents();

    updateProgress();



}


/* EVENTS */

function attachTaskEvents() {

    document.querySelectorAll(".complete-checkbox")
        .forEach(box => {

            box.addEventListener("change", e => {

                toggleComplete(e.target.dataset.id);

            });

        });

    document.querySelectorAll(".delete-btn")
        .forEach(btn => {

            btn.addEventListener("click", e => {

                deleteTask(e.target.dataset.id);

            });

        });

}


