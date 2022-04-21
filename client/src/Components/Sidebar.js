import './Sidebar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    // BrowserRouter
  } from "react-router-dom";

import Chords from './Chords';
import Songs from './Songs';
import App from '../App';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default function Sidebar ({user, songs}) {
    return (
        <Router>
            <div className='Sidebar'>
                <ul>
                    <Link to="/" className="home-btn btn" >Home</Link>
                </ul>
                <ul>
                    <Link to="/songs" className="songs-btn btn" >Songs</Link>
                </ul>
                <ul>
                    <Link to="/chords" className="chords-btn btn" >Chords</Link>
                </ul>

                {/* <ul>
                    <Link to="/" className="songsPotential-btn btn" >Songs I Can Play</Link>
                </ul>
                <ul>
                    <Link to="/" className="songsAlmost-btn btn">Songs I Can Almost Play</Link>
                </ul>
                <ul>
                    <Link to="/" className="songsPotential-btn btn" >Songs I Can Play</Link>
                </ul>
                <ul>
                    <Link to="/" className="songsPotential-btn btn" >Songs I Can Play</Link>
                </ul>
                <ul>
                    <Link to="/" className="songsPotential-btn btn" >Songs I Can Play</Link>
                </ul>
                <ul>
                    <Link to="/" className="songsPotential-btn btn" >Songs I Can Play</Link>
                </ul> */}


                {/* <Routes>
          <Route path="/songs" element={<Songs user={user} songs={songs}/>}>
          </Route>
          <Route path="/chords" element={<Chords user={user} songs={songs} />}>
          </Route>
          <Route path="/" element={<App />}>
          </Route>
        </Routes> */}

            </div>
            {/* <div>
            </div>
            <div>
                <button className="songsPotential-btn btn" >Songs I Can Play</button>
            </div>
            <div>
                <button className="songsAlmost-btn btn">Songs I Can Almost Play</button>
            </div>
            <div>
                <button className="songsKnow-btn btn">Songs I Have Mastered</button>
            </div>
            <div>
                <button className="chordsKnow-btn btn">Chords I Know</button>
            </div>
            <div>
                <button className="chordsNext-btn btn">New Chord to Learn!</button>
            </div>
            <div>
                <button className="chordsExplore-btn btn">Explore Chords</button>
            </div> */}
        </Router>

    )
}