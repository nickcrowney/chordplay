import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function SongListOneFalse({ eachSong, user }) {
  let missedChord = '';
  eachSong.chords.forEach((el) => {
    // console.log(el, 'el')
    if (!user.chordsKnow.map((el) => el.chord).includes(el)) {
      // console.log(el, 'MISSING el')
      missedChord = el;
      return el;
    }
    // else {console.log(el, 'not this one')}
    return missedChord;
  });
  // console.log(missedChord, 'MISSING CHORD')

  // const [missingChord, setMissingChord] = useState('E7')
  // // // // // // // // // console.log(user.chordsKnow, 'user SONGLISTONEFALSE')
  // // // // // // // // // console.log(eachSong.chords, 'song chords SONGLISTONEFALSE')

  // user.chordsKnow
  // // let missingChord=''
  // // // // // const compareChords=eachSong.chords.forEach(element => {
  // // // // //     if (!user.chordsKnow.includes(element)) {
  // // // // //         // // // // // // console.log(element, 'MISSING CHORD');
  // // // // //         return element;
  // // // // //     }
  // // // // // });
  // setMissingChord(missChord)

  // const {eachSong}=song
  // console.log(eachSong, 'EACH SONG')

  return (
    <>
      <div key={eachSong._id} className="song-list-element">
        <a className="each-song" href={eachSong.url}>
          <div>
            <p className="song-name">
              {eachSong.title} - {eachSong.artist}
            </p>
            <img
              src={`/images/artists/${eachSong.artist}.jpeg`}
              alt="artist-image"
              className="song-img"
            ></img>
          </div>
        </a>{' '}
        <div className="songs-chords-need">
          <nav>
            need the chord:{' '}
            <Link to="/chords" className="chord-name-link">
              {missedChord}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
