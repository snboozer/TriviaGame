var correct = 0;
var wrong = 0;
var answers = [];
var unanswered = 0;
var questionNumber = 0;
var time = 30;
var timer
var question = document.getElementById("question");
// var choiceA1 = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");








function countDown() {
  if (time > 0) {
    time--
    $("#clock").text(time);
  }
  else if (time === 0) {
    $("#clock").addClass("hidden");
    $("#sumbit").removeClass("hidden");
    $("#quiz").addClass("hidden");
    $("#score").removeClass("hidden");
    $("#score").html("<p> Correct:" + correct + "</p>" + "<p> Wrong:" + wrong + "</p>")

  }
}

$("#start-btn").on("click", function () {
  $("#start").addClass("hidden");
  $("#quiz").removeClass("hidden");
  timer = setInterval(countDown, 1000)
})


var answerPicked=false
var answerPicked2=false
var answerPicked3=false

document.getElementById("answerOne").addEventListener("click", myFunction);

function myFunction() {
  if (answerPicked===false){
    answerPicked = true
    document.getElementById("answerOne").innerHTML = "Correct!";
    correct = correct +1
  console.log(this)
}}

document.getElementById("answerTwo").addEventListener("click", myFunction2);

function myFunction2() {
  if (answerPicked===false){
    answerPicked = true
  document.getElementById("answerTwo").innerHTML = "Wrong!";
  wrong = wrong +1
}}

document.getElementById("answerThree").addEventListener("click", myFunction3);
function myFunction3() {
  if (answerPicked===false){
    answerPicked = true
  document.getElementById("answerThree").innerHTML = "Wrong!";
  wrong = wrong +1
}}





document.getElementById("answerFour").addEventListener("click", myFunction4);
function myFunction4() {
  if (answerPicked2===false){
    answerPicked = true
    document.getElementById("answerFour").innerHTML = "Wrong!";
wrong = wrong +1
}}

document.getElementById("answerFive").addEventListener("click", myFunction5);
function myFunction5() {
  if (answerPicked2===false){
    answerPicked = true
  document.getElementById("answerFive").innerHTML = "Wrong!";
  wrong = wrong +1
}}

document.getElementById("answerSix").addEventListener("click", myFunction6);
function myFunction6() {
  if (answerPicked2===false){
    answerPicked = true
  document.getElementById("answerSix").innerHTML = "Correct!";
  correct= correct +1
}}



document.getElementById("answerSeven").addEventListener("click", myFunction7);
function myFunction7() {
  if (answerPicked3===false){
    answerPicked = true
    document.getElementById("answerSeven").innerHTML = "Wrong!";
wrong = wrong +1
}}

document.getElementById("answerEight").addEventListener("click", myFunction8);
function myFunction8() {
  if (answerPicked3===false){
    answerPicked = true
  document.getElementById("answerEight").innerHTML = "Wrong!";
  correct = correct +1
}}

document.getElementById("answerNine").addEventListener("click", myFunction9);
function myFunction9() {
  if (answerPicked3===false){
    answerPicked = true
  document.getElementById("answerNine").innerHTML = "Correct!";
  wrong= wrong +1
}}

// var currentQuestion = 0;

// // function loadQuestion() {
//   var q = questions[currentQuestion];
//   question.innerHTML = "<p>" + q.question + "</p>";
//   choiceA.innerHTML = q.choiceA;
//   choiceB.innerHTML = q.choiceB;
//   choiceC.innerHTML = q.choiceC;
// }

// currentQuestion();
// var questionOne = [
//   "Who's the master?",
// ];

// document.getElementById("question").innerHTML = questionOne;
// document.getElementById("question").innerHTML = questionOne;

// var questionTwo = [


//     question2: "What does Bruce Leroy leave behind after defending Laura?",
//     choiceA2: "His glass slipper",
//     choiceB2: "His marbles",
//     choiceC2: "His dragon pendant",
//     question3: "What kind of factory does Bruce Leroy's sensei take him to?",
//     choiceA3: "Cheesecake Factory",
//     choiceB3: "Fortune cookie factory",
//     choiceC3: "Spaghetti factory",
//     question4: "You are a..",
//     choiceA4: "string bean, Rick James looking fool",
//     choiceB4: "the master",
//     choiceC4: "here so I don't get fined",
//     question5: "Sho'Nuff is known as",
//     choiceA5: "The Shogun of Harlem",
//     choiceB5: "The best who had ever lived",
//     choiceC5: "TIP",
//   };


// document.getElementById("question").innerHTML = question1;



//     $()

//   }




//   questionNumber++

// }