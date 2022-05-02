//draw the waveform to the screen
function OpticalWavePattern() {
	//vis name
	this.name = "opticalWavepattern";

	//draw the wave form to the screen
	this.draw = function() {
		push();
		fill(0, 255, 0);
		noStroke();

		
		//calculate the waveform from the fft.
		var wave = fourier.waveform();
		// Loop through waveform array to draw a circle per time segment
		for(let i = 0; i < wave.length; i++){
			// Map x location using index number of waveform array
			let x = map(i, 0, wave.length, 0, width);
			// May y location using the amplitude value for the specific time segment
			let y = map(wave[i], -1, 1, height, 0);
			
			circle(x, y, 3);
		  }
		
		fill(255, 0, 0)
		for(let i = 0; i < wave.length; i++){
			// Map x location using index number of waveform array
			let x = map(i, 0, wave.length, 0, width);
			// May y location using the amplitude value for the specific time segment
			let y = map(wave[i], -0.5, 0.5, height, 0);
			
			circle(x, y, 5);
		  }

		  fill(0, 0, 255)
		  for(let i = 0; i < wave.length; i++){
			  // Map x location using index number of waveform array
			  let x = map(i, 0, wave.length, 0, width);
			  // May y location using the amplitude value for the specific time segment
			  let y = map(wave[i], -0.3, 0.3, height, 0);
			  
			  circle(x, y, 5);
			}
		pop();
	};
}