async function translateText() {
    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("lang").value;

    if (!text) {
        document.getElementById("output").innerText = "Please enter text to translate.";
        return;
    }

    document.getElementById("output").innerText = "Translating...";

    try {
        // REAL translation API (works for any sentence)
        let response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`
        );

        let data = await response.json();

        let translatedText = data.responseData.translatedText;

        document.getElementById("output").innerHTML =
            "<b>Original:</b> " + text + "<br><br>" +
            "<b>Translated:</b> " + translatedText;

    } catch (err) {
        document.getElementById("output").innerText =
            "Error: " + err.message;
    }
}