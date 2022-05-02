function Lines() 
{
	//vis name
	this.name = "lines";

    var output=[];
    var startX;
    var startY;
    var endY;
    var spectrumWidth; 
    var speed=0.7;
    startX= width/5
	endY=height/5
	startY=height-endY
	spectrumWidth=(width/5)*3

    function addWave()
    {
    //output.push([{x: startX, y:startY},{x:startX+spectrumWidth,y:startY}])

    var w=fourier.waveform();
    var output_wave=[];
    var smallScale = 3;
    var bigScale=40;

    for(var i=0;i<w.length;i++)
        {
            if(i%20==0)
                {
                    var x=map(i,0,1024,startX,startX+spectrumWidth);
                    if(i<1024*0.25 || i>1024*0.75)
                    {
                        var y=map(w[i],-1,1,-smallScale,smallScale)
                        output_wave.push
                        ({
                            x:x,
                            y:startY+y
                        })
                    }
                    else
                    {
                     var y=map(w[i],-1,1,-bigScale,bigScale)
                     output_wave.push
                     ({
                        x:x,
                        y:startY+y
                     }) 
                    }
                }        
         }
         output.push(output_wave);  
    }


    this.draw=function()
    {
        push();
        background(0);
        //let spectrum = fourier.analyze();
        stroke(255);
        strokeWeight(2);
        if(frameCount%30==0)
        {
            addWave();
        }

        for(var i=0; i< output.length; i++)
        {
            var o = output[i]
            beginShape()
            for(var j=0; j<o.length;j++)
            {
                o[j].y -= speed;
                vertex(o[j].x,o[j].y)
            }
            endShape()
            if(o[0].y<endY)
            {
                output.splice(i,1)
            }
        }
        pop();

    }

}


