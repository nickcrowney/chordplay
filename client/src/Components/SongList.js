export default function SongList({
  user,
  eachSong,
  userSongsMastered,
  setUserSongsMastered,
}) {
  console.log(eachSong.url, 'URL HERE');

  console.log(userSongsMastered, 'USER SONGS MASTERED HERE');
  console.log(eachSong, 'EACH SONG');

  const handleClick = (e) => {
    e.preventDefault();

    // const regex = /([:])/i;
    // console.log(p.replace(regex, 'ferret'));
    const newSongsMastered = user.songsMastered;
    newSongsMastered.push(eachSong);

    setUserSongsMastered((prev) => {
      return [...prev, eachSong];
    });

    // userSongsMastered.push(eachSong);
    // console.log(userSongsMastered, 'NEW SONGS MASTERED');
    console.log(newSongsMastered, 'NEW SONGS MAST');
    console.log(userSongsMastered, 'USER SONGS MASTERED');

    fetch('http://localhost:3100/users/626040d11ab47a40bbac456b', {
      method: 'PATCH',
      body: JSON.stringify({
        songsMastered: newSongsMastered, //{ chord: patchChordsKnow, dateLearned: currentDate },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };
  return (
    <>
      <div key={eachSong._id} className="song-list-element">
        <a className="each-song" href={eachSong.url}>
          <div>
            <div>
              <div className="song-list-canplay-info">
                {eachSong.title} - {eachSong.artist}
              </div>
            </div>
            <img
              src={`/images/artists/${eachSong.artist}.jpeg`}
              alt="artist-image"
              className="song-img"
            ></img>
          </div>
        </a>
        <div>
          <p>
            <a className="btn" onClick={handleClick}>
              I've learned this song{'  '}
              <img className="tick" src={'/images/tick.svg'}></img>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
