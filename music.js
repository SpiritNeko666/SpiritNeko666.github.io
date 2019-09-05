let song, analyzer, fft, mic, volume;
let v = 5
function preload() {
  soundFormats('mp3', 'ogg','wav');
  AlphysTakesAction = loadSound('Alphys takes action.mp3');
  AsgoreIntro = loadSound('AsgoreIntro.mp3');
  HopesAndDreams = loadSound('Hopes and Dreams.mp3');
  SpiderDance = loadSound('Spider dance.mp3');
  MySong = loadSound('My song.mp3');
  Asgore = loadSound('Asgore+Intro.mp3');


}

function setup() {
  createCanvas(710, 200);  
  volume = createSlider();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(analyzer);
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(AlphysTakesAction);
  analyzer.setInput(AsgoreIntro);
  analyzer.setInput(HopesAndDreams);
  analyzer.setInput(SpiderDance);
  analyzer.setInput(MySong);

  

  button = createButton('AlphysTakesAction');
  button.mousePressed(stopMusic);
  button.mousePressed(playSong1);
  
  button2 = createButton('AsgoreIntro');
  button2.mousePressed(stopMusic);
  button2.mousePressed(playSong2);
  
  button3 = createButton('HopesAndDreams');
  button3.mousePressed(stopMusic);
  button3.mousePressed(playSong3);
  
  button4 = createButton('SpiderDance');
  button4.mousePressed(stopMusic);
  button4.mousePressed(playSong4);
  
  button5 = createButton('MySong');
  button5.mousePressed(stopMusic);
  button5.mousePressed(playSong5);
  
  button6 = createButton('Asgore+Intro');
  button6.mousePressed(stopMusic);
  button6.mousePressed(playSong6);
  
  button7 = createButton('PauseMusic');
  button7.mousePressed(pauseMusic);
  
  button8 = createButton('StopMusic');
  button8.mousePressed(stopMusic);
}
function playSong1() {
  AlphysTakesAction.stop(); 
AsgoreIntro.stop(); 
HopesAndDreams.stop(); 
SpiderDance.stop(); 
MySong.stop()
  Asgore.stop();   

AlphysTakesAction.play(); 

}
function playSong2() {
  AlphysTakesAction.stop(); 
AsgoreIntro.stop(); 
HopesAndDreams.stop(); 
SpiderDance.stop(); 
MySong.stop()
  Asgore.stop();   

AsgoreIntro.play(); 

}
function playSong3() {
  AlphysTakesAction.stop(); 
AsgoreIntro.stop(); 
HopesAndDreams.stop(); 
SpiderDance.stop(); 
MySong.stop()
HopesAndDreams.play();   
}
function playSong4() {
  
  AlphysTakesAction.stop(); 
AsgoreIntro.stop(); 
HopesAndDreams.stop(); 
SpiderDance.stop(); 
MySong.stop()
  Asgore.stop();   

SpiderDance.play();   
}
function playSong5() {
AlphysTakesAction.stop(); 
AsgoreIntro.stop(); 
HopesAndDreams.stop(); 
SpiderDance.stop(); 
MySong.stop()
  Asgore.stop();   

MySong.play();   
}
function playSong6() {
AlphysTakesAction.stop(); 
AsgoreIntro.stop(); 
HopesAndDreams.stop(); 
SpiderDance.stop(); 
MySong.stop()
Asgore.stop();   

Asgore.play();   
}
function pauseMusic() {
  AlphysTakesAction.pause(); 
  AsgoreIntro.pause(); 
  HopesAndDreams.pause(); 
  SpiderDance.pause(); 
  MySong.pause(); 
  Asgore.pause();   


}

function stopMusic() {
AlphysTakesAction.stop(); 
AsgoreIntro.stop(); 
HopesAndDreams.stop(); 
SpiderDance.stop(); 
MySong.stop(); 
  Asgore.stop();   


}

function draw() {
  const v = volume.value();
  AlphysTakesAction.setVolume(v);
  AsgoreIntro.setVolume(v);
  HopesAndDreams.setVolume(v);
  SpiderDance.setVolume(v);
  MySong.setVolume(v);

  
  background(0);

  // Get the average (root mean square) amplitude
  
  let rms = analyzer.getLevel();
  push()
  strokeWeight(2)
  stroke('red')
  fill('red')
  ellipse(width-70, height/3, 10 + rms * 10, 10 + rms * 10);
  pop()
  let spectrum = fft.analyze();


  noStroke();
  fill(255,0,0)
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
  endShape();
}


