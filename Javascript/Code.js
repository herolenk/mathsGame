/* Tell Browser what to do when we click on start/reset button */
var playing = false;
document.getElementById("start-reset").onclick = function(){
   if(playing){
      
       location.reload();
       
      }else{
           
          score-value == 0;
          document.getElementById("timeRemainig").style.display = "block";
          document.getElementById("start-rest").innerHTML = "Reset";
 
        
          
          
      }
}