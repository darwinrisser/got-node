const answers = require('./answers');

module.exports = answerTally = (answer) =>{
    if (answer == 'A'){
    answers[0]++;
    
  } else if (answer == 'B'){
    answers[1]++;
    
  }  else if (answer == 'C'){
    answers[2]++;
    
  } else {
    answers[3]++;
    
  }
}