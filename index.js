var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name: ");
console.log("Welcome " + userName+ " this is a quiz to see how much do you know Maneet");
console.log(userName,",lets check how good friend you are \n");


var questions = [{'question': "From which city he belongs?",
                  'answer': 'Udaipur'},
                  {'question': 'What is his branch in engineering?(Mention in abbrevation(CSE, EE, ECE, IT, etc)) ',
                  'answer': 'ECE'},
                  {'question': 'What is his date of birth? (Mention only date) ',
                  'answer': '28'},
                  {'question': 'His favourite type of shoes? ',
                  'answer': 'Sneakers'},
                  {'question': 'Did he prepare for JEE from any coaching institution ?(Yes/No) ',
                  'answer': 'Yes'},
                  ];
          
function youKnowMe(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    score += 1;
    console.log("YAY! you're right :)");
    console.log("\n");
  }
  else{
    console.log("Sorry! Its wrong answer. :(");
    console.log("\n");
  }
}

for (var i = 0; i < questions.length; i++){
  youKnowMe(questions[i].question, questions[i].answer);
}

console.log(`Your score is ${score} out 5`);