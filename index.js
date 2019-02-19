const readline = require('readline');
const answerTally = require('./answerTally');
const answers = require('./answers');
const determineWin = require('./determineWin')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const beginPrompt = () => {
  rl.question('If you were the King/Queen of Westeros, who would you choose as your Hand: A. Tyrion Lannister  B. Davos Seaworth C. Tywin Lannister D. Ned Stark ', (firstAnswer) => {
    answerTally(firstAnswer);
    console.log(answers)
    rl.question('If you were the King/Queen of Westeros, who would you choose to command your army: A. Robb Stark B. Stannis Baratheon C. Jon Snow D. Ramsay Bolton ', (secondAnswer) => {
      answerTally(secondAnswer);
      console.log(answers)
      rl.question('Of the following, who would you LEAST like to fight: A. Gregor Clegane, The Mountain B. Sandor Clegane, The Hound C. Bronn D. Jaime Lannister ', (secondAnswer) => {
        answerTally(secondAnswer);
        console.log(answers)
        rl.question('As a citizen of Westeros, Who would you support as the King/Queen: A. Daenerys Targaryen B. Jon Snow C. Joffrey Lannister D. Robert Baratheon ', (secondAnswer) => {
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


