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
          
          score = 2; 
          document.getElementById("scoreValue").innerHTML = score;
          
        //Show countdown box & Set Remaining Time
          
          show("timeRemaining");
          timeRemaining = 3;
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
          
          function stopCountdown(){//Stop game
              clearInterval(action);
              playing = false; //Change game mode to not playing
              show("gameOver");
              document.getElementById("gameOverText").innerHTML = "Game over";
              document.getElementById("lastScore").innerHTML = "Score: " + score;
              document.getElementById("startResetButton").innerHTML = "Start Game";
              hide("timeRemaining");

          }
          //Create function for display 
          function hide(Id){
              document.getElementById(Id).style.display = "none";
          }
          function show(Id){
              document.getElementById(Id).style.display = "block";
          }
         
      }
}