        var start =  new Date().getTime();
            
            function getRandomColor() {
                var color_number = Math.floor((Math.random() * 3) + 1);
                if (color_number <= 1) {
                    color = "blue"
                } else if (color_number <= 2){
                    color = "green"
                } else {
                    color = "red"
                }
                return color
            }
            
            function makeShapeAppear() {
                //var shape_number = Math.floor((Math.random() * 1) );
                
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0%";
                }
                
                
               document.getElementById("shape").style.top = Math.floor((Math.random() * 500) + 1) + "px";
               document.getElementById("shape").style.left = Math.floor((Math.random() * 500) + 1) + "px";  
               document.getElementById("shape").style.backgroundColor = getRandomColor();
               document.getElementById("shape").style.display = "block";
                
               //bunch of stuff here changing the style of the shape
                
               start =  new Date().getTime();
            }
            
            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }
            
            appearAfterDelay(); 
            
            document.getElementById("shape").onclick = function(){
                
               document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start)/1000
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
               appearAfterDelay();
            }
