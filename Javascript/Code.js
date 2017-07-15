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
          
        //Hide game over box
          hide("gameOver");
        
        /* Functions */
          
          function startCountdown(){//Start Counter
            action = setInterval(decreaseTime, 1000);
            decreaseTime();
          }
          
          function decreaseTime(){//Stop Counter
            timeRemaining--;
            changeInnerHTML("timeRemainingValue", timeRemaining);
                  
            if(timeRemaining == 0){//Game Over
                      stopCountdown();
                  }
              }
          
          function stopCountdown(){//Stop game
              clearInterval(action);//Stop countdown with this
              
              /* At the same time stopping countdown , do these */
              //Show Game Over board
              show("gameOver");
              changeInnerHTML("gameOverText", "Game Over");
              changeInnerHTML("lastScore", "Score: " + score);
              //Change button to start
              changeInnerHTML("startResetButton","Start Game");
              //Hide Countdown and correct-wrong boxes
              hide("timeRemaining");
              hide("correct");
              hide("wrong");
              //Change game mode to not playing
              playing = false; 
          }
          
          //Create function for display 
          function hide(Id){//Hide Element
              document.getElementById(Id).style.display = "none";
          }
          function show(Id){//Show Element
              document.getElementById(Id).style.display = "block";
          }
          //Create function for changing innerHTML
          function changeInnerHTML(Id,Content){//Change innerHTML
              document.getElementById(Id).innerHTML = Content;
          }
         
      }
}