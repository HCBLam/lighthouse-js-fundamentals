
const temperature = -10;  

// -10 temperature needed for program to tell us to pick a scarf.
// 20 temperature needed for program to tell us short sleeves are OK.

if (temperature < 0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.');
}
console.log('Now you\'re ready to go outside!');
