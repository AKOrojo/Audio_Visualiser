//draw the waveform to the screen
function CircularWavePatternAndParticles() {
	//vis name
	this.name = "circularWavePatternAndParticles";

	//draw the wave form to the screen
	this.draw = function() {
		push();
		noFill();
		stroke(255, 255, 255);
		strokeWeight(2);
		
		translate(width / 2, height / 2);

		var wave = fourier.waveform();
		
		for (var t = -1; t <= 1; t += 2){
		beginShape();
		for (var i = 0; i <= 180; i += 0.5) {
			var p = floor(map(i, 0, 180, 0, wave.length - 1))
			
			var r = map(wave[p], -0.5, 0.5, 150, 500);
			
			var x = r * sin(i) * t;
			var y = r * cos(i);
			
			vertex(x, y);
		}

		endShape();
		}
		pop();

	};
	
	class Particle {
		constructor() {
			this.pos = p5.Vector.random2D().mult(250)
		}
		show() {
			noStroke()
			fill(255)
			elipse(this.pos.x, this.pos.y), 4
		}
	}
}