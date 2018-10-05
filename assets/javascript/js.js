"The companies HP, Mirosoft and Apple were all started in what?", answerOne:"a basement", answerTwo:"a dorm room", answerThree:"a pub", correctAnswer:"a garage"},
{question:"In what year was the iPhone first released?", answerOne:"2004", answerTwo:"2005", answerThree:"2006", correctAnswer:"2007"},
{question:"Who is credited with inventing the first mechanicial computer?", answerOne:"Leonardo DeVinci", answerTwo:"Ada Lovelace", answerThree:"Benjamin Franklin", correctAnswer:"Charles Babbage"},
{question:"One kilobyte is equal to how many bytes?", answerOne:"1000", answerTwo:"100", answerThree:"256", correctAnswer:"1024"},
{question:"What is the name given to an ancient analog computer that was discovered by divers off a Greek island in 1900?", answerOne:"The Necronomicon", answerTwo:"The Doohicky", answerThree:"The Kalculator", correctAnswer:"The Antikythera mechanism"}
];

var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var timeLeft = 30;

//changes display counter
function increment() {
	timeLeft--;
	$('#timeLeftStatement').html('<p>Time Remaining: ' + timeLeft + '</p>');
	if (timeLeft==0) {
            $('#submitButton').click();
        };
};

//waits for page to load, then loads start button
$(document).ready(function() {
	$("#startButton").click(function(){
    	$("#startButton").fadeOut(1000);
    	$("#main").append('<p id=timeLeftStatement>Time Remaining:' + timeLeft + '</p>');
    	for (var i = 0; i < questionAnswerList.length; i++) {
    		$('#main').append('<p class=questionClass>' + questionAnswerList[i].question +'</p>');
    		$('#main').append('<form action="assets/javascript/javascript.js" id="form' +i+ '"</form>');
    		$('#form'+i+'').append('<input type="radio" name="answer">' + questionAnswerList[i].answerOne + '</input><br><input type="radio" name="answer" value='+i+'>' +questionAnswerList[i].answerTwo + '</input><br><input type="radio" name="answer">' +questionAnswerList[i].answerThree+ '</input><br><input type="radio" name="answer">' +questionAnswerList[i].correctAnswer+ '</input>');
    	};
    	$("#main").append('<input id="submitButton" type="submit" value="Submit">');
    	$('#submitButton').click(function() {
    		$('#submitButton').fadeOut(1000);
    		$("#timeLeftStatement").fadeOut(1000);
    		$(".questionClass").fadeOut(1000);
            console.log($("input:radio:checked")[0]);
    		for (var i = 0; i < questionAnswerList.length; i++) {
    			$('#form' +i).fadeOut(1000);

                console.log($('#form' +i).checked);
                // for (var i = 0; i < questionAnswerList.length; i++) {
                //     if ($('#form'+i+'.'.ischecked==true) {
                //     correctAnswer++;
                // }
                
                
    			// var x = document.forms["form"+i+""]["answer"].value;
    			// if (x==questionAnswerList[i].correctAnswer) {
    			// correctAnswers++;
    			// } else if (x==""){
    			// 	unAnswered++;
    			// } else {
    			// 	incorrectAnswers++;	
    			// };
    		};

    		$("#main").append('<h1>All Done!</h1><br>');
    		$("#main").append('<p>Correct Answers: ' +correctAnswers+ '</p>');
    		$("#main").append('<p>Incorrect Answers: ' +incorrectAnswers+ '</p>');
    		$('#main').append('<p>Unanswered: ' +unAnswered+ '</p>');

    	});

    	counter = setInterval(increment, 1000);
    	
	});
});
