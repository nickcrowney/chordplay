// const chords = ['C', 'D', 'E'];
// const possibleChords = ['C', 'D', 'E', 'F', 'G'];

// const chordsObject = possibleChords.reduce(
//   (a, v) => ({ ...a, [v]: false }),
//   {}
// );
// for (let el of Object.keys(chordsObject)) {
//   console.log(el, 'key');
//   if (chords.includes(el)) {
//     chordsObject[el] = true;
//   }
//   // chordsObject.forEach((el) => {
// }
// // }
// // );

// const totalChordsKnow = Object.values(chordsObject);
// console.log(chordsObject);
// console.log(totalChordsKnow);

// const totalTrue = Object.values(chordsObject).reduce(
//   (a, chord) => a + (chord === true ? 1 : 0),
//   0
// );

// console.log(totalTrue);

var dayjs = require('dayjs');
const currentDate = dayjs().format('YYYY-MM-DD');
console.log(currentDate);
