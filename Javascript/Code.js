/* Tell Browser what to do when we click on start/reset button */
var playing = false;
var score;
document.getElementById("start-reset").onclick = function(){
    
   if(playing == true){ //Check if we playing or not
      
       location.reload(); //İf we are playing, this button is reset button so reload the page.
       
      }else{ //İf we are not playing this button starts the game
        
        //Set score to 0
          score = 0; 
          document.getElementById("scoreValue").innerHTML = score;
          
        //Show countdown box
          
          document.getElementById("timeRemaining").style.display = "block;"


          
      }
}