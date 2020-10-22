let a;
let b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  a = height / 2;
  b = height / 2;
}

function draw() {
  background(247, 247, 247);
  stroke(random(50, 255));
  circle(mouseX, mouseY, 1);
  strokeWeight(random(1, 4));
  line(width/1.8, a, mouseX, mouseY);
  line(width/1.8, a, width*0.7, a);
  line(width/1.8, b, width*0.7, b);
  line(width/1.8, b, mouseX, mouseY);
  a = a - 50/random(1, 4);
  b = b - 30/random(1, 4);
  if (a < windowHeight/5) {
    a = height*0.8;
  }
  if (b < windowHeight/5) {
    b = height*0.8;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
