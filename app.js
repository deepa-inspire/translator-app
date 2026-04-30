AWS.config.region = "ap-south-1"; // AWS region

function translateText() {
    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("lang").value;

    if (!text) {
        document.getElementById("output").innerText = "Enter text first";
        return;
    }

    const translate = new AWS.Translate();

    let params = {
        Text: text,
        SourceLanguageCode: "en",
        TargetLanguageCode: lang
    };

    translate.translateText(params, function(err, data) {
        if (err) {
            document.getElementById("output").innerText =
                "Error: " + err.message;
        } else {
            document.getElementById("output").innerHTML =
                "<b>Original:</b> " + text + "<br>" +
                "<b>Translated:</b> " + data.TranslatedText;
        }
    });
}