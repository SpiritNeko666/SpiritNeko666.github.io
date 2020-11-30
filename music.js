
let analyzer, fft;
var volume


function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  
  
  AlphysTakesAction = loadSound('music/Alphys takes action.mp3');
  AsgoreIntro = loadSound('music/AsgoreIntro.mp3');
  HopesAndDreams = loadSound('music/Hopes and Dreams.mp3');
  SpiderDance = loadSound('music/Spider dance.mp3');
  MySong = loadSound('music/My song.mp3');
  MySong2 = loadSound('music/My Second Song.mp3');
  Megalovania = loadSound('music/Megalovania.mp3');
  Waterfall = loadSound('music/Waterfall.mp3');
  GuitarVsPiano = loadSound('music/Guitar Vs Piano 1.2.mp3');

}

function setup() {
  createCanvas(windowWidth, 200);
  volume = createSlider(0,10);
  volume.style('width', '80px');
  
  textStyle(BOLD);
  textSize(20);
  

  fft = new p5.FFT();
  fft.setInput(analyzer);

  analyzer = new p5.Amplitude();
  analyzer.setInput(AlphysTakesAction);
  analyzer.setInput(AsgoreIntro);
  analyzer.setInput(HopesAndDreams);
  analyzer.setInput(SpiderDance);
  analyzer.setInput(MySong);
  analyzer.setInput(MySong2);
  analyzer.setInput(Megalovania);
  analyzer.setInput(Waterfall);
  analyzer.setInput(GuitarVsPiano);


  button5 = createButton('A Heart Of Ice');
  button5.mousePressed(playSong5);
    button5.style('background-color', "DeepSkyBlue");
  button5.style('color', "white");

  button7 = createButton('My Second Song');
  button7.mousePressed(playSong7);
  button7.style('background-color', "coral");
  button7.style('color', "white");

  
  button8 = createButton('Megalovania Piano-Guitar Duet');
  button8.mousePressed(playSong8);
  button8.style('background-color', "blue");
  button8.style('color', "white");

  button = createButton('AlphysTakesAction');
  button.mousePressed(playSong1);
  button.style('background-color', "gold");

  button4 = createButton('SpiderDance');
  button4.mousePressed(playSong4);
  button4.style('background-color', "magenta");
  button4.style('color', "black");

  button3 = createButton('HopesAndDreams');
  button3.mousePressed(playSong3);
   button3.style('background-color', "red");
  button3.style('color', "white");

  
  button2 = createButton('AsgoreIntro');
  button2.mousePressed(playSong2);
      button2.style('background-color', "firebrick");
  button2.style('color', "grey");

  button9 = createButton('Waterfall');
  button9.mousePressed(playSong9);
        button9.style('background-color', "LightSeaGreen");
  button9.style('color', "blue");
  
  button_GuitarVsPiano = createButton('Guitar Vs Piano 1.2');
  button_GuitarVsPiano.mousePressed(playSong16);
  button_GuitarVsPiano.style('background-color', "Coral");
  button_GuitarVsPiano.style('color', "LightSeaGreen");

  button14 = createButton('PauseMusic');
  button14.mousePressed(pauseMusic);
        button14.style('background-color', "grey");

  button15 = createButton('StopMusic');
  button15.mousePressed(stopMusic);
          button15.style('background-color', "grey");

}

function playSong1() {
    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
Waterfall.stop()
GuitarVsPiano.stop()


  AlphysTakesAction.play();

}

function playSong2() {
    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
Waterfall.stop()
GuitarVsPiano.stop()

  AsgoreIntro.play();

}

function playSong3() {
    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
Waterfall.stop()
GuitarVsPiano.stop()
  HopesAndDreams.play();
}

function playSong4() {

    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
GuitarVsPiano.stop()
Waterfall.stop()

  SpiderDance.play();
}

function playSong5() {
    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
Waterfall.stop()
GuitarVsPiano.stop()

  MySong.play();
}


function playGuitarVsPiano() {
  AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
  Megalovania.stop()
  Waterfall.stop()
  GuitarVsPiano.stop()
  GuitarVsPiano.play();
}

function playSong7() {
    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
GuitarVsPiano.stop()
Waterfall.stop()

  MySong2.play();
}

function playSong8() {
    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
Waterfall.stop()
GuitarVsPiano.stop()
  Megalovania.play();
}
function playSong9() {
    AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
Waterfall.stop()
GuitarVsPiano.stop()
  Waterfall.play();
}

function pauseMusic() {
  AlphysTakesAction.pause();
  AsgoreIntro.pause();
  HopesAndDreams.pause();
  SpiderDance.pause();
  MySong.pause();
  MySong2.pause();
Megalovania.pause();
Waterfall.pause();
GuitarVsPiano.pause()  
}

function stopMusic() {
  AlphysTakesAction.stop();
  AsgoreIntro.stop();
  HopesAndDreams.stop();
  SpiderDance.stop();
  MySong.stop();
  MySong2.stop()
Megalovania.stop()
Waterfall.stop()
GuitarVsPiano.stop()
}

function draw() {
  background(0);

  var vol = volume.value();
  

  AlphysTakesAction.setVolume(vol);
  AsgoreIntro.setVolume(vol);
  HopesAndDreams.setVolume(vol);
  SpiderDance.setVolume(vol);
  MySong.setVolume(vol);
  MySong2.setVolume(vol);
  Megalovania.setVolume(vol);
  Waterfall.setVolume(vol);



  // Get the average (root mean square) amplitude

  let rms = analyzer.getLevel();

  strokeWeight(2)
 
    text('volume:', windowWidth-140, 150);
  text(vol, windowWidth-60, 150);
  ellipse(width - 70, height / 3, 10 + rms * 10, 10 + rms * 10);
  let spectrum = fft.analyze();


  noStroke();
 
   if (MySong.isPlaying())
  fill('DeepSkyBlue')
     if (MySong2.isPlaying())
  fill('coral')
        if (Megalovania.isPlaying())
fill('blue')
 if (Waterfall.isPlaying())
  fill('LightSeaGreen')
   if (AlphysTakesAction.isPlaying())
  fill('Gold')
   if (SpiderDance.isPlaying())
  fill('Magenta')
   if (HopesAndDreams.isPlaying())
  fill('Red')
   if (AsgoreIntro.isPlaying())
  fill('FireBrick')
  if (GuitarVsPiano.isPlaying())
    fill('Coral')
  
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
  endShape();
}
function windowResized() {
  resizeCanvas(windowWidth, 200);
}
