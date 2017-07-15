/* Generate a new Q&A */
var correctAnswer;

generateQA();



/*  Functions*/

function generateQA(){
    
    var x = 1 + Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random()*9);
    correctAnswer = x*y;
    
    changeInnerHTML("question", x + "x" + y);
    
    /* Correct Answer box*/
    
    //Generate random number between 1-4 then assign as a box number for correct answer
    var correctPosition = 1 + Math.round(Math.random()*3);
    //place correct answer in the box which is chosen randomly
    changeInnerHTML("box" + correctPosition,correctAnswer)
    
    /* Wrong Answer boxes*/
    
    for(i=1; i<5; i++){
        if(i !== correctPosition){
            //generate a wrong answer
            var wrongAnswer = (1 + Math.round(Math.random()*9))*(1 + Math.round(Math.random()*9));
            changeInnerHTML("box" + i, wrongAnswer);
        }
    }
    
}