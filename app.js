async function translateText() {
    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("lang").value;
    let chat = document.getElementById("chat");

    if (!text) return;

    // user message
    chat.innerHTML += `<div class="msg user">${text}</div>`;

    document.getElementById("inputText").value = "";

    try {
        let response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`
        );

        let data = await response.json();
        let translated = data.responseData.translatedText;

        // bot message
        chat.innerHTML += `<div class="msg bot">${translated}</div>`;

        chat.scrollTop = chat.scrollHeight;

    } catch (err) {
        chat.innerHTML += `<div class="msg bot">Error: ${err.message}</div>`;
    }
}