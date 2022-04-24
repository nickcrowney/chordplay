import Main from './Main';
import ChordsKnow from './ChordsKnow';
import dayjs from 'dayjs';

export default function Chords(props) {
  //   console.log(props.userChords, 'USER CHORDS HERE');
  return (
    <>
      <div>
        <Main
          user={props.user}
          songs={props.songs}
          sortedChordsObject={props.sortedChordsObject}
        />
      </div>
      <img
        className="c-major"
        src="https://tombatossals.github.io/react-chords/media/guitar/chords/C/major/1.svg"
      ></img>
      <div>
        Chords you know:
        {/* {props.userChords} */}
        {props.userChords &&
          props.userChords.map((el) => {
            console.log(el.chord, 'CHORDS');
            return <ChordsKnow eachChord={el.chord} />;
          })}
      </div>
      <div>
        Chords you don't know:
        {/* {props.userChords} */}
        {props.userChords &&
          props.userChords.map((el) => {
            console.log(el, 'CHORDS');
            return <ChordsKnow eachChord={el.chord} />;
          })}
      </div>
    </>
    // <header className="App-header">
    //   <div className='head-user'>
    //     Welcome back, {user.name}!
    //   </div>

    //   <div className='head-center'>
    //   CHORD PAGE
    //   </div>

    // </header>
  );
}
