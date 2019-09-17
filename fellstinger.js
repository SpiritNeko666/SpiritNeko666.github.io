function FellStinger(x,y, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed
  this.ySpeed = ySpeed
  this.r = 2.5;
  this.toDelete = false;
  
  this.show = function() {
   push();
    ellipseMode(RADIANS)  
    fill('yellow');
    stroke('green');
    strokeWeight(3)

    ellipse(this.x, this.y, this.r * 5.2 , this.r * 5.2);
    pop();
  }
  
  this.disapear = function() {
    this.toDelete = true;
  }
  
   
  this.hits = function() {
    var d = dist(this.x, this.y, spirit.x+5, spirit.y);
    if (d < this.r + spirit.r){
     return true;

    }
    else {
    return false;
    }
  }
  
  this.move = function() {
    this.x = this.x+this.xSpeed 
    this.y = this.y+this.ySpeed  
   
  }
  
}
 
