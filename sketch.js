var backgroundToggle = 0;
var palette;

function preload() {
  palette = loadJSON("100.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container");
  frameRate(60);

  //noStroke();
  console.log(palette[0][1]);
  fill(palette[0][1]);
}

function draw() {
  background(0, 0, 0, 0);
  rotateX(frameCount * 0.1);
  plane(20, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function saveScreenshot() {
  saveCanvas("myCanvas", "png");
}
