import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

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
  const [songs, setSong] = useState('firstState here')
  const [user, setUser] = useState(null);

  function getData() {
    fetch('http://localhost:3100/songs')

    .then(res=>res.json())
    .then(res =>{
      // const first = res
      // console.log(first)
      setSong(res)
    })
    fetch('http://localhost:3100/users')

    .then(res=>res.json())
    .then(res =>{
      const first = res[0]
      // console.log(first)
      setUser(first)
    })
  }
  useEffect(()=>{
    getData();
    // console.log(user, 'user here', songs, 'songs here')
  }, []);
if (!user) return (

<h1>
  loading...

  {/* <script>
    console.log('no user!')
  </script> */}
</h1>
);
  return (
    <>
      {/* <div>
        <div class="lds-ripple"><div></div><div></div></div>
      </div> */}
      <div>
        <Header user={user}/>

      </div>
      <div>
      </div>
      <div className='mainpage'>
          <Sidebar user={user} songs={songs}/>
        <Main user={user} songs={songs}/>
      </div>
    <div className="App" >
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
  );
}

export default App;
