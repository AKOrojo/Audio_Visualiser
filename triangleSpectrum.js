//draw the waveform to the screen
function TriangleSpectrum() {
	//vis name
	this.name = "triangleSpectrum";

	//draw the wave form to the screen
	this.draw = function() {
		push();
		background(52, 30);
		let spectrum = fourier.analyze();
  		noStroke();
  		fill(230, 168, 69);
  		triangle(0, 0, width, height, 0, height);
  		for (let i = 0; i< spectrum.length; i++){
    		let x = map(i, 0, spectrum.length, 0, width);
 			let h = -height + map(spectrum[i], 0, 255, height, 0);
    		fill(255, map(x, 0, width, 0, 255), 255, 100);
    		rect(x, height, width / spectrum.length, h, 240);
		}
		pop();
	};
	
};
