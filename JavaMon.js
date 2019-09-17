var javamon = ["spirit:", "Beedrill:"]
var absol = 0
var drill = 1
var absolhp = 300
var drillhp = 300
var damage1 = 0
var damage = 0
var spirit;
var enemy;
var aliens = [];
var aliens2 = [];
var hit = [];
var soul = [];
var sting = [];
var bullets1 = [];
var song
var score = 0;
var gameOver = false;
var readRows = 0;

function preload() {
  soundFormats('mp3', 'ogg');
}

function setup() {
  createCanvas(600, 400);
  spirit = new Spirit();
  beedrill = new Beedrill();


  for (let j = 0; j < 1; j++) {
    for (let i = 0; i < 1; i++) {
      hit[i] = new Alien(i * 80 + 80, 20 + 80 * j);
    }
    aliens.push(hit);
  }
}

function draw() {
    
  
  
  background(100);
    
    push()
    fill('white')
    rect(0,0,50,400)
    rect(50,350,550,400)
    rect(50,0,550,50)
    pop()
    push();
    textSize(25)
    fill('yellow')
    stroke('black')
    strokeWeight(5);
    text(javamon[drill], 365, 50)
    text([drillhp], 462, 50)
    pop();
    
    
    
    
    spirit.create();
    spirit.move();
    beedrill.create();
    beedrill.move();
    for (var i = 0; i < sting.length; i++) {
      sting[i].show();
      sting[i].move();

      for (var n = 0; n < aliens.length; n++) {
        for (var j = 0; j < aliens[n].length; j++) {
          if (sting[i].hits(aliens[n][j])) {
            sting[i].disapear();
            absolhp = absolhp - 10

          }
        }
      }
    }
    for (var q = sting.length - 1; q >= 0; q--) {
      if (sting[q].toDelete) {
        sting.splice(q, 1);
      }

    }
    readRows = 0;
    if (drillhp == 0) {
      print('Beedrill Fainted!')


      gameOver = true;
    }
  
}

function keyReleased() {
  if (key != ' ') {
    spirit.setDir(0);
    spirit.setDir2(0)
    beedrill.setDir(0);
    beedrill.setDir2(0)


  }
}
function keyPressed() {

  if (key === 'z') {

    var bullet2 = new FellStinger(beedrill.x, beedrill.y, cos(angle2) * -10, sin(angle2) * -10);
    sting.push(bullet2);

  }

  if (keyCode === UP_ARROW) {
    beedrill.setDir2(-1);
    angle2 = HALF_PI * -3


  }
  if (keyCode === DOWN_ARROW) {
    beedrill.setDir2(1);

    angle2 = -HALF_PI
  }
  if (keyCode === RIGHT_ARROW) {
    beedrill.setDir(1);

    angle2 = PI

  }
  if (keyCode === LEFT_ARROW) {
    beedrill.setDir(-1);
    angle2 = 2 * PI


  }
}
