import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function ChordsKnow({
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
    setCurrentChord(e.target.innerText.replace(/([/])/i, '-'));
  };
  return (
    <>
      <ul>
        <nav>
          <Link to="/" className="chord-btn btn neon">
            <button onClick={handleClick}>{eachChord}</button>
          </Link>
        </nav>
      </ul>
    </>
  );
}

export default ChordsKnow;
