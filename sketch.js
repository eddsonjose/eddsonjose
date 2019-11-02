//Official Github Website
//by Eddson Jose
let strokeSize = 5;
let circleSize = 5;
//------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(8);
  textXPos = width;
  noStroke();
  fill(random(150, 220), random(150, 220), random(150, 220));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));
  circle(random(0, width), random(0, height), random(5, 10));

}
//------------------------------------------------------------------
function draw() {
  //drawing stars and lines
  if (mouseIsPressed) {
    textXPos -= 5;
    strokeWeight(strokeSize);
    stroke(random(200, 255), random(200, 255), random(200, 255));
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke();
    fill(random(150, 255), random(150, 255), random(150, 255));
    circle(width - mouseX + random(-100, 100), height - mouseY + random(-100, 100), random(1, circleSize));
    circle(mouseX + random(-100, 100), mouseY + random(-100, 100), random(1, circleSize));
  }
}
//form a star on mouse press
function mousePressed() {
  fill(random(200, 255), random(200, 255), random(200, 255));
  circle(mouseX, mouseY, circleSize * 2);
}
//form a star on mouse release
function mouseReleased() {
  fill(random(200, 255), random(200, 255), random(200, 255));
  circle(mouseX, mouseY, circleSize * 2);
}
