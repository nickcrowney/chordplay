import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function ChordsDontKnow({eachChord}) {
    // console.log(eachChord, 'EACH CHORD')
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

export default ChordsDontKnow