var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var highScores = [
  {
    name : "Apnita",
    score : "2"
  },
  {
    name : "Abhishek",
    score : "4"
  }
]

var userName = readlineSync.question("Hey, May I have your name please? ");

console.log("Hello " + chalk.cyan(userName));

var bool = readlineSync.keyInYN('Do you know me?');

if(bool){
  console.log("Hey let's see how much you know me.");
}
else{
  console.log("No problem pal!, give it a shot!");
}

var questions = [
  {
  question : "Do you know what is my favourite dessert? ",
  answer : "rasgulla"
  },
  {
    question : "Where do I live? ",
    answer : "Hyderabad"
  },
  {
    question : "What is famous in Hyderabad? ",
    answer : "biryani"
  },
  {
    question : "What is my favourite colour? ",
    answer : "green"
  }

]

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Yay! you are right ") + chalk.cyan(userName));
    score = score + 1;
  }
  else{
    console.log(chalk.red("Wrong answer :frowning: "));
  }

  console.log(chalk.magentaBright("----------------"));
}

for(var i = 0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("Well played, Your final score is ", chalk.green(score));

console.log(chalk.magentaBright("----------------"));


for(var j = 0; j < highScores.length; j++){
  if(score > highScores[j].score){
    console.log(chalk.green.underline.bold("Congratulations you have beaten an high score of ", highScores[j].name + "!"));
  }
}00000