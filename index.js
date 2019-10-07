function setup() {
  img = loadImage('assets/Mega_absol.jpeg'); // Load the image

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('MidnightBlue');

  image(img, 0, 0);

  
  push();
  fill('lime')
  stroke('black');
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 120, 30, 10);
  pop();
  push();
  fill('lime')
  stroke('black');
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -50.0);
  star(0, 0, 120, 30, 10);
  pop()
  
  
}
//Turn in: Your own stars with color.
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(x, sy);
  }
  endShape(CLOSE);
}
function star1(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x * cos(a - halfAngle) * radius1;
    sy = y + sin(a - halfAngle) * radius1;
    vertex(sy, sx);
  }
  endShape(CLOSE);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
