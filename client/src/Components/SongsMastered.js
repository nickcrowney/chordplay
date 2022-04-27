export default function SongsMastered({ eachSong, user }) {
  return (
    <>
      <div key={eachSong._id} className="song-list-element">
        <a className="each-song" href={eachSong.url}>
          <div>
            <div className="song-name-learned">
              {eachSong.title} - {eachSong.artist}
            </div>
            <img
              src={`/images/artists/${eachSong.artist}.jpeg`}
              alt="artist-image"
              className="song-img"
            ></img>
          </div>
        </a>
      </div>
    </>
  );
}
