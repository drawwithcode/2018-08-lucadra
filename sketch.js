var pugStatus = false;

function preload() {
  happyPug  = loadImage("assets/happyPug.png");
  sleepyPug = loadImage("assets/sleepyPug.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  setShakeThreshold(30);
}

function pugDisplay() {
  if (pugStatus == true) {
    image(happyPug, 0, 0);
  } else {
    image(sleepyPug, 0, 0);
  }
}

function draw() {
  pugDisplay();
}

function deviceShaken() {
  pugStatus = !pugStatus;
}
