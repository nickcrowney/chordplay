import Main from './Main';
import ChordsKnow from './ChordsKnow';
import ChordsDontKnow from './ChordsDontKnow';
import { useState } from 'react';

export default function Chords(props) {
  const [newChord, setNewChord] = useState([]);

  if (!props.userChords) return <h1>loading...</h1>;

  const totalChords = Object.keys(props.sortedChordsObject);
  let unKnownChords = [];
  totalChords.forEach((el) => {
    if (!props.userChords.includes(el)) unKnownChords.push(el);
  });

  return (
    <>
      <div>
        <div>
          <Main
            user={props.user}
            songs={props.songs}
            sortedChordsObject={props.sortedChordsObject}
          />
        </div>
        {/* <img
        className="c-major"
        src="https://tombatossals.github.io/react-chords/media/guitar/chords/C/major/1.svg"
      ></img> */}
        <ul>
          <div className="chords-dont-know-area">
            <div>Chords you don't know:</div>
            <div className="chords-dont-know-list chords-list">
              {unKnownChords?.map((el) => {
                return (
                  <ChordsDontKnow
                    eachChord={el}
                    setUserChords={props.setUserChords}
                    user={props.user}
                    setUser={props.setUser}
                    newChord={newChord}
                    setNewChord={setNewChord}
                  />
                );
              })}
            </div>
          </div>
          <p></p>
          <div className="chords-know-list-area">
            <div>Chords you know:</div>
            <div className="chords-know-list chords-list">
              {props.userChords &&
                props.userChords.map((el) => {
                  return (
                    <ChordsKnow
                      eachChord={el}
                      setUserChords={props.setUserChords}
                    />
                  );
                })}
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
