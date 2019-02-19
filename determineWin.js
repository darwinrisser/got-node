module.exports = determineWin = (arr) => {
  if (arr[0] === 4){
    console.log('you have survived all the way until season 8! Good luck!')
  } else if (arr[0] === 3){
    console.log('Good job, you died in season 6!')
  } else if (arr[0] === 2){
    console.log('Not bad, you died in season 4!')
  } else if (arr[0] === 1){
    console.log('You died in season 2.')
  } else {
    console.log('You died in season 1.')
  }
}
