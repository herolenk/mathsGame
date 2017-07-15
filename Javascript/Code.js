/* Tell Browser what to do when we click on start/reset button */
var playing = false;
var score;
var action;
var timeRemaining;
document.getElementById("startResetButton").onclick = function(){
    
   if(playing == true){ //Check if we playing or not
      
       location.reload(); //İf we are playing, this button is reset button so reload the page.
       
      }else{ //İf we are not playing this button starts the game
        
        //Start Countdown 
          
          startCountdown();
          
        //Start game
          playing = true;
          
          
        //Change button to reset
          
          document.getElementById("startResetButton").innerHTML = "Reset";         
          
        //Set score to 0
          
          score = 0; 
          document.getElementById("scoreValue").innerHTML = score;
          
        //Show countdown box & Set Remaining Time
          
          document.getElementById("timeRemaining").style.display = "block";
          timeRemaining = 60;
          document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
          
          
        /* Functions */
          
          function startCountdown(){
            action = setInterval(decreaseTime, 1000);
            decreaseTime();
          }
          
          function decreaseTime(){
            timeRemaining--;
            document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
                  
            if(timeRemaining == 0){//Game Over
                      stopCountdown();
                  }
              }
          
          function stopCountdown(){
              clearInterval(action);
              document.getElementById("gameOver").style.display = "block";
          }
          
      }
}