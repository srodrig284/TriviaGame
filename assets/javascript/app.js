/**
 * Trivia Game
 * Sandra Rodriguez
 * 2017 UCF Coding Bootcamp
 */


$(document).ready(function(){
// Array of all the question and answer objects
    var triviaQuestions =  [
        {
            question: "Which actor plays the title role in the feature film 'Deadpool'?",
            answers: ["T.J. Miller", "Ed Skrein", "Ryan Reynolds", "Matthew McConaughey"],
            correct: "Ryan Reynolds",
            blurb: "Ryan Reynolds was allowed to keep his costume after filming was completed.",
            image: "tank-t-34-152-211353.png"
        }, {
            question: "When did the character Deadpool first appear in Marvel Comics?",
            answers: ["1988", "1990", "1992", "2016"],
            correct: "1990",
            blurb: "The character Deadpool first appeared in Marvel Comics' 'New Mutants No. 98' in 1990.",
            image: "tank-t-34-152-211353.png"
        }, {
            question: "In the movie 'Deadpool', what is the title character's real name?",
            answers: ["Wade Watson", "Will Wilson", "Wade Wilson", "Will Watson"],
            correct: "Wade Wilson",
            blurb: "The real name of the title character is Wade Wilson.",
            image: "tank-t-34-152-211353.png"
        }, {
            question: "In the movie 'Deadpool', the title character crosses the barrier between character and audience.  What is the term for this imagined barrier?",
            answers: ["the fourth wall", "the audience barrier", "the character wall", "the character barrier"],
            correct: "the fourth wall",
            blurb: "The imagined barrier that the character Deadpool frequently breaks by engaging with the audience is called 'the fourth wall'.",
            image: "tank-t-34-152-211353.png"
        }, {
            question: "Which character is the primary villain in the movie 'Deadpool'?",
            answers: ["Stryker", "Magneto", "Logan", "Ajax"],
            correct: "Ajax",
            blurb: "Actor Ed Skrien plays Ajax in the 2016 film.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which 'Deadpool' character says, 'Okay guys, I only have 12 bullets, so you're all going to have to share?",
            answers: ["Deadpool", "Ajax", " Colossus", "Alex"],
            correct: "Deadpool",
            blurb:  "The title character Deadpool says this when confronting a large group of opponents.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "What does Deadpool call Professor Xavier's estate?",
            answers: ["Mutant Mansion", "The Exceptional Estate", "Mutant Estate", "Neverland Mansion"],
            correct: "Neverland Mansion",
            blurb: "In the marvel universe, the school located on the estate is named Professor Xavier's School for Gifted Youngsters.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "What is the name of the blind 'Deadpool' character who is Wade Wilson's roommate?",
            answers: ["Blind Al", "Blind Jo", "Blind Pat", "Blind Dee"],
            correct: "Blind Al",
            blurb: "Blind Al is Wade Wilson's roommate",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "In the movie 'Deadpool' what age does the title character say he wants to reach before dying?",
            answers: ["92", "102", "82", "94"],
            correct: "102",
            blurb: "The title character wants to be 102 before he dies.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "What is the name of the 'Deadpool' character who recruits Wade to the Weapon X program?",
            answers: ["Warlord", "Angel Dust", "He is not mentioned by name.", "Weasel"],
            correct: "He is not mentioned by name.",
            blurb: "The character, played by actor Jed Rees, is listed as Recruiter in the movie credits.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "In the movie 'Deadpool', which  character does Wade Wilson become friends with during the Weapon X experiments?",
            answers: ["Francis", "David", "Buck", "John"],
            correct: "David",
            blurb: "Wade Wilson befrends David Cunningham while undergoing the Weapon X experiments.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Comic-book creator Stan Lee makes a cameo appearance as which character in the film 'Deadpool'?",
            answers: ["Strip club DJ", "Scientist", "Detective", "Bar Tender"],
            correct: "Strip club DJ",
            blurb: "Comic-book creater and former Marvel publisher Stan Lee made a cameo as a strip club DJ.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which 'Deadpool' character tells Wade Wilson, 'One thing that never survives this place is a sense of humor'?",
            answers: ["Ajax", "The Recruiter", "Warlord", "Vanessa"],
            correct: "Ajax",
            blurb: "Before beginning Weapon X experiments, Ajax says this to Wade Wilson.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "What is Deadpool's primary super power?",
            answers: ["Super Speed", "Super Strength", "Super Healing", "Super Fast"],
            correct: "Super Healing",
            blurb: "The character Deadpool has superhealing abilities, including regenerating body parts. In Marvel lore, Deadpool's superhealing powers come from Wolverine.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "What nickname has the character Deadpool been given?",
            answers: ["The merc with a mouth", "Big mouth", "Loud mouth", "Smart mouth"],
            correct: "The merc with a mouth",
            blurb: "As a result of his sarcasm and constant talking, the character Deadpool is nicknamed 'The merc with a mouth'.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which character in the movie 'Deadpool' is Wade Wilson's love interest?",
            answers: ["Natasha Romanoff", "Meghan Orlovsky", "Vanessa Carlysle", "Lauren Kelly"],
            correct: "Vanessa Carlysle",
            blurb: "The character Vanessa Carlysle, was played by actress Morena Baccarin.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which 'Deadpool' character says, 'Love is blind, Wade?'",
            answers: ["Weasel", "Blind Al", "Vanessa", "Ajax"],
            correct: "Blind Al",
            blurb: "Blind Al says this while discussing Wade's disfiguring injuries from the Weapon X experiments.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which comic artist and writer co-created the character Deadpool with Fabian Nicieza?",
            answers: ["Rob Liefeld", "Todd McFarlane", "Marc Silvestri", "Will Ferrell"],
            correct: "Rob Liefeld",
            blurb: "Rob Liefeld is the comic artist.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which country banned the movie 'Deadpool'?",
            answers: ["Germany", "Brazil", "China", "India"],
            correct: "China",
            blurb: "Due to violence, profanity and sexual content, the Chinese government refused to allow the film to be shown in the country",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which movie studio released the film 'Deadpool'?",
            answers: ["Columbia Pictures", "20th Century Fox", "Paramount Pictures", "Disney Pixar"],
            correct: "20th Century Fox",
            blurb: "2oth Century Fox released the film 'Deadpool'.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "What is the name of the bar where the 'Deadpool' character Wade Wilson meets Weasel?",
            answers: ["Sister Margaret's Home for Wayward Girls", "Danger Room", "Prairie City Saloon", "Dead Zone"],
            correct: "Sister Margaret's Home for Wayward Girls",
            blurb: "Wade Wilson meets the character Weasel at a bar called Sister Margaret's Home for Wayward Girls",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which 'Deadpool' villain is really named Francis?",
            answers: ["Warlord", "Ajax", "Angel Dust", "Weasel"],
            correct: "Ajax",
            blurb: "Ajax is really named Francis.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which aircraft do Colossus and Negasonic Teenage Warhead fly in the movie 'Deadpool'?",
            answers: ["Tomcat", "Raptor", "Blackbird", "Deadbird"],
            correct: "Blackbird",
            blurb: "Golossus and Negasonic Teenage Warhead fly an SR-71 Blackbird in the movie.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "What is the taxi cab driver's name in the movie 'Deadpool'?",
            answers: ["David", "Dean", "Dopinder", "Jack"],
            correct: "Dopinder",
            blurb: "The taxi cab driver's name is Dopinder. Ryan Reynolds says the character was named after a school friend who died from a lightning strike.",
            image: 'tank-t-34-152-211353.png'
        }, {
            question: "Which 'Deadpool' character does actor T.J. Miller play in the film?",
            answers: ["Jeremy the pizza guy", "Weasel", "Buck", "Guy in strip club"],
            correct: "Weasel",
            blurb: "Weasel is an arms dealer and friend of Wade Wilson.",
            image: 'tank-t-34-152-211353.png'
        }];


    //var Audio  = document.createElement("AUDIO");
    //Audio.setAttribute("src", "assets/audio/multimedia_retro_game_gun_shot.mp3");

    var questionsArray = [];
    var arrayIndex = 0;
    var intervalID;

	/* Beginning of the game object */
	var triviaGame = {
		timer: 150,
        timerMax: 135,
		numberOfQuestions: 5,
		currentquestion: 1,
        correct_answers: 0,
        current_corect_answer:"",


		startNewGame: function(){
			questionsArray = [];  // reset
			this.correct_answers = 0;
			this.currentquestion = 1;

			// Randomize the array and pick 10 questions
			triviaGame.getRandomArray();

            // set initial values
            // remove the start button from statusBar
            $("#start-btn").remove();

            // set up progress bar
            $("<div>")
                .addClass('progress')
                .append($("<div>")
                            .addClass('progress-bar')
                            .attr('id', 'progress-style'))
                .appendTo("#statusBar");

            //***********************************//
            //* Begin setting up the game area  *//
            //***********************************//
            // make background black for game area
            $(".game-area")
                .addClass('game-back');

            $("<p>")
                .addClass('status-style')
                .html("Correct: " + this.correct_answers)
                .appendTo(".score");

            $("<p>")
                .addClass('status-style')
                .html("Question:  " + this.currentquestion + " of " + this.numberOfQuestions)
                .appendTo(".questions-left");
                
            // add question mark image
            $("#qm_image")
                .attr("src", "assets/images/question.gif")
                .addClass('col-lg-offset-5');

            $("<p>")
                .addClass('question-text')
                .appendTo('.question-Area');
            $("<p>")
                .addClass('blurb-text')
                .appendTo('.question-Area');

            // add next/restart button
            $("<button>")
                .attr('type', 'button')
                .addClass('btn btn-primary status-style letter-button-color')
                .hide()
                .appendTo('.game-control');

            // add buttons for answer choices
            triviaGame.buildButtons();
            // display the question
            triviaGame.displayQuestion();

            // give them a 5 seconds to read question, then
            // display choices and then start timer
            setTimeout(function (){
                triviaGame.displayChoices();
                triviaGame.startTimer();
            }, 5 * 1000);
		},

        restartGame: function(){
            questionsArray = [];  // reset
            triviaGame.correct_answers = 0;
            triviaGame.currentquestion = 1;

            // Randomize the array and pick 10 questions
            triviaGame.getRandomArray();

            // remove the start button
            $("#start-btn").remove();

            //***********************************//
            //* Begin setting up the game area  *//
            //***********************************//
            $(".questions-left .status-style")
                .html("Question:  " + triviaGame.currentquestion + " of " + triviaGame.numberOfQuestions);

            $(".score .status-style")
                .html("Correct: " + triviaGame.correct_answers);

            // show question mark image
            $("#qm_image").show();
            // hide game image
            $("#game_images").hide();
            // hide blurb
            $(".blurb-text").hide();
            // hide restart button
            $('.game-control .btn').hide(); // hide this button

            $(".choices-Area").empty(); // clear the answer choices area

            // add buttons for answer choices
            triviaGame.buildButtons();
            // display the question
            triviaGame.displayQuestion();

            // give them a 5 seconds to read question, then
            // display choices and then start timer
            setTimeout(function (){
                triviaGame.displayChoices();
                triviaGame.startTimer();
            }, 5 * 1000);
        },

		getRandomArray: function(){
			// Randomize the order of questions array
            var randomizedArray = triviaQuestions.sort( function( a, b ) { return 0.5 - Math.random() } );
			// select the first 10 questions
			var tempArray = [];
			for(i = 0; i < 10; i++)
			{
				tempArray.push(randomizedArray[i]);
			}

            this.randomizeChoices(tempArray);
			questionsArray = tempArray;
		},

        randomizeChoices: function(sortedArray){
            for (i = 0; i < sortedArray.length; i++){
                sortedArray[i].answers.sort( function( a, b){return 0.5 - Math.random() } );
            }
        },


        displayQuestion: function(){
            $(".question-text").text(questionsArray[arrayIndex].question).show();
        },

        displayChoices: function(){
            /*$.each(characters, function (k, value){*/
            var choices = questionsArray[arrayIndex].answers;

            $.each(choices, function(index, value) {
                $("#qbuttons").find('#' + index)
                               .text(value)
                               .one('click', triviaGame.checkAnswer);
            });
        },

        buildButtons: function(){
           $("<div>")
                .attr('id', 'qbuttons')
                .addClass('btn-group-vertical btn-group-lg')
                .appendTo(".choices-Area");

            // 4 buttons
            for (i = 0; i < 4; i++)
            {
                var newButton = $("<button>")
                            .attr('type', 'button')
                            .attr('id', i)
                            .addClass('btn btn-primary btn-default letter-button-color ');

                $("<div>")
                    .addClass('btn-group')
                    .append(newButton)
                    .appendTo("#qbuttons");
            }
        },

        checkAnswer: function(){
            triviaGame.stopTimer(); // Stop the timer

            if(this.textContent === questionsArray[arrayIndex].correct){
                // display the clapping image
                $("#qm_image").hide();
                $("#game_images")
                    .attr("src", "assets/images/clap.gif")
                    .show();
                // display the blurb about the answer
                $(".question-text").hide();
                $(".blurb-text")
                    .text(questionsArray[arrayIndex].blurb)
                    .show();
                triviaGame.correct_answers++;
                $(".score .status-style")
                    .html("Correct: " + triviaGame.correct_answers);
            }
            else{
                // display the splat image
                $("#qm_image").hide(); // hide question mark
                $("#game_images")
                    .attr("src", "assets/images/splat.gif")
                    .show();
                // display the blurb about the answer
                $(".question-text").hide();
                $(".blurb-text").html("WRONG ANSWER!  Correct answer is: <br> " +  questionsArray[arrayIndex].correct).show();
            }

            if(triviaGame.currentquestion === triviaGame.numberOfQuestions)  // we are done
            {
                setTimeout(function(){
                    triviaGame.endGame();
                },3 * 1000);
            }
            else
            { // set up for next question
                triviaGame.currentquestion++; // setup for next question
                arrayIndex++; // next question in array
                $('.game-control .btn')
                    .show()
                    .text("Next Question")
                    .one('click', triviaGame.setupNextQuestion);
            }
        },

        endGame: function(){
            $("#game_images")
                    .attr("src", "assets/images/gameover.gif");

            $(".blurb-text")
                .text("GAME OVER! You got " + triviaGame.correct_answers + " correct answer.");
            $(".choices-Area").empty(); // clear the answer choices area

            $('.game-control .btn')
                    .show()
                    .text("New Game")
                    .one('click', triviaGame.restartGame);
        },

        setupNextQuestion: function(){
            $('.game-control .btn').hide(); // hide this button
            $("#game_images").hide();  // hide this image
            $("#qm_image").show();  // show question mark image
            $(".blurb-text").hide();
            $(".choices-Area").empty();
            // add buttons for answer choices
            $(".questions-left .status-style")
                .html("Question:  " + triviaGame.currentquestion + " of " + triviaGame.numberOfQuestions);
            triviaGame.buildButtons();
            triviaGame.displayQuestion();  // display next question
            $(".question-text").show();
            // give them a 5 seconds to read question, then
            // display choices and then start timer
            setTimeout(function (){
                triviaGame.displayChoices();
                triviaGame.startTimer();
            }, 5 * 1000);
        },

        startTimer: function(){
            triviaGame.timer = 150;
            intervalID = setInterval(triviaGame.decrement,100);
        },

        decrement: function(){
            triviaGame.timer--;

            var timerPercent = (triviaGame.timer/triviaGame.timerMax) * 100;

            //Update Progress Bar
            $('#progress-style').width(timerPercent + '%');

            if(triviaGame.timer === 0){
                triviaGame.stopTimer();
                $("#qm_image").hide(); // hide question mark
                $("#game_images")
                    .attr("src", "assets/images/timeout.gif")
                    .show();
                // display the blurb about the answer
                $(".question-text").hide();
                $(".blurb-text").text("TIMED OUT").show();

                if(triviaGame.currentquestion === triviaGame.numberOfQuestions)  // we are done
                {
                    setTimeout(function(){
                        triviaGame.endGame();
                    },3 * 1000);
                }
                else
                { // set up for next question
                    triviaGame.currentquestion++; // setup for next question
                    arrayIndex++; // next question in array
                    $('.game-control .btn')
                        .show()
                        .text("Next Question")
                        .one('click', triviaGame.setupNextQuestion);
                }
            }
        },

        stopTimer: function () {
            clearInterval(intervalID);
        },

	} /* END gameObject */


    $('#start-btn').on('click', function(){
        triviaGame.startNewGame();
    })


})
