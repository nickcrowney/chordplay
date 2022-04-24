

export default function SongListTwoFalse({eachSong, user}) {
    let missedChord=[]
    eachSong.chords.forEach((el)=>{
            if (!user.chordsKnow.map(el=>el.chord).includes(el)) {
                missedChord.push(el);
            }
            return missedChord;
        })
    const twoMissedChords= missedChord[0]+' & '+missedChord[1]
    // console.log(missedChord, 'MISSING CHORD')

    // console.log(eachSong, 'EACH SONG')
  return (
    <>
            <div key={eachSong._id}>
            <a className="each-song" href={eachSong.url}>{eachSong.title} - {eachSong.artist}</a> - you would need to learn the chords: {twoMissedChords}

            </div>
    </>
  )
}
