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

// var dayjs = require('dayjs');
// const currentDate = dayjs().format('YYYY-MM-DD');
// console.log(currentDate);

// user = {
//   _id: '626040d11ab47a40bbac456b',
//   name: 'Bolito',
//   chordsKnow: [
//     {
//       chord: 'D',
//       dateLearned: '2022-04-23',
//     },
//     {
//       chord: 'A',
//       dateLearned: '2022-04-23',
//     },
//     {
//       chord: 'C',
//       dateLearned: '2022-04-24',
//     },
//     {
//       chord: 'F',
//       dateLearned: '2022-04-24',
//     },
//     {
//       chord: 'F#',
//       dateLearned: '2022-04-24',
//     },
//     {
//       chord: 'C#',
//       dateLearned: '2022-04-24',
//     },
//   ],
//   songsMastered: [],
//   __v: 194,
// };

// const currentChord = 'F';
// const chordsKnowArray = user.chordsKnow;
// const chordIndex = user.chordsKnow.map((el) => el.chord).indexOf(currentChord);
// console.log(chordIndex);
// console.log(chordsKnowArray);
// chordsKnowArray.splice(chordIndex, 1);
// console.log(chordsKnowArray);

const noneFalse = [
  {
    title: 'Use Somebody',
    artist: 'Kings of Leon',
    url: 'https://tabs.ultimate-guitar.com/tab/kings-of-leon/use-somebody-chords-799959',
    capo: 'none',
    chords: ['C', 'C/E', 'F', 'Am', 'D', 'F#'],
  },
  {
    title: 'Titanium',
    artist: 'David Guetta feat. Sia',
    url: 'https://tabs.ultimate-guitar.com/tab/david-guetta/titanium-chords-1098920',
    capo: '3rd fret',
    chords: ['C', 'G', 'Am', 'F', 'Em', 'Asus2'],
  },
];

userSongsMastered = [
  {
    title: 'Use Somebody',
    artist: 'Kings of Leon',
    url: 'https://tabs.ultimate-guitar.com/tab/kings-of-leon/use-somebody-chords-799959',
    capo: 'none',
    chords: ['C', 'C/E', 'F', 'Am', 'D', 'F#'],
  },
];
console.log(noneFalse, 'CAN PLAY SONGS');
const noneFalseAdjusted = noneFalse.map((el, i) => {
  let spreadSongs = userSongsMastered.map((el) => el.title);
  spreadSongs.includes(el.title) ? noneFalse.splice(i, 1) : '';
});

//   userSongsMastered.map((el) =>
//     el.title === el.title ? noneFalse.splice(i, 1) : el
//   )
// );

console.log(noneFalseAdjusted, 'none false adjusted');
