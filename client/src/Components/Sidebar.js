import '../Styles/Sidebar.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';

import Chords from './Chords';
import Songs from './Songs';
import App from '../App';
import Home from './Home';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Sidebar({ user, songs }) {
  return (
    <>
      <div className="Sidebar">
        <ul>
          <nav>
            <Link to="/" className="home-btn btn neon-red">
              Home
            </Link>
          </nav>
        </ul>
        <ul>
          <nav>
            <Link to="/songs" className="songs-btn btn delay2 neon-red">
              Songs
            </Link>
          </nav>
        </ul>
        <ul>
          <nav>
            <Link to="/chords" className="chords-btn btn delay3 neon-red">
              Chords
            </Link>
          </nav>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
