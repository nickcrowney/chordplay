import Main from './Main';
import ChordsKnow from './ChordsKnow';
import dayjs from 'dayjs';
import ChordsDontKnow from './ChordsDontKnow';

export default function Chords(props) {
  //   console.log(props.userChords, 'USER CHORDS HERE');
  if (!props.userChords) return <h1>loading...</h1>;


  const totalChords= Object.keys(props.sortedChordsObject)
  console.log(totalChords, 'TOTAL CHORDS')
  console.log(props.userChords, ' USER CHORDS')
    let unKnownChords=[]
//   props.userChords && props.userChords.map(el=>{
    totalChords.forEach(el=>{ if (!props.userChords.includes(el)) unKnownChords.push(el)})
console.log(unKnownChords, 'UNKNOWN CHORDS')

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
      <img
        className="c-major"
        src="https://tombatossals.github.io/react-chords/media/guitar/chords/C/major/1.svg"
      ></img>
      <ul>

      <div className="chords-dont-know-list chords-list">
        Chords you don't know:
        {/* {props.userChords} */}
        {unKnownChords?.map((el) => {

            console.log(el, 'CHORDS');
            return <ChordsDontKnow eachChord={el} />;
          })}
      </div>
      <p>

      </p>
      <div className="chords-know-list chords-list">
        Chords you know:
        {/* {props.userChords} */}
        {props.userChords &&
          props.userChords.map((el) => {
            {/* console.log(el.chord, 'CHORDS'); */}
            return <ChordsKnow eachChord={el} />;
          })}
      </div>
      </ul>

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
