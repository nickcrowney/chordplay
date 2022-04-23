import Main from './Main';
import ChordsKnow from './ChordsKnow';

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
      <div>
        {/* {props.userChords} */}
        {props.userChords &&
          props.userChords.map((el) => {
            console.log(el, 'CHORDS');
            return <ChordsKnow eachChord={el} />;
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
