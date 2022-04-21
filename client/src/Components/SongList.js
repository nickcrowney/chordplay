export default function SongList({eachSong}) {
    return (
        <>
            <div key={eachSong._id}>
                {eachSong.title} - {eachSong.artist}
            </div>
        </>

        )
}