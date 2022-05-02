//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

var amp
var volHistory = []

function preload() {
	sound = loadSound('assets/stomper_reggae_bit.mp3');
}

function setup() {
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 controls = new ControlsAndInput();
	
	 angleMode(DEGREES);
	 //instantiate the fft object
	 fourier = new p5.FFT();


	 amp = new p5.Amplitude()
	 

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());
	 vis.add(new TriangleSpectrum())
	 vis.add(new CircularWavePattern());
	 vis.add(new OpticalWavePattern());
	 vis.add(new Soundbar())
	 vis.add(new Lines());
	
	 
	 
}

function draw() {
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();

	//populate volHistory
	if(sound.isPlaying()){
        var vol = amp.getLevel()
        volHistory.push(vol)
	 }
}

function mouseClicked() {
	controls.mousePressed();
}

function keyPressed() {
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	if (vis.selectedVisual.hasOwnProperty('onResize')) {
		vis.selectedVisual.onResize();
	}
}
