// texture control
let xDim = 20;
let yDim = 20;
let angleX = 0;
let angleY = 0;

// noise
let octaves = 8;
let falloff = 0.5;

// color palettes
let palette;
let paletteSelector;

// theming
let currentTheme = "light";
let themeBackground = 255;
let themeStroke = 0;

function preload() {
  palette = loadJSON("palettes.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container");
  frameRate(60);
  angleMode(DEGREES);
  paletteSelector = getRandomInt(0, 18);
}

function draw() {
  background(themeBackground);
  stroke(themeStroke);
  strokeWeight(height / 750);
  noiseDetail(octaves, falloff);
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// generate a random integer from a range, inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

// toggle between themes (light/dark)
function toggleP5Theme() {
  if (currentTheme === "dark") {
    themeBackground = 255;
    themeStroke = 0;
    currentTheme = "light";
  } else if (currentTheme === "light") {
    themeBackground = 0;
    themeStroke = 255;
    currentTheme = "dark";
  }
}

// toggle the movement
function startStop() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

// save a screenshot
function saveScreenshot() {
  let date = new Date();
  let currentDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "-" +
    date.getHours() +
    "-" +
    date.getMinutes() +
    "-" +
    date.getSeconds();
  saveCanvas("texture_" + currentDate, "png");
}
