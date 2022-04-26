import MetallicaImage from '../ChordImages/Metallica_at_The_O2_Arena_London_2008.jpg';

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
      <div key={eachSong._id} className="song-list-false-element">
        <a className="each-song" href={eachSong.url}>
          <div>
            <div className="song-list-info">
              {eachSong.title} - {eachSong.artist}
            </div>
            <img
              src={`/images/artists/${eachSong.artist}.jpeg`}
              alt="artist-image"
              className="song-img"
            ></img>
          </div>
        </a>{' '}
        you need the chords: {twoMissedChords}
      </div>
    </>
  );
}
