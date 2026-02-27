const themeToggle = document.getElementById("themeToggle");

function loadTheme() {

    const saved = localStorage.getItem("theme");

    if (saved === "light") {

        document.body.classList.add("light");

    }

}

loadTheme();

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

});