import SongList from './SongList';
import SongListOneFalse from './SongListOneFalse';
import SongListTwoFalse from './SongListTwoFalse';
import '../Styles/Songs.css';

export default function Songs({
  user,
  songs,
  sortedChordsObject,
  userChords,
  userSongs,
}) {
  if (!songs) return <h1>loading...</h1>;
  // console.log(songs.length, 'SONGS TOTAL')
  // console.log(userChords, 'USER CHORDS HERE!!!')
  //   let canPlaySongs = [];
  let chordsUserCanPlay = user.chordsKnow.map((el) => el.chord);

  // //   const checkOnlyChords = (user) => {
  // //     canPlaySongs = [];
  // //     if (songs) {
  // //       songs.map((song) => {
  // //         //   console.log(chordsUserCanPlay, 'chords know array');
  // //         if (
  // //           song['chords'].every((song) => {
  // //             chordsUserCanPlay.includes(song);
  // //           })
  // //         )
  // //           canPlaySongs.push(song);
  // //       });
  // //       return canPlaySongs;
  // //     } else console.log('Didnt run checkOnlyChords');
  // //   };
  // //   checkOnlyChords(user);

  //--------------------------------------
  let relevantSongs = [];
  let missingChord = [];

  const relevantFinder = (song, user, numberMissingChords) => {
    // THIS WORKS
    relevantSongs = [];

    missingChord = [];
    // console.log(song, 'SONG HERE !')
    song.chords.forEach((el) => {
      // console.log(el, 'CHORD OF SONG')
      if (!chordsUserCanPlay.includes(el)) {
        //   console.log(el, 'MISSING CHORD')
        //   console.log(missingChord, 'MISSING CHORD ARRAY')
        missingChord.push(el);
      }
    });
    // console.log(missingChord, 'MISSING CHORD ARRAY')
    if (missingChord.length === numberMissingChords) relevantSongs.push(song);
    return relevantSongs;
  };

  relevantSongs = [];
  let relevantSongsTotal = [];

  const relevantSongsFinder = (songs, user, numberMissingChords) => {
    relevantSongs = [];
    relevantSongsTotal = [];

    songs.forEach((el, index) => {
      relevantFinder(el, user, numberMissingChords);
      if (relevantSongs.length) {
        relevantSongsTotal = [...relevantSongsTotal, ...relevantSongs];
      }
    });
    return relevantSongsTotal;
  };

  //-------------------------------------

  // In case almostPlay hasn't loaded...
  // // // if (!almostPlay) return (
  // // //     <h1>
  // // //       loading...
  // // //     </h1>
  // // //     );

  const noneFalse = relevantSongsFinder(songs, user, 0);
  const oneFalse = relevantSongsFinder(songs, user, 1);
  //   console.log(oneFalse, 'ONE FALSE')
  const twoFalse = relevantSongsFinder(songs, user, 2);
  //   console.log(twoFalse, 'TWO FALSE')
  console.log(noneFalse, 'CAN PLAY SONGS');

  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="page">
        <div className="page-title">Songs</div>
        <p></p>
        <div>
          <form className="filter-songs-input">
            <label>Filter by artist:</label>
            <div>
              <input
                className="input-box"
                type="text"
                required
                placeholder="Search by artist..."
                //   onChange={(e) => {
                //     setNewChord({
                //       chord: e.target.value,
                //       dateLearned: currentDate,
                //     });
                //   }}
              ></input>
              {/* value={newChord} */}
              <button onClick={handleClick}>Enter</button>
              {/* console.log(e)}}>Enter</button> */}
            </div>
          </form>
        </div>
        <div className="songs-page">
          <p></p>
          <ul>
            <div className="songs-can-play-list">
              {noneFalse.length
                ? 'With the chords you know, you can play these songs:'
                : ''}
              <ul>
                <div className="songs-know">
                  {noneFalse &&
                    noneFalse.map((el) => {
                      return <SongList eachSong={el} />;
                    })}
                  {noneFalse.length === 0
                    ? "You don't know enough chords to play any songs... yet. Learn some chords and be amazed with what you can do!"
                    : ''}
                </div>
              </ul>
            </div>
            <p></p>

            <div className="songs-one-false-list">
              {oneFalse.length
                ? 'If you learn one more chord, you could play ' +
                  oneFalse.length +
                  ' more songs:'
                : ''}
              <ul>
                <div className="songs-know noscroll">
                  {oneFalse &&
                    oneFalse.map((el) => {
                      return <SongListOneFalse eachSong={el} user={user} />;
                    })}
                </div>
              </ul>
            </div>
            <p></p>
            <div className="songs-two-false-list">
              ...with two more chords you could play {twoFalse.length} extra
              songs:
              <ul>
                <div className="songs-know noscroll">
                  {twoFalse &&
                    twoFalse.map((el) => {
                      return <SongListTwoFalse eachSong={el} user={user} />;
                    })}
                </div>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
