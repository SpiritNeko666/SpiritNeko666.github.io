function preload() {
  soundFormats('mp3', 'ogg','wav');
  AlphysTakesAction = loadSound('Alphys takes action.mp3');
  Asgore = loadSound('Asgore.mp3');

}

function setup() {
  AlphysTakesAction.setVolume(2.5);
    Asgore.setVolume(2.5);

  button = createButton('AlphysTakesAction');
  button.mousePressed(playSong);
  button2 = createButton('Asgore');
  button2.mousePressed(playSong2);
}

function playSong() {
  AlphysTakesAction.stop(); 
  Asgore.stop(); 
  AlphysTakesAction.play(); 
  
}

function playSong2() {
AlphysTakesAction.stop(); 
  Asgore.stop(); 
  Asgore.play(); 
  
}
