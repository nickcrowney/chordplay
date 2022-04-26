import Main from './Main';
import ChordsKnow from './ChordsKnow';
import ChordsDontKnow from './ChordsDontKnow';
import { useState } from 'react';
import '../Styles/Chords.css';
// import AChord from '../ChordImages/A.svg';
// import { A, B } from '../ChordImages';
var dayjs = require('dayjs');

const currentDate = dayjs().format('YYYY-MM-DD');

export default function Chords(props) {
  const [newChord, setNewChord] = useState(['hi']);
  const [currentChord, setCurrentChord] = useState('A');
  const [buttonStyle, setButtonStyle] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const toggleClass = () => {
    setDarkMode(!darkMode);
  };
  console.log(props.sortedChordsObject, 'Sorted object CHORDS');
  if (!props.userChords) return <h1>loading...</h1>;

  const totalChords = Object.keys(props.sortedChordsObject);
  let unKnownChords = [];
  totalChords.forEach((el) => {
    if (!props.userChords.includes(el)) unKnownChords.push(el);
  });
  console.log(currentChord, 'chords dont know HERE');

  //===========================

  const handleClickLearned = (e) => {
    e.preventDefault();
    console.log(e.target.innerText, 'BUTTON CLICKED');
    // console.log(newChord, 'Chord User before');

    setNewChord({
      chord: currentChord,
      dateLearned: currentDate,
    });

    let patchChordsKnow = [];
    if (props.user.chordsKnow) {
      patchChordsKnow = [
        ...props.user.chordsKnow,
        {
          chord: currentChord,
          dateLearned: currentDate,
        },
      ];
    } else {
      patchChordsKnow = [
        {
          chord: currentChord,
          dateLearned: currentDate,
        },
      ];
    }

    // const chordsUser = { newChord };
    // console.log(newChord, 'Chord User after');
    // e.preventDefault();
    // setUser(user.chordsKnow.push(newChord)); -> user = ...

    props.setUserChords((prev) => {
      props.setUser((prev) => {
        prev.chordsKnow.push({
          chord: currentChord,
          dateLearned: currentDate,
        });
        return prev;
      });

      prev.push(currentChord);
      return prev;
    });

    fetch('http://localhost:3100/users/626040d11ab47a40bbac456b', {
      method: 'PATCH',
      body: JSON.stringify({
        chordsKnow: patchChordsKnow, //{ chord: patchChordsKnow, dateLearned: currentDate },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  const handleClickUnLearned = (e) => {
    e.preventDefault();
    console.log(e.target.innerText, 'BUTTON CLICKED');
    console.log(newChord, 'Chord User before');

    setNewChord({
      chord: currentChord,
      dateLearned: currentDate,
    });
    const patchChordsKnow = props.user.chordsKnow;
    const chordIndex = props.user.chordsKnow
      .map((el) => el.chord)
      .indexOf(currentChord);
    console.log(chordIndex);
    console.log(patchChordsKnow);
    patchChordsKnow.splice(chordIndex, 1);
    console.log(patchChordsKnow);

    // if (props.user.chordsKnow) {
    //   patchChordsKnow = [...props.user.chordsKnow, newChord];
    // } else {
    //   patchChordsKnow = [newChord];
    // }

    // // const chordsUser = { newChord };
    // // console.log(newChord, 'Chord User after');

    props.setUserChords((prev) => {
      props.setUser((prev) => {
        console.log(prev, 'PREV');
        prev.chordsKnow = patchChordsKnow;
        return prev;
      });
      console.log(props.user, 'PROPS USER HERE CHORDS');

      prev.splice(chordIndex, 1);
      console.log(props.userChords, 'PROPS USERCHORDS HERE CHORDS');
      return prev;
    });

    fetch('http://localhost:3100/users/626040d11ab47a40bbac456b', {
      method: 'PATCH',
      body: JSON.stringify({
        chordsKnow: patchChordsKnow, //{ chord: patchChordsKnow, dateLearned: currentDate },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  console.log(props.userChords, 'PROPS USERCHORDS');
  return (
    <>
      <div className="title-rest">
        <div className="chord-title neon">Chords</div>
        <div className="chord-section-a-b-c-d-e">
          <div className="chord-section-a-b-c">
            <div className="chord-section-a">
              <Main
                user={props.user}
                songs={props.songs}
                sortedChordsObject={props.sortedChordsObject}
              />
            </div>

            <div className="chord-section-b">
              <div className="chord-name neon">
                <div>{currentChord} Chord</div>
              </div>
              <div className="chord-display-area">
                <div className={darkMode ? 'dark' : null}>
                  <button className="dark-button" onClick={toggleClass}>
                    ☾
                  </button>
                  <img
                    src={`/images/${currentChord
                      .replace(/(\/)(?!.*\1)/g, '-')
                      .replace(/#/g, '_sh')}.svg`}
                    alt="no chord shape, check online!"
                    width="300px"
                    className="chord-images"
                  ></img>
                </div>
              </div>
              <div className="button-chord-learned-area">
                {!props.userChords.includes(currentChord) ? (
                  <button
                    onClick={handleClickLearned}
                    className=" button-chord-learned"
                  >
                    I know this chord
                  </button>
                ) : (
                  <button
                    onClick={handleClickUnLearned}
                    className=" button-chord-learned"
                  >
                    I don't know this chord
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="chord-section-d-e">
              <div className="text-above-scroll">
                Chords you don't know (scroll for more)
              </div>

              <div className="chords-section-d chord-list-d-e">
                {unKnownChords?.map((el) => {
                  return (
                    <ChordsDontKnow
                      eachChord={el}
                      setUserChords={props.setUserChords}
                      user={props.user}
                      setUser={props.setUser}
                      newChord={newChord}
                      setNewChord={setNewChord}
                      setCurrentChord={setCurrentChord}
                    />
                  );
                })}
              </div>
              <p></p>
              <div className="text-above-scroll">Chords you know</div>

              <div className="chords-section-e chord-list-d-e">
                {props.userChords &&
                  props.userChords.map((el) => {
                    return (
                      <>
                        <ChordsKnow
                          eachChord={el}
                          setUserChords={props.setUserChords}
                          user={props.user}
                          setUser={props.setUser}
                          newChord={newChord}
                          setNewChord={setNewChord}
                          setCurrentChord={setCurrentChord}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
            {/* <object data={`/images/${el}.svg`} width="300px" />; */}

            {/* <A /> */}
            {/* <img src={AChord} alt="chord-image" className="chord-image"></img> */}
          </div>
        </div>
      </div>
    </>
  );
}
