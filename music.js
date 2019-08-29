function preload() {
  soundFormats('mp3', 'ogg','wav');
  AlphysTakesAction = loadSound('Alphys takes action.mp3');
  AsgoreIntro = loadSound('AsgoreIntro.mp3');
  HopesAndDreams = loadSound('Hopes and Dreams.mp3');

}

function setup() {
  AlphysTakesAction.setVolume(2.5);
  AsgoreIntro.setVolume(2.5);
  HopesAndDreams.setVolume(2.5);
  button = createButton('AlphysTakesAction');
  button.mousePressed(playSong1);
  button2 = createButton('Asgore Intro');
  button2.mousePressed(playSong2);
  button3 = createButton('Hopes And Dreams');
  button3.mousePressed(playSong3);
}

function playSong1() {
  AlphysTakesAction.stop(); 
  AsgoreIntro.stop(); 
  HopesAndDreams.stop(); 
  AlphysTakesAction.play(); 
  
}

function playSong2() {
AlphysTakesAction.stop(); 
  AsgoreIntro.stop(); 
    HopesAndDreams.stop(); 

  AsgoreIntro.play(); 
  
}

function playSong3() {
  AlphysTakesAction.stop(); 
  AsgoreIntro.stop(); 
  HopesAndDreams.stop(); 
  HopesAndDreams.play(); 
  
}
