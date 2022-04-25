import MetallicaImage from '../ChordImages/Metallica_at_The_O2_Arena_London_2008.jpg';

export default function SongList({ eachSong }) {
  console.log(eachSong.url, 'URL HERE');
  return (
    <>
      <div key={eachSong._id} className="song-list-canplay-element">
        <a className="each-song" href={eachSong.url}>
          <div>
            <div className="song-list-canplay-info">
              {eachSong.title} - {eachSong.artist}
            </div>
            <img
              src={MetallicaImage}
              alt="artist-image"
              className="song-img"
            ></img>
          </div>
        </a>
      </div>
    </>
  );
}
