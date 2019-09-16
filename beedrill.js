//  \/Comands\/

var angle2 = this.angle2
var beedrillhp = 300
var beedrill;

function Beedrill(x, y, xSpeed, ySpeed) {
  this.x = 200;
  this.y = 200;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.xdir = 0;
  this.ydir = 0
  this.r = 0;
  this.angle = angle2
  this.bulletx = this.x
  this.bullety = this.y
  this.create = function(x, y) {
    fill(255);
    text([beedrillhp], 362, 50)
    text(javamon[drill], 300, 50)

    beginShape(this.x, this.y, this.xSpeed, this.ySpeed);

    push();
    translate(this.x, this.y, this.xSpeed, this.ySpeed);
    rotate(angle2);

    push()

    strokeWeight(8.5);
    stroke('silver');
    line(-25, -1, 15, -15);
    line(-25, -39, 15, -25);
      line(-35, -20, 15, -20);

    stroke("yellow")

    line(-15, -5, 15, -15);
    line(-15, -35, 15, -25);

    line(-15, -35, 15, -25);
    strokeWeight(10.5);

    line(-30, -20, 10, -20);

    stroke('black');
    rect(-20, -20, 5, -0);
    rect(-25, -20, -5, -0);




    pop()
    stroke('black');
    fill('silver');
    noStroke()

    strokeWeight(1);

    ellipse(20, -20, 20, 18);
    fill('yellow')
    ellipse(10, -20, 45, 10);
    push()
    strokeWeight(12.5);
    stroke('silver');
    line(-5, -25, 25, -35);

    line(-5, -15, 25, -5);
    pop()
    ellipse(0, -20, 20, 18);
    ellipse(0, -12, 30, 4);
    ellipse(0, -28, 30, 4);
    push()
    fill("red")
    ellipse(-5, -20, 12, 10);
    pop()
    ellipse(0, -20, 25, 4);



    pop();
    endShape();
  }
  this.setDir = function(dir) {
    this.xdir = dir;
  }
  this.setDir2 = function(dir2) {
    this.ydir = dir2;
  }
  this.move = function(dir) {
    this.x += this.xdir * 5;
    this.y += this.ydir * 5;
  }



}

function FellStinger(x, y, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed
  this.ySpeed = ySpeed
  this.r = 2.5;
  this.toDelete = false;

  this.show = function() {
    push();
    fill('white');
    stroke('green');
    strokeWeight(1)
    ellipse(this.x, this.y, this.r * 3.2, this.r * 3.2);
    pop();
  }

  this.disapear = function() {
    print('Fell Stinger!')
    this.toDelete = true;
  }


  this.hits = function(hit) {
    var d = dist(this.x, this.y, target.x, target.y);
    if (d < this.r + target.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.x = this.x + this.xSpeed
    this.y = this.y + this.ySpeed

  }

}

function keyReleased() {
  if (key != ' ') {
    beedrill.setDir(0);
    beedrill.setDir2(0)


  }
}

function keyPressed() {


  if (key === 'z') {

    var bullet2 = new FellStinger(beedrill.x, beedrill.y, cos(angle2) * -10, sin(angle2) * -10);
    pulse.push(bullet2);

  }



  if (key === 'ArrowLeft') {
    beedrill.setDir(-1);
    angle2 = PI * 2


  }
  if (key === 'ArrowRight') {
    beedrill.setDir(1);
    angle2 = PI
  }
  if (key === 'ArrowDown') {
    beedrill.setDir2(1);
    angle2 = HALF_PI * 3
  }
  if (key === 'ArrowUp') {
    beedrill.setDir2(-1);
    angle2 = HALF_PI

  }
}

