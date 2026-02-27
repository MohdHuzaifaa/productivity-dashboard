function updateProgress() {

    const completed = tasks.filter(t => t.completed).length;

    const total = tasks.length;

    const percent = total === 0 ? 0 : (completed / total) * 100;

    document.getElementById("taskStats")
        .textContent = `${completed} / ${total} tasks completed`;

    document.getElementById("progressFill")
        .style.width = percent + "%";

}