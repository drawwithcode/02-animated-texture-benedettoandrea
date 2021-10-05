var backgroundToggle = 255;
var xDim = 20;
var yDim = 20;
var angleX = 0;
var angleY = 0;
var octaves = 8;
var falloff = 0.5;

function preload() {
  palette = loadJSON("100.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container");
  frameRate(60);
  fill(255);
  stroke(0);
  strokeWeight(windowHeight / 750);
  angleMode(DEGREES);
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
        fill(230, 81, 0);
      } else if (Math.floor(noiseColor * 10) == 1) {
        fill(239, 108, 0);
      } else if (Math.floor(noiseColor * 10) == 2) {
        fill(245, 124, 0);
      } else if (Math.floor(noiseColor * 10) == 3) {
        fill(251, 140, 0);
      } else if (Math.floor(noiseColor * 10) == 4) {
        fill(255, 152, 0);
      } else if (Math.floor(noiseColor * 10) == 5) {
        fill(255, 167, 38);
      } else if (Math.floor(noiseColor * 10) == 6) {
        fill(255, 183, 77);
      } else if (Math.floor(noiseColor * 10) == 7) {
        fill(255, 204, 128);
      } else if (Math.floor(noiseColor * 10) == 8) {
        fill(255, 224, 178);
      } else {
        fill(255, 243, 224);
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
