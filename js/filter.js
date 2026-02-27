function getFilteredTasks(){

if(currentFilter === "completed"){
return tasks.filter(task => task.completed);
}

if(currentFilter === "pending"){
return tasks.filter(task => !task.completed);
}

return tasks;

}

document.querySelectorAll(".filter-btn").forEach(btn => {

btn.addEventListener("click", () => {

document.querySelectorAll(".filter-btn")
.forEach(b => b.classList.remove("active"));

btn.classList.add("active");

currentFilter = btn.dataset.filter;

renderTasks();

});

});