const readline = require('readline');
const answerTally = require('./answerTally');
const answers = require('./answers');
const determineWin = require('./determineWin')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const beginPrompt = () => {
  rl.question('Choose A, B, C, or D ', (firstAnswer) => {
    answerTally(firstAnswer);
    console.log(answers)
    rl.question('Choose A, B, C, or D ', (secondAnswer) => {
      answerTally(secondAnswer);
      console.log(answers)
      rl.question('Choose A, B, C, or D ', (secondAnswer) => {
        answerTally(secondAnswer);
        console.log(answers)
        rl.question('Choose A, B, C, or D ', (secondAnswer) => {
          answerTally(secondAnswer);
          console.log(answers)
          determineWin(answers);
          rl.close();
        });
      });
    });
  });
}

beginPrompt();


