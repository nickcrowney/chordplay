// // const { songs } = require('../db.js');

// // const string = 'Help Chords by The Beatles';

// // const regex = /.+?(?=Chords)/;
// // // const result = string.replace(!regex, 'here');

// // const firstInd = string.indexOf('Chords');
// // const result = string.slice(0, firstInd - 1);
// // console.log(firstInd);
// // console.log(result);

// // const firstIndArtist = string.indexOf('by');
// // const artist = string.slice(firstIndArtist + 3);
// // console.log(artist);

// // // CHECK ONLY FINISHED
// // let relevantSongs = [];
// // const checkOnlyChords = (inputChords) => {
// //   relevantSongs = [];
// //   songs.map((el) => {
// //     if (el['chords'].every((el) => inputChords.includes(el)))
// //       relevantSongs.push(el);
// //   });
// //   // console.log(relevantSongs, 'rel songs')
// //   return relevantSongs;
// // };

// // checkOnlyChords(['G', 'B', 'Cm', 'C', 'D', 'F', 'Am', 'E7']);
// // console.log(relevantSongs[0].title, 'OUTSIDE HERE');
// // // console.log(checkOnlyChords(['G', 'B', 'Cm', 'C', 'D', 'F', 'Am', 'E7']),'check only chords HERE')

// // // CHECK SOME FINISHED
// // const checkSomeChords = (inputChords) => {
// //   const relevantSongs = [];
// //   songs.map((el) => {
// //     if (el['chords'].some((el) => inputChords.includes(el)))
// //       relevantSongs.push(el);
// //   });
// //   console.log(relevantSongs, 'SOME songs');
// //   return relevantSongs;
// // };

// // checkSomeChords(['B']);

// // // CHECK ONLY WITH WILDCARD
// // // const checkMostly= (inputChords, wildcard)

// // // // console.log(checkOnlyChords(['G', 'B', 'Cm', 'C']), 'CHECK CHORDS')

// // // function containsOnly(array1, array2){
// // //     return array2.every(elem => array1.includes(elem))
// // //   }

// // const check = () => {
// //   const relevant = [];
// //   const res = songs.forEach((el) => {
// //     relevant.push(el['chords']);
// //   });
// //   console.log(relevant, 'res');
// // };
// // // check()
const path = '/images/C/E.svg';
const path1 = path.replace('/images/', '');
const path2 = path1;
console.log(path.replace(/a([sS]*)$/, ' '));
