var backgroundToggle = 255;
var palette;
var xDim = 20;
var yDim = 20;

function preload() {
  palette = loadJSON("100.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container");
  frameRate(60);
  fill(255);
  stroke(0);
  strokeWeight(windowHeight / 500);
  angleMode(DEGREES);
}

function draw() {
  background(backgroundToggle);
  ortho(-width / 2, width / 2, -height / 2, height / 2, -100000, 100000);

  for (
    var x = -width / 2 + width / xDim / 2;
    x < width / 2;
    x += width / xDim
  ) {
    for (
      var y = -height / 2 + height / yDim / 2;
      y < height / 2;
      y += height / yDim
    ) {
      push();
      translate(x, y);
      rotateX(frameCount * 0.1);
      rotateY(frameCount * 0.1);
      plane(windowWidth / xDim, windowHeight / yDim);
      pop();
    }
  }
}

// generate a random integer from range, inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function saveScreenshot() {
  saveCanvas("myCanvas", "png");
}

function switchBackground() {
  if (backgroundToggle === 255) {
    backgroundToggle = 0;
    stroke(255);
    fill(0);
  } else if (backgroundToggle === 0) {
    backgroundToggle = 255;
    stroke(0);
    fill(255);
  }
}

function AddWidth() {
  xDim++;
}

function RemWidth() {
  xDim--;
}

function AddHeight() {
  yDim++;
}

function RemHeight() {
  yDim--;
}

function keyReleased() {
  if (key == "s" || key == "S") {
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
  }
}
