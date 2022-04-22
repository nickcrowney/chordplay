import { useState } from 'react';
import './Main.css';
import Songs from './Songs';

export default function Main(props) {
  // const filteredChordsArray= [];
  const sortedChordsArray = Object.keys(props.sortedChordsObject);

  // song.chords.forEach((el)=>{
  //     if (!user.chordsKnow.includes(el)) {
  //         missingChord.push(el)
  //     }
  // });
  const filteredChordsArray = sortedChordsArray.filter(
    (el) => !props.user.chordsKnow.includes(el)
  );
  // console.log(filteredChordsArray, 'filtered chords Array HERE')

  const chordFrequency = (chord) => {
    let numberSongsContainingChord = 0;
    props.songs.forEach((element) => {
      if (element.chords.includes(chord)) numberSongsContainingChord++;
    });
    return Math.ceil((numberSongsContainingChord / props.songs.length) * 100);
  };
  // filteredChordsArray[0]
  //   let newChord = '';
  const [newChord, setNewChord] = useState('');
  const patchChordsKnow = [...props.user.chordsKnow, newChord];
  const handleClick = (e) => {
    console.log(e, 'EEEE');
    console.log(e.target.value, 'TARGET');
    e.preventDefault();
    const chordsUser = { newChord };
    console.log(chordsUser);
    // e.preventDefault();
    fetch('http://localhost:3100/users/626040d11ab47a40bbac456b', {
      method: 'PATCH',
      body: JSON.stringify({
        chordsKnow: patchChordsKnow,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  return (
    <div className="main">
      <div className="main-notification">
        <form className="input-form">
          <label>Input chord learned:</label>
          <div>
            <input
              className="input-box"
              type="text"
              required
              placeholder="Enter new chord..."
              onChange={(e) => {
                setNewChord(e.target.value);
              }}
            ></input>
            {/* value={newChord} */}
            <button onClick={handleClick}>Enter</button>
            {/* console.log(e)}}>Enter</button> */}
          </div>
        </form>
        <div className="chordsknow-notification">
          You know {props.user.chordsKnow ? props.user.chordsKnow.length : 0}{' '}
          chords.
        </div>
        <div className="songsmastered-notification">
          You have mastered{' '}
          {props.user.songsMastered ? props.user.songsMastered.length : 0}{' '}
          songs.
        </div>
      </div>
      {/* <p>
            {songs.title} - {songs.artist}
            </p> */}
      <p></p>
      <div>
        Last chord you learned:{' '}
        {props.user.chordsKnow[props.user.chordsKnow.length - 1]}
      </div>
      <div>
        {' '}
        The most common chord in popular music is:{' '}
        {Object.keys(props.sortedChordsObject)[0]}
      </div>
      <div>
        {' '}
        The next chords you should learn are: {filteredChordsArray[0]} or{' '}
        {filteredChordsArray[1]}
      </div>
      <div>
        {' '}
        The {filteredChordsArray[0]} chord is used in{' '}
        {chordFrequency(filteredChordsArray[0])}% of popular songs.
      </div>
      <div>
        {' '}
        The {filteredChordsArray[1]} chord is used in{' '}
        {chordFrequency(filteredChordsArray[1])}% of popular songs.
      </div>
      {/* <Songs user={user} songs={songs} /> */}
    </div>
  );
}
