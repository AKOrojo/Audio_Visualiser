//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

var amp

var ampEnergy

var volHistory = []

var particles = []

var smoothing = 0.8; // play with this, between 0 and .99
var binCount = 1024; // size of resulting FFT array. Must be a power of 2 between 16 an 1024
var particless =  new Array(binCount);


function preload() {
	sound = loadSound('assets/stomper_reggae_bit.mp3');
}

function setup() {
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 controls = new ControlsAndInput();
	 
	angleMode(DEGREES)
	 //instantiate the fft object
	 fourier = new p5.FFT();


	 amp = new p5.Amplitude()

	 fourier.analyze()
	 ampEnergy = fourier.getEnergy(20, 400)

	
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
	 vis.add(new CircularWavePatternAndParticles())

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