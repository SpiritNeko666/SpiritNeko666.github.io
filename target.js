
var angle = this.angle
function Spirit(x,y,xSpeed,ySpeed) {
  this.x = 100
  this.y = 200
   this.xSpeed = xSpeed
  this.ySpeed = ySpeed
  this.xdir =  0;
  this.ydir = 0
     this.r = 20;

  this.angle = angle
  this.bulletx = this.x
  this.bullety = this.y
  this.create = function(x,y) {
    ellipseMode(RADIANS);
    fill(255);
    beginShape(this.x,this.y,this.xSpeed,this.ySpeed);
    
    push();
    translate(this.x,this.y,this.xSpeed,this.ySpeed);
    rotate(angle);
    stroke('cyan');
    fill('white');
    strokeWeight(1.5);
    ellipse(-10,7,15,10)
    ellipse(-10,-7,15,10)
    ellipse(-45,-7,15,10)
        ellipse(-45,7,15,10)

    ellipse(3-40, 0, 18, 12);
    ellipse(26-40, 0, 24, 14);
    ellipse(16-40, 0, 30, 8);
    
    stroke('white');
    fill('cyan');
   
    ellipse(-2-40, 0, 25, 4);
 ellipse(29-40, 0, 8, 8);
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
