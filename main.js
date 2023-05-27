function setup() {
    canvas = createCanvas(280, 280)
    canvas.center();
    background("white");
}

function clearCanvas() {
    background("white")
}

function draw() {
    StrokeWeight(13);
        stroke(0);
        if(mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
}
function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.gotElementById("label").innerHTML = "label: " + results[0].label;

    document.gotElementById("confidence").innetHTML = "Confidence: " + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}