

export default function SongListTwoFalse({eachSong, user}) {
    let missedChord=[]
    eachSong.chords.forEach((el)=>{
            if (!user.chordsKnow.includes(el)) {
                missedChord.push(el);
            }
            return missedChord;
        })
    const twoMissedChords= missedChord[0]+' & '+missedChord[1]
    console.log(missedChord, 'MISSING CHORD')

    console.log(eachSong, 'EACH SONG')
  return (
    <>
            <div key={eachSong._id}>
                {eachSong.title} - {eachSong.artist} - you would need to learn the chords: {twoMissedChords}

            </div>
    </>
  )
}
