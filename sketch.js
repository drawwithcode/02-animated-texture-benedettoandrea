var backgroundToggle = 255;
var xDim = 20;
var yDim = 20;
var angleX = 0;
var angleY = 0;
var octaves = 8;
var falloff = 0.5;
var palette;
var paletteSelector;

function preload() {
  palette = loadJSON("palettes.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container");
  frameRate(60);
  fill(255);
  stroke(0);
  strokeWeight(windowHeight / 750);
  angleMode(DEGREES);
  paletteSelector = getRandomInt(0, 18);
}

function draw() {
  noiseDetail(octaves, falloff);
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
      let noiseColor = noise(
        (frameCount / 5 + x) / 250,
        (frameCount / 5 + y) / 250
      );
      push();
      translate(x, y);
      rotateX(angleX);
      rotateY(angleY);
      if (Math.floor(noiseColor * 10) == 0) {
        fill(palette[paletteSelector][0]);
      } else if (Math.floor(noiseColor * 10) == 1) {
        fill(palette[paletteSelector][1]);
      } else if (Math.floor(noiseColor * 10) == 2) {
        fill(palette[paletteSelector][2]);
      } else if (Math.floor(noiseColor * 10) == 3) {
        fill(palette[paletteSelector][3]);
      } else if (Math.floor(noiseColor * 10) == 4) {
        fill(palette[paletteSelector][4]);
      } else if (Math.floor(noiseColor * 10) == 5) {
        fill(palette[paletteSelector][5]);
      } else if (Math.floor(noiseColor * 10) == 6) {
        fill(palette[paletteSelector][6]);
      } else if (Math.floor(noiseColor * 10) == 7) {
        fill(palette[paletteSelector][7]);
      } else if (Math.floor(noiseColor * 10) == 8) {
        fill(palette[paletteSelector][8]);
      } else {
        fill(palette[paletteSelector][9]);
      }
      plane(windowWidth / xDim, windowHeight / yDim);
      pop();
    }
  }
}

function mouseDragged() {
  angleX = map(mouseY, -width / 2, width / 2, 360, 0);
  angleY = map(mouseX, -width / 2, width / 2, 360, 0);
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

function AddHeight() {
  yDim++;
}

function RemHeight() {
  yDim--;
}

function AddWidth() {
  xDim++;
}

function RemWidth() {
  xDim--;
}

function randomPalette() {
  paletteSelector = getRandomInt(0, 18);
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

function startStop() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function saveScreenshot() {
  saveCanvas("myCanvas", "png");
}
