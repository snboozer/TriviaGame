var correct = 0;
var wrong = 0;
var answers = [];
var unanswered = 0;
var questionNumber = 0;
var time = 3;
var timer

var quiz = [
  {
    question: "Who's the master",
    answers: {
      choiceA: "Sho Nuff",
      choiceB: "Me and you, your mommma and your cousins too",
      choiceC: "The five members of the band Dylan, Dylan, Dylan, Dylan and Dylan",
    }
  },

  {
    question: "What does Bruce Leroy leave behind after defending Laura",
    answer: {
      choiceA: "His glass slipper",
      choiceB: "His marbles",
      choiceC: "His dragon pendant",
    }
  },

  {
    question: "What kind of factory does Bruce Leroy's sensei take him to?",
    answers: {
      choiceA: "Cheesecake Factory",
      choiceB: "Fortune cookie factory",
      choiceC: "Spaghetti factory",
    }
  },

  {
    question: "You are a..",
    answers: {
      choiceA: "string bean, Rick James looking fool",
      choiceB: "the master",
      choiceC: "here so I don't get fined",
    }
  },

  {
    question: "Sho'Nuff is known as",
    answers: {
      choiceA: "The Shogun of Harlem",
      choiceB: "The best who had ever lived",
      choiceC: "TIP",
    }
  },




]





function countDown() {
  if (time > 0) {
    time--
    $("#clock").text(time);
  }
  else if (time === 0) {
    $("#clock").addClass("hidden");
    $("#sumbit").removeClass("hidden")
  }
}

$("#start-btn").on("click", function () {
  $("#start").addClass("hidden");
  $("#quiz").removeClass("hidden");
  timer = setInterval(countDown, 1000)
})

fun
function loadQuestion() {


  var targetDiv = document.getElementById("quiz");
  for (var i = 0; i < quiz.length; i++); {
    var quiz = document.createElement("div");
    quiz.textContent = quiz[i];
    targetDiv.appendChild(quiz);

    $()

  }




  questionNumber++

}