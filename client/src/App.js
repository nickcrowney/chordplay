import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Songs from './Components/Songs';
import Chords from './Components/Chords';
import SidebarRight from './Components/SidebarRight';

function App() {
  const [songs, setSong] = useState(null);
  const [user, setUser] = useState(null);

  const [userChords, setUserChords] = useState(null);
  const [userSongsMastered, setUserSongsMastered] = useState([]);
  const [totalChordsObjectDate, setTotalChordsObjectDate] = useState(null);
  // const [filteredChordsArray, setFilteredChordsArray]= useState({})
  // const [newChord, setNewChord] = useState('');

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
        const first = res[0].chordsKnow.map((el) => el.chord);

        // console.log(first, 'CHORDS KNOW APPJS');
        setUserChords(first);
      });
    fetch('http://localhost:3100/users')
      .then((res) => res.json())
      .then((res) => {
        const first = res[0].songsMastered;
        setUserSongsMastered(first);
      });
  }
  useEffect(() => {
    getData();
    // console.log(user, 'user here', songs, 'songs here')
  }, []);
  // console.log(userChords, 'USER CHORDS APP ');

  if (!user || !songs) return <h1>loading...</h1>;

  //======================

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
  // console.log(
  //   userChords,
  //   'userChords here',
  //   songs,
  //   'songs here',
  //   userSongsMastered,
  //   '< userSongs',
  //   sortedChordsObject,
  //   '< sortedChordsObject'
  // );

  return (
    <Router>
      <>
        <div className="header">
          <Header user={user} />
        </div>
        <div className="mainpage">
          <div>
            <Sidebar user={user} songs={songs} />
          </div>
          <div className="app-pages">
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
                    userSongsMastered={userSongsMastered}
                  />
                }
              ></Route>
              <Route
                path="/songs"
                element={
                  <Songs
                    user={user}
                    songs={songs}
                    sortedChordsObject={sortedChordsObject}
                    userChords={userChords}
                    userSongsMastered={userSongsMastered}
                    setUserSongsMastered={setUserSongsMastered}
                  />
                }
              ></Route>
              <Route
                path="/chords"
                element={
                  <Chords
                    user={user}
                    setUser={setUser}
                    songs={songs}
                    sortedChordsObject={sortedChordsObject}
                    userChords={userChords}
                    setUserChords={setUserChords}
                    userSongsMastered={userSongsMastered}
                    totalChordsObjectDate={totalChordsObjectDate}
                    setTotalChordsObjectDate={setTotalChordsObjectDate}
                  />
                }
              ></Route>
            </Routes>
          </div>
          <div className="sidebar-right">
            <SidebarRight />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
