module.exports = determineWin = (arr) => {
  if (arr[0] === 4){
    console.log('you made it until season 4!')
  } else if (arr[0] === 3){
    console.log('you died in season 3.')
  } else if (arr[0] === 2){
    console.log('you died in season 2.')
  } else {
    console.log('you died in season 1.')
  }
}
