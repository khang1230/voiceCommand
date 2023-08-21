var x = 0;
var y = 0;

var screenWidth = 0
var screenHeight = 0

var draw_apple = "";
var speakData = ""
var to_number = ""


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);
  content = event.results[0][0].transcript;
  console.log(content)
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

  to_number = Number(content)
  console.log(to_number)
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing apple"
    draw_apple = "set"
    
  } else {
    document.getElementById("status").innerHTML = "The speech has not recognized a number"
  }

}

function preload() {
  draw_apple = loadImage("apple.png")
}

function setup() {
  screenWidth = window.innerWidth
  screenHeight = window.innerHeight
  canvas = createCanvas(screenWidth, screenHeight - 150)
  canvas.position(0, 150)
}

function draw() {
  if (draw_apple == "set") {
    draw_apple = "";
    for (i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 700)
      y = Math.floor(Math.random() * 450)
      image(draw_apple, x, y, 15, 15)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak()
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
