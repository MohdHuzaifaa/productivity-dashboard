async function loadQuote() {

    const quoteElement = document.getElementById("quoteText");

    try {

        const response = await fetch(
            "https://api.quotable.io/random?timestamp=" + new Date().getTime()
        );

        const data = await response.json();

        quoteElement.textContent = `"${data.content}" — ${data.author}`;

    }

    catch (error) {

        const fallbackQuotes = [

            "Small progress is still progress.",
            "Discipline beats motivation.",
            "Focus on being productive instead of busy.",
            "Start where you are. Use what you have.",
            "Consistency creates success."

        ];

        const random = Math.floor(Math.random() * fallbackQuotes.length);

        quoteElement.textContent = fallbackQuotes[random];

    }

}

document
    .getElementById("refreshQuote")
    .addEventListener("click", loadQuote);