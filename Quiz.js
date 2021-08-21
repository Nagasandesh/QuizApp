var readlineSync = require('readline-sync');
var level1Score = 0;
var level2Score = 0;
var userName = readlineSync.question('What is your Name?');
console.log('Hi ' + userName + '!!');
console.log('Welcome to Current Affairs Quiz');
console.log('You will have Two Levels with 4 questions each\n');
console.log('\n*~~~~~~~ LEVEL 1~~~~~~~~~~*\n')
function play(question, answer, Level) {
  var userAnswer = readlineSync.question(question);
  if (Level === '1') {
    if (userAnswer == answer) {
      console.log('Correct!!');
      level1Score++;
      console.log('Your Score is ' + level1Score);
    }
    else {
      console.log('You Missed It');
      console.log('Your Score is ' + level1Score);
    }
  }
  else {
    if (userAnswer == answer) {
      console.log('Correct!!');
      level2Score = level1Score + level2Score;
      console.log('Your Score is ' + level2Score);
    }
    else {
      console.log('You Missed It');
      console.log('Your Score is ' + level2Score);
    }
  }
  console.log('-----------------------------');
}

var level1 = [{
  question: 'Who is the Father of Milk revolution? ',
  ans: 'Varghese Kurien'
},
{
  question: "Name the India's first Semi High Speed Train? ",
  ans: 'Vande Bharath'
},
{
  question: 'Which is the longest Rail-Cum-Road Bridge in India? ',
  ans: 'BogiBeel'
},
{
  question: 'Which State in INDIA has recorded the highest population? ',
  ans: 'Uttar Pradesh'
}];

var level2 = [{
  question: 'Which year did NITI Aayog came into existance? ',
  ans: '2015'
},
{
  question: "Who is INDIA's first Transgender Police Officer? ",
  ans: 'K Pritika Yashini'
},
{
  question: 'Who is the Chief Of all three Forces(Army,Navy,AirForce)? ',
  ans: 'Bipin Rawaat'
},
{
  question: 'Who is the current Chief Of RAW? ',
  ans: 'Samanth Kumar Goel'
}];
for (var i = 0; i < level1.length; i++) {
  var currentQuestion = level1[i];
  play(currentQuestion.question, currentQuestion.ans, '1');
}
if (level1Score >= 3) {
  console.log("\nCongratulations you have Made it to Level 2 !!!");
  console.log('\n*~~~~~~~~~LEVEL 2~~~~~~~~~~~~~*\n');
  for (var i = 0; i < level2.length; i++) {
    var currentQuestion = level2[i];
    play(currentQuestion.question, currentQuestion.ans, '2');
  }
}
else {
  console.log("\nYou did not Qualify For Next Round\n");
  console.log('Better Luck Next Time');
}

if (level2Score == 8) {
  console.log('Yay!! You Won The Game');
  console.log('Congrats you made it till the Finals!!');
}
else {
  console.log('Better Luck Next Time');
}
console.log('-------------GAME END-----------------');
