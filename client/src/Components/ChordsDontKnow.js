import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

var dayjs = require('dayjs');

const currentDate = dayjs().format('YYYY-MM-DD');
function ChordsDontKnow({
  user,
  setUser,
  newChord,
  setNewChord,
  eachChord,
  setUserChords,
  setCurrentChord,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    // const regex = /([:])/i;
    // console.log(p.replace(regex, 'ferret'));
    setCurrentChord(e.target.innerText);
  };

  //   const handleClickLearned = (e) => {
  //     e.preventDefault();
  //     console.log(e.target.innerText, 'BUTTON CLICKED');
  //     console.log(newChord, 'Chord User before');

  //     setNewChord({
  //       chord: e.target.innerText,
  //       dateLearned: currentDate,
  //     });
  //     let patchChordsKnow = [];
  //     if (user.chordsKnow) {
  //       patchChordsKnow = [...user.chordsKnow, newChord];
  //     } else {
  //       patchChordsKnow = [newChord];
  //     }

  //     const chordsUser = { newChord };
  //     console.log(newChord, 'Chord User after');
  //     // e.preventDefault();
  //     // setUser(user.chordsKnow.push(newChord)); -> user = ...

  //     setUserChords((prev) => {
  //       setUser((prev) => {
  //         prev.chordsKnow.push({
  //           chord: e.target.innerText,
  //           dateLearned: currentDate,
  //         });
  //         return prev;
  //       });

  //       prev.push(e.target.innerText);
  //       return prev;
  //     });

  //     fetch('http://localhost:3100/users/626040d11ab47a40bbac456b', {
  //       method: 'PATCH',
  //       body: JSON.stringify({
  //         chordsKnow: patchChordsKnow, //{ chord: patchChordsKnow, dateLearned: currentDate },
  //       }),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     });
  //   };

  return (
    <>
      <ul>
        <nav>
          <Link to="/">
            <button className="chord-btn" onClick={handleClick}>
              {eachChord}
            </button>
          </Link>
        </nav>
      </ul>
    </>
  );
}

export default ChordsDontKnow;
