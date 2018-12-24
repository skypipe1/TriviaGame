var score = 0;
var timeleft = 25;
var intervalId;
var number = 26;

// // questions... make every question an object in an array


// buttons
$(document).ready(function () {
    $("#quiz").hide();
    $("#finish").hide();

})

$("#startGame").click(function () {
    $("#quiz").show();
    $("#instruct").hide();
    run();

})

$("#submit").click(function () {
    $("#finish").show();
    $("#quiz").hide();
    stop();
    checkAnswer();
    points();
    $("#points").text("Points: " + score);


})

$("#reset").click(function () {
    $("#quiz").hide();
    $("#instruct").show();
    $("#finish").hide();
    resetGame();
    score = 0;
    $("#points").text(score)
    uncheckAnswer();

})

function resetGame() {
    number = 26;
    score = 0;
    $("#countdowntimer").text(number);
}






// timer
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}



function decrement() {

    number--;

    $("#countdowntimer").text(number);

    if (number === 0) {

        stop();

        checkAnswer();

        points();

        $("#finish").show();

        $("#quiz").hide()



    }
}

function stop() {

    clearInterval(intervalId);
}





var nail = document.getElementsByName("nail");
var car = document.getElementsByName("car");
var video = document.getElementsByName("video");

var correctNail;
var correctCar;
var correctVideo;

function checkAnswer() {
    for (var i = 0; i < nail.length; i++) {
        if (nail[i].checked) {
            correctNail = nail[i].value
        }

    };
    for (var i = 0; i < car.length; i++) {
        if (car[i].checked) {
            correctCar = car[i].value
        }

    };
    for (var i = 0; i < video.length; i++) {
        if (video[i].checked) {
            correctVideo = video[i].value
        }

    }
}

function points() {
    if (correctNail === "correct") {
        score++
    }
    if (correctCar === "correct") {
        score++
    }
    if (correctVideo === "correct") {
        score++
    }
}

function uncheckAnswer() {
    for (var i = 0; i < nail.length; i++) {
        nail[i].checked = false;



    };
    for (var i = 0; i < car.length; i++) {
        car[i].checked = false;



    };
    for (var i = 0; i < video.length; i++) {
        video[i].checked = false;


    }
}



// count down timer



// console.log(downloadTimer)






