//draw the waveform to the screen
function CircularWavePattern() {
	//vis name
	this.name = "circularWavePattern";

	//draw the wave form to the screen
	this.draw = function() {
		push();
		noFill();
		stroke(255);
		strokeWeight(4);

		translate(width / 2, height / 2)

		beginShape();
		//calculate the waveform from the fft.
		var wave = fourier.waveform();
		for (var i = 0; i < 360; i++) {
			//for each element of the waveform map it to screen
			//coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, 180) * sin(i);
			var y = map(wave[i], -1, 1, 0, height) * cos(i);

			vertex(x, y);
		}

		endShape();
		pop();
	};
}
