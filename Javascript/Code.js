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
          
          changeInnerHTML("startResetButton", "Reset");
          
        //Set score to 0
          
          score = 2; 
          changeInnerHTML("scoreValue", score);
          
        //Show countdown box & Set Remaining Time
          
          show("timeRemaining");
          timeRemaining = 3;
          changeInnerHTML("timeRemainingValue", timeRemaining);
          
        /* Functions */
          
          function startCountdown(){
            action = setInterval(decreaseTime, 1000);
            decreaseTime();
          }
          
          function decreaseTime(){
            timeRemaining--;
            changeInnerHTML("timeRemainingValue", timeRemaining);
                  
            if(timeRemaining == 0){//Game Over
                      stopCountdown();
                  }
              }
          
          function stopCountdown(){//Stop game
              clearInterval(action);
              playing = false; //Change game mode to not playing
              show("gameOver");
              changeInnerHTML("gameOverText", "Game Over");
              changeInnerHTML("lastScore", "Score: " + score);
              changeInnerHTML("startResetButton","Start Game");
              hide("timeRemaining");

          }
          //Create function for display 
          function hide(Id){
              document.getElementById(Id).style.display = "none";
          }
          function show(Id){
              document.getElementById(Id).style.display = "block";
          }
          //Create function for changing innerHTML
          function changeInnerHTML(Id,Content){
              document.getElementById(Id).innerHTML = Content;
          }
         
      }
}