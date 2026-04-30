function translateText() {
    let text = document.getElementById("inputText").value.toLowerCase().trim();
    let lang = document.getElementById("lang").value;

    if (text === "") {
        document.getElementById("output").innerText = "Please enter text to translate.";
        return;
    }

    // Simple NLP dictionary (demo translator)
    let dictionary = {
        "i": { hi: "मैं", ta: "நான்", kn: "ನಾನು" },
        "you": { hi: "तुम", ta: "நீ", kn: "ನೀನು" },
        "like": { hi: "पसंद", ta: "பிடிக்கும்", kn: "ಇಷ್ಟ" },
        "love": { hi: "प्यार", ta: "காதல்", kn: "ಪ್ರೀತಿ" },
        "good": { hi: "अच्छा", ta: "நல்ல", kn: "ಒಳ್ಳೆಯ" },
        "food": { hi: "खाना", ta: "உணவு", kn: "ಆಹಾರ" },
        "name": { hi: "नाम", ta: "பெயர்", kn: "ಹೆಸರು" }
    };

    // clean punctuation and split sentence
    let cleanedText = text.replace(/[?.,!]/g, "").trim();
    let words = cleanedText.split(" ");

    let translatedWords = [];

    for (let w of words) {
        if (dictionary[w] && dictionary[w][lang]) {
            translatedWords.push(dictionary[w][lang]);
        } else {
            translatedWords.push(w); // keep original if not found
        }
    }

    let result = translatedWords.join(" ");

    document.getElementById("output").innerHTML =
        "<b>Original:</b> " + text + "<br>" +
        "<b>Translated:</b> " + result + " (" + lang + ")";
}