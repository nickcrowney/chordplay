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
    setCurrentChord(e.target.innerText);
  };
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

export default ChordsKnow;
