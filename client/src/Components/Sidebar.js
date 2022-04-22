import './Sidebar.css';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
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
          <a href="/" className="home-btn btn neon-red">
            Home
          </a>
        </ul>
        <ul>
          <a href="/songs" className="songs-btn btn delay2 neon-red">
            Songs
          </a>
        </ul>
        <ul>
          <a href="/chords" className="chords-btn btn delay3 neon-red">
            Chords
          </a>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
