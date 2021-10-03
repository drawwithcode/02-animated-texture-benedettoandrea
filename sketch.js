var backgroundToggle = 255;
var palette;

function preload() {
  palette = loadJSON("100.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container");
  frameRate(60);
  fill(palette[0][1]);
}

function draw() {
  background(backgroundToggle);
  rotateX(frameCount * 0.1);
  plane(20, 20);
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
  } else if (backgroundToggle === 0) {
    backgroundToggle = 255;
  }
}
