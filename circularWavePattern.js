//draw the waveform to the screen
function CircularWavePattern() {
	//vis name
	this.name = "circularWavePattern";

	//draw the wave form to the screen
	this.draw = function() {
		push();
		noFill();
		stroke(255, 0, 0);
		strokeWeight(3);
		
		translate(width / 2, height / 2);
		beginShape();
		for (var i = 0; i < 360; i++) {
			var r = map(volHistory[i], 0, 1, 100, 800);
			var x = r * cos(i);
			var y = r * sin(i);
			vertex(x, y);
		}

		endShape();

		if (volHistory.length > 360) {
			volHistory.splice(0, 1);
		}
		pop();
	};
}