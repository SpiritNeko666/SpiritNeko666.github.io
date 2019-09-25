var angle2 = this.angle2
function Beedrill(x,y,xSpeed,ySpeed) {
  this.x = 300
  this.y = 200
   this.xSpeed = xSpeed
  this.ySpeed = ySpeed
  this.xdir =  0;
  this.ydir = 0
   this.r = 20;
  this.angle = angle2
  this.bulletx = this.x
  this.bullety = this.y
  this.create = function(x,y) {

    beginShape(this.x, this.y, this.xSpeed, this.ySpeed);
    push();
    translate(this.x, this.y, this.xSpeed, this.ySpeed);
    rotate(angle2);

    push()

    strokeWeight(8.5);
    stroke('silver');
    line(-25, 19, 15, 5);//√
    line(-25, -19, 15, -5);//√
      line(-35, -0, 15, -0);//√

    stroke("gold")

    line(-15, 15, 15, 5);//√
    line(-15, -15, 15, -5);//√

    line(-15, -15, 15, -5);//√
    strokeWeight(10.5);

    line(-30, -0, 10, -0);//√

    stroke('black');
    rect(-20, -0, 5, -0);
    rect(-25, -0, -5, -0);
    pop()
    stroke('black');
    fill('silver');
    noStroke()

    strokeWeight(1);

    ellipse(20, -0, 20, 18);//√
    fill('gold')
    ellipse(10, -0, 45, 10);//√
    push()
    strokeWeight(12.5);
    stroke('silver');
    line(-5, -5, 25, -15);//√

    line(-5, 5, 25, 15);//√
    pop()
    ellipse(0, 0, 20, 18);
    ellipse(0, 8, 30, 4);
    ellipse(0, -8, 30, 4);
    push()
    fill("red")
    ellipse(-5, 0, 12, 10);
    pop()
    ellipse(0, 0, 25, 4);



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
this.x += this.xdir *5;  
this.y += this.ydir *5;
} 
this.nightslash = function(atk){
  
}
}
