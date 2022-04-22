export default function SongList({eachSong}) {
    console.log(eachSong.url, 'URL HERE')
    return (
        <>
            <div key={eachSong._id}>
            <a className="each-song" href={eachSong.url}>{eachSong.title} - {eachSong.artist}</a>
            </div>
        </>

        )
}