var backgroundToggle = 255;
var palette;
var xDim = 25;
var yDim = 25;

function preload() {
  palette = loadJSON("100.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container");
  frameRate(60);
  fill(palette[0][1]);
  stroke(0);
  strokeWeight(2.5);
}

function draw() {
  ortho(-width / 2, width / 2, -height / 2, height / 2, -100000, 100000);
  background(backgroundToggle);
  for (var x = -width / 2; x < width / 2; x += width / xDim) {
    for (var y = -height / 2; y < height / 2; y += height / yDim) {
      rect(x, y, windowWidth / xDim, windowHeight / yDim);
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
  } else if (backgroundToggle === 0) {
    backgroundToggle = 255;
    stroke(0);
  }
}
