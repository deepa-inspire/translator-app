function translateText() {
    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("lang").value;

    document.getElementById("output").innerText =
        "Translated (" + lang + "): " + text;
}