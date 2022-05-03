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

		var p = new Particle()
		particles.push(p)

		for (var i = particles.length - 1; i >= 0; i--) {
		if (!particles[i].edges()){
			particles[i].update(ampEnergy > 200)
			particles[i].show()
		} else {
			particles.splice(1, 1)
		}
		}
		pop();
	};

	class Particle {
		constructor() {
			this.pos = p5.Vector.random2D().mult(330)
			this.vol = createVector(0, 0)
			this.acc = this.pos.copy().mult(random(0.0001, 0.00001))
	
			this.w = random(3, 5)
			this.colour = [random(200,255), random(200,255), random(200,255) ]
		}
		update(cond){
			this.vol.add(this.acc)
			this.pos.add(this.vol)
			if (cond){
			this.pos.add(this.vol)
			this.pos.add(this.vol)
			this.pos.add(this.vol)	
			}
		}
		edges(){
			if (this.pos.x < -width || this.pos.x > width || 
			this.pos.y < -height || this.pos.y > height) {
				return true
			} else {
				return false
			}
		}
		show() {
			noStroke()
			fill(this.colour)
			ellipse(this.pos.x, this.pos.y, this.w)
		}
	}
}