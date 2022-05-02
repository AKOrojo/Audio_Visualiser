function Soundbar() {
	this.name = "soundbar";

	this.draw = function() {
		push();
		 //iterate through volHistory and draw
		 fill(0, 109, 203)
		 var barWidth = 2;
		 var offsetWidth = 5;
		 var offset = 5;
		   for(var i = 0; i < volHistory.length; i++){
			   var barHeight = map(volHistory[i], 0, 1, 1, height)
			   rect(i + offset, (height/2.0) - (barHeight/2.0), barWidth, barHeight);
			   offset += offsetWidth;
		   }
	   
		   //moves wavelength 1 index at a time and account for bar width and offset width
		   if(volHistory.length * (offsetWidth + barWidth) > width - 10){
			   volHistory.splice(0, 1)
		   }
	   
		   //draw vertical line
		   stroke(250, 30, 100)
		   line(volHistory.length + offset, 0, volHistory.length + offset, height)
	   
	
		pop();
	};
}
