function Spectrum() {
	this.name = "spectrum";

	this.draw = function() {
		push();
		var spectrum = fourier.analyze();
		noStroke();

		fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, 255);
            fill(255 - x, x, 0);
		    var y = map(i, 0, spectrum.length, 0, width);
            var w = width - map(spectrum[i], 0, 255, width, 0);
            rect(0, y, w, height / spectrum.length);
		}
	
		pop();
	};
}
