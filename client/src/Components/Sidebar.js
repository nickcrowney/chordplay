import './Sidebar.css'
import {BrowserRouter, Router, Route} from 'react-router-dom'
import React from 'react'


import Chords from './Chords';
import Songs from './Songs';
import App from '../App';
import Home from './Home';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Sidebar ({user, songs}) {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} exact/>
            <Route path='/songs' component={Songs}/>
            <Route path='/chords' component={Chords}/>
        </BrowserRouter>
        {/* <Router> */}


            {/* <div className='Sidebar'>
                <ul>
                    <Link to="/" className="home-btn btn neon-red" >Home</Link>
                </ul>
                <ul>
                    <Link to="/songs" className="songs-btn btn delay2 neon-red">Songs</Link>
                </ul>
                <ul>
                    <Link to="/chords" className="chords-btn btn delay3 neon-red">Chords</Link>
                </ul>
            </div> */}



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
        {/* </Router> */}


    )
}

export default Sidebar;