/* Tell Browser what to do when we click on start/reset button */
var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;
document.getElementById("startResetButton").onclick = function () {

    if (playing == true) { //Check if we playing or not

        location.reload(); //İf we are playing, this button is reset button so reload the page.

    } else { //İf we are not playing this button starts the game

        //Start Countdown 

        startCountdown();

        //Start game
        playing = true;


        //Change button to reset

        changeInnerHTML("startResetButton", "Reset");

        //Set score to 0

        score = 0;
        changeInnerHTML("scoreValue", score);

        //Show countdown box & Set Remaining Time

        show("timeRemaining");
        timeRemaining = 60;
        changeInnerHTML("timeRemainingValue", timeRemaining);

        //Hide game over box
        hide("gameOver");
        //Generate question and answers
        generateQA();


    }
    /* If we click on answer box*/

    for (i = 1; i < 5; i++) {
        document.getElementById("box" + i).onclick = function () {
            //If we are playing
            if (playing == true) {
                //Check if the answer is correct
                if (this.innerHTML == correctAnswer) { //if correct
                    //Answer is correct , Increase score by 1
                    score++;
                    changeInnerHTML("scoreValue", score);

                    //hide wrong box , show correct box
                    hide("wrong");
                    show("correct");
                    setTimeout(function () {
                        hide("correct");
                    }, 1000);
                    //Generate new question
                    generateQA();
                } else { //if wrong
                    show("wrong");
                    hide("correct");
                    setTimeout(function () {
                        hide("wrong");
                    }, 1000);
                }

            }
        }

    }

}
/* Functions */

function startCountdown() { //Start Counter
    action = setInterval(decreaseTime, 1000);
    decreaseTime();
}

function decreaseTime() { //Stop Counter
    timeRemaining--;
    changeInnerHTML("timeRemainingValue", timeRemaining);

    if (timeRemaining == 0) { //Game Over
        stopCountdown();
    }
}

function stopCountdown() { //Stop game
    clearInterval(action); //Stop countdown with this

    /* At the same time stopping countdown , do these */
    //Show Game Over board
    show("gameOver");
    changeInnerHTML("gameOverText", "Game Over");
    changeInnerHTML("lastScore", "Score: " + score);
    //Change button to start
    changeInnerHTML("startResetButton", "Start Game");
    //Hide Countdown and correct-wrong boxes
    hide("timeRemaining");
    hide("correct");
    hide("wrong");
    //Change game mode to not playing
    playing = false;
}
//Create function for display 
function hide(Id) { //Hide Element
    document.getElementById(Id).style.display = "none";
}

function show(Id) { //Show Element
    document.getElementById(Id).style.display = "block";
}
//Create function for changing innerHTML
function changeInnerHTML(Id, Content) { //Change innerHTML
    document.getElementById(Id).innerHTML = Content;
}
//Generate Question and answers
function generateQA() {

    var x = 1 + Math.round(Math.random() * 9);
    var y = 1 + Math.round(Math.random() * 9);
    correctAnswer = x * y;

    changeInnerHTML("question", x + "x" + y);

    /* Correct Answer box*/

    //Generate random number between 1-4 then assign as a box number for correct answer
    var correctPosition = 1 + Math.round(Math.random() * 3);
    //place correct answer in the box which is chosen randomly
    changeInnerHTML("box" + correctPosition, correctAnswer)

    /* Wrong Answer boxes*/

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var answers = [correctAnswer];
            //generate a wrong answer
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(Math.random() * 9)) * (1 + Math.round(Math.random() * 9));
            } while (answers.indexOf(wrongAnswer) > -1) {
                changeInnerHTML("box" + i, wrongAnswer);
                answers.push(wrongAnswer);
            }

        }
    }

}
