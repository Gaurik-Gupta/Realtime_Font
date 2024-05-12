var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    if (content == "Poppins") {
        document.getElementById("text_input").style.fontFamily = "Poppins";
    }
    if (content == "Roboto") {
        document.getElementById("text_input").style.fontFamily = "Roboto";
    }
    if (content == "Montserrat") {
        document.getElementById("text_input").style.fontFamily = "Montserrat";
    }
    if (content == "Oswald") {
        document.getElementById("text_input").style.fontFamily = "Oswald";
    }

}

function setup() {
}
function draw() {
    
}

