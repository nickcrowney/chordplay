import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Chord({ eachChord }) {
  //   console.log(eachChord, 'USER CHORDS HERE');

  return (
    <>
      <nav>
        <Link to="/" className="chord-btn btn neon">
          <button>{eachChord}</button>
        </Link>
      </nav>
    </>
  );
}

export default Chord;
