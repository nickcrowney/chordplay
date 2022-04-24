import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Songs from './Components/Songs';
import Chords from './Components/Chords';
// import {UserData} from './Extras/Data';
import LineChart from './Extras/LineChart';
// import Data from './Extras/Data'



function App() {
  const [songs, setSong] = useState(null);
  const [user, setUser] = useState(null);
  const [userChords, setUserChords] = useState(null);
  const [userSongs, setUserSongs] = useState(null);
  const [totalChordsObjectDate, setTotalChordsObjectDate] = useState(null);





  function getData() {
    fetch('http://localhost:3100/songs')
      .then((res) => res.json())
      .then((res) => {

        setSong(res);
      });
    fetch('http://localhost:3100/users')
      .then((res) => res.json())
      .then((res) => {
        const first = res[0];
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
  console.log(userChords, 'userChords here', songs, 'songs here', userSongs, '< userSongs', sortedChordsObject, '< sortedChordsObject')

  return (
    <Router>
      <>
        {/* <div>
        <div class="lds-ripple"><div></div><div></div></div>
      </div> */}
        {/* <div>
          <Data user={user}/>
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
                  setUser={setUser}
                  songs={songs}
                  sortedChordsObject={sortedChordsObject}
                  userChords={userChords}
                  userSongs={userSongs}
                  // userData={userData}
                />
              }
            ></Route>
            <Route
              path="/songs"
              element={<Songs user={user} songs={songs} sortedChordsObject={sortedChordsObject}
                  userChords={userChords}
                  userSongs={userSongs}/>}
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
                  totalChordsObjectDate={totalChordsObjectDate}
                  setTotalChordsObjectDate={setTotalChordsObjectDate}
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
