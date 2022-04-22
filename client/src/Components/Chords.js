import Main from './Main';
import Chord from './Chord';

export default function Chords(props) {
  return (
    <>
      <div>
        <Main
          user={props.user}
          songs={props.songs}
          sortedChordsObject={props.sortedChordsObject}
        />
      </div>
      <div>
        {props.userChords}
        {props.userChords &&
          props.userChords.forEach((el) => {
            console.log(el, 'CHORDS');
            return <Chord eachChord={el} />;
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
