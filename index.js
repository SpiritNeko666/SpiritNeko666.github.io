function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);

  
  
  push();
  fill('lime')
  stroke('black');
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 55, 15, 10);
  pop();
  push();
  fill('lime')
  stroke('black');
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -50.0);
  star(0, 0, 55, 15, 10);
  pop()
  
  push();
  fill('white')
  stroke('crimson');
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 50.0);
  star1(0, 0, 55, 15, 15);
  pop();
   push();
  fill('white')
  stroke('crimson');
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / -50.0);
  star1(0, 0, 55, 15, 15);
  pop();
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
