import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function ChordsKnow({ eachChord }) {
  //   console.log(eachChord, 'USER CHORDS HERE');

  return (
    <>
    <ul>

      <nav>
        <Link to="/" className="chord-btn btn neon">
          <button>{eachChord}</button>
        </Link>
      </nav>
    </ul>
    </>
  );
}

export default ChordsKnow;
