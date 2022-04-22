import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Songs from './Components/Songs';
import Chords from './Components/Chords';

// const initialUser= {
//   "_id": "62601bef6976086e5b4f0718",
//   "title": "Creep",
//   "artist": "Radiohead",
//   "url": "https://tabs.ultimate-guitar.com/tab/radiohead/creep-chords-4169",
//   "capo": "none",
//   "chords": [
//       "G",
//       "B",
//       "C",
//       "Cm"
//   ],
//   "__v": 0
// }
function App() {
  // const [urls, setUrl] = useState([]);
  const [songs, setSong] = useState(null);
  const [user, setUser] = useState(null);
  const [userChords, setUserChords] = useState(null);
  const [userSongs, setUserSongs] = useState(null);

  function getData() {
    fetch('http://localhost:3100/songs')
      .then((res) => res.json())
      .then((res) => {
        // const first = res
        // console.log(first)
        setSong(res);
      });
    fetch('http://localhost:3100/users')
      .then((res) => res.json())
      .then((res) => {
        const first = res[0];
        // console.log(first)
        setUser(first);
      });

    fetch('http://localhost:3100/users')
      .then((res) => res.json())
      .then((res) => {
        const first = res[0].chordsKnow;

        console.log(first, 'CHORDS KNOW');
        setUserChords(first);
      });
    fetch('http://localhost:3100/users')
      .then((res) => res.json())
      .then((res) => {
        const first = res[0].songsMastered;
        // console.log(first)
        setUserSongs(first);
      });
  }
  useEffect(() => {
    getData();
    // console.log(user, 'user here', songs, 'songs here')
  }, []);

  if (!user || !songs) return <h1>loading...</h1>;
  let totalChordsArray = [];
  songs.forEach((el) => {
    totalChordsArray = [...totalChordsArray, ...el.chords];
  });
  // console.log(totalChordsArray, 'total chords')

  const totalChordsObject = {};
  totalChordsArray.forEach((el, index) => {
    if (index === totalChordsArray.indexOf(el)) {
      // console.log('first ', el)
      totalChordsObject[el] = 1;
      // Object.entries(totalChordsObject)=(`${el}: 1`)
    }
    if (totalChordsObject[el]) {
      totalChordsObject[el]++;
    }
  });

  let sortedChords = [];
  for (let key in totalChordsObject) {
    sortedChords.push([key, totalChordsObject[key]]);
  }
  // console.log(sortedChords, 'SORTED CHORDS')

  const sortedChordsObject = Object.fromEntries(
    Object.entries(totalChordsObject).sort(([, a], [, b]) => b - a)
  );

  // console.log(sortedChordsObject, 'SORT CHORDS ARRAY')

  return (
    <Router>
      <>
        {/* <div>
        <div class="lds-ripple"><div></div><div></div></div>
      </div> */}
        <div>
          <Header user={user} />
        </div>
        <div></div>
        <div className="mainpage">
          <Sidebar user={user} songs={songs} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  user={user}
                  songs={songs}
                  sortedChordsObject={sortedChordsObject}
                  userChords={userChords}
                  userSongs={userSongs}
                />
              }
            ></Route>
            <Route
              path="/songs"
              element={<Songs user={user} songs={songs} />}
            ></Route>
            <Route
              path="/chords"
              element={
                <Chords
                  user={user}
                  songs={songs}
                  sortedChordsObject={sortedChordsObject}
                  userChords={userChords}
                  userSongs={userSongs}
                />
              }
            ></Route>
          </Routes>
        </div>
        <div className="App">
          {/* onClick={} */}
          <p>
            {/* {songs.map((song, i)=>{
          return (
            <>
              {song[i].title}
            </>
            )
        })} */}
          </p>
        </div>
      </>
    </Router>
  );
}

export default App;
