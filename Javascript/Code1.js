/* Generate a new Q&A */
var correctAnswer;

generateQA();



/*  Functions*/

function generateQA(){
    var x = 1 + Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random()*9);
    correctAnswer = x*y;
    
    changeInnerHTML("question", x + "x" + y);
    
    var correctPosition = 1 + Math.round(Math.random()*3);
    
    changeInnerHTML("box" + correctPosition,correctAnswer)
}