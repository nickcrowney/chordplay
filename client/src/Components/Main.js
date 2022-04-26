import { useEffect, useState } from 'react';
import '../Styles/Main.css';
import Songs from './Songs';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
var dayjs = require('dayjs');

export default function Main({
  user,
  setUser,
  songs,
  sortedChordsObject,
  userChords,
  userSongsMastered,
  newChord,
  setNewChord,
}) {
  const [filteredChordsArray, setFilteredChordsArray] = useState({}); //NOT BEING USED?

  const sortedChordsArray = Object.keys(sortedChordsObject);
  const currentDate = dayjs().format('YYYY-MM-DD');
  console.log(currentDate);

  console.log(filteredChordsArray, 'filtered chords Array HERE');
  console.log(sortedChordsArray, 'SORTED CHORDS ARRAY');
  console.log(user.chordsKnow, 'CHORDS KNOW USER');
  // THIS NEEDS TO BE REFACTORED - USE STATE INSTEAD
  const filtChords = sortedChordsArray.filter(
    (el) => !user.chordsKnow.map((el) => el.chord)?.includes(el)
  );
  console.log(filtChords, 'FILT');

  // THIS NEEDS TO BE MADE FUNCTIONAL FOR CHANGES WITHOUT RELOAD
  // //   setFilteredChordsArray({ chords: (sortedChordsArray.filter(
  // //     (el) => !user.chordsKnow.map(el=>el.chord)?.includes(el)
  // //   ))});

  // //   useEffect(() => {
  // //     setFilteredChordsArray();
  // //     // console.log(user, 'user here', songs, 'songs here')
  // //   }, []);
  console.log(filteredChordsArray, 'filtered chords Array HERE AFTER');

  const chordFrequency = (chord) => {
    let numberSongsContainingChord = 0;
    songs.forEach((element) => {
      if (element.chords.includes(chord)) numberSongsContainingChord++;
    });
    return Math.ceil((numberSongsContainingChord / songs.length) * 100);
  };

  //   const [newChord, setNewChord] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    let patchChordsKnow = [];
    if (user.chordsKnow) {
      patchChordsKnow = [...user.chordsKnow, newChord];
    } else {
      patchChordsKnow = [newChord];
    }

    const chordsUser = { newChord };
    console.log(chordsUser);
    // e.preventDefault();
    // setUser(user.chordsKnow.push(newChord)); -> user = ...
    setUser((prev) => {
      prev.chordsKnow.push(newChord);
      return prev;
    });

    setNewChord({
      chord: e.target.value,
      dateLearned: currentDate,
    });

    fetch('http://localhost:3100/users/626040d11ab47a40bbac456b', {
      method: 'PATCH',
      body: JSON.stringify({
        chordsKnow: patchChordsKnow, //{ chord: patchChordsKnow, dateLearned: currentDate },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };
  console.log(user.chordsKnow, 'USER CHORDS KNOW HERE');

  return (
    <div className="main">
      <div className="main-notification">
        {/* <form className="input-form">
          <label>Input chord learned:</label>
          <div>
            <input
              className="input-box"
              type="text"
              required
              placeholder="Enter new chord..."
              //   onChange={(e) => {
              //     setNewChord({
              //       chord: e.target.value,
              //       dateLearned: currentDate,
              //     });
              //   }}
            ></input>
            <button onClick={handleClick}>Enter</button>
          </div>
        </form> */}

        <div className="chordsknow-notification">
          You know {user.chordsKnow ? user.chordsKnow.length : 0} chords.
        </div>
        <div className="songsmastered-notification">
          You have mastered {user.songsMastered ? user.songsMastered.length : 0}{' '}
          songs.
        </div>
      </div>

      <div>
        Last chord you learned:{' '}
        {user.chordsKnow.length
          ? user.chordsKnow[user.chordsKnow.length - 1].chord
          : "None... Let's get started!"}
      </div>
      <div>
        {' '}
        The most common chord in the current most searched for music is{' '}
        <nav>
          <Link to="/chords" className="chord-name-link">
            {Object.keys(sortedChordsObject)[0]}.
          </Link>
        </nav>
      </div>
      <div>
        {' '}
        The next chords you should learn are:{' '}
        <nav>
          <Link to="/chords" className="chord-name-link">
            {filtChords[0]} or {filtChords[1]}
          </Link>
        </nav>
      </div>
      <div>
        {' '}
        The {filtChords[0]} chord is used in {chordFrequency(filtChords[0])}% of
        popular songs.
      </div>
      <div>
        {' '}
        The {filtChords[1]} chord is used in {chordFrequency(filtChords[1])}% of
        popular songs.
      </div>
    </div>
  );
}
