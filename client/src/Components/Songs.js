import SongList from './SongList';
import SongListOneFalse from './SongListOneFalse';
import SongListTwoFalse from './SongListTwoFalse';
import '../Styles/Songs.css';
import SongsMastered from './SongsMastered';
import { useState } from 'react';

export default function Songs({
  user,
  songs,
  sortedChordsObject,
  userChords,
  userSongsMastered,
  setUserSongsMastered,
}) {
  const [songsNotMastered, setSongsNotMastered] = useState([]);

  if (!songs) return <h1>loading...</h1>;
  // console.log(songs.length, 'SONGS TOTAL')
  // console.log(userChords, 'USER CHORDS HERE!!!')
  //   let canPlaySongs = [];
  let chordsUserCanPlay = user.chordsKnow.map((el) => el.chord);
  console.log(userSongsMastered, 'userSongsMastered');

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
  console.log(noneFalse, 'CAN PLAY SONGS');
  const noneFalseAdjusted = noneFalse.map((el, i) =>
    userSongsMastered.every((el) => el.title) === el.title
      ? noneFalse.splice(i, 1)
      : el
  );
  console.log(noneFalseAdjusted, 'ADJUSTED');
  const oneFalse = relevantSongsFinder(songs, user, 1);
  //   console.log(oneFalse, 'ONE FALSE')
  const twoFalse = relevantSongsFinder(songs, user, 2);
  //   console.log(twoFalse, 'TWO FALSE')
  console.log(oneFalse, 'CAN PLAY SONGS ONE');
  console.log(twoFalse, 'CAN PLAY SONGS TWO');

  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="page">
        <div className="songs-a-b">
          <div className="songs-a neon">Songs</div>

          <div className="songs-b">
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
                <button onClick={handleClick}>Enter</button>
              </div>
            </form>
          </div>
          {/* <div className="songs-page"></div> */}
        </div>
        <div>
          <p></p>
          <div className="songs-c-d-e">
            <div className="songs-c">
              {/* <div className="songs-list"> */}
              {noneFalse.length
                ? 'With the chords you know, you can play these songs:'
                : ''}
              <ul>
                <div className="songs-know songs-scroll">
                  {noneFalse &&
                    noneFalse.map((el) => {
                      return (
                        <SongList
                          user={user}
                          eachSong={el}
                          userSongsMastered={userSongsMastered}
                          setUserSongsMastered={setUserSongsMastered}
                        />
                      );
                    })}
                  {noneFalse.length === 0
                    ? "You don't know enough chords to play any songs... yet. Learn some chords and be amazed with what you can do!"
                    : ''}
                </div>
              </ul>
              {/* </div> */}
            </div>

            <div className="songs-d"></div>
            <div className="songs-e"></div>
          </div>
          <ul>
            <p></p>

            <div className="songs-list songs-scroll">
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
            <div className="songs-list songs-scroll">
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
            <p></p>
            <div className="songs-list songs-scroll">
              You have learned these songs:
              <ul>
                <div className="songs-know ">
                  {/* noscroll */}
                  {userSongsMastered &&
                    userSongsMastered.map((el) => {
                      return <SongsMastered eachSong={el} user={user} />;
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
