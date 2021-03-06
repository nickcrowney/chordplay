import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function SongListTwoFalse({ eachSong, user }) {
  let missedChord = [];
  eachSong.chords.forEach((el) => {
    if (!user.chordsKnow.map((el) => el.chord).includes(el)) {
      missedChord.push(el);
    }
    return missedChord;
  });
  const twoMissedChords = missedChord[0] + ' & ' + missedChord[1];
  // console.log(missedChord, 'MISSING CHORD')

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
          need chords:{' '}
          <nav>
            <Link to="/chords" className="chord-name-link">
              {twoMissedChords}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
