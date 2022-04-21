
export default function SongListOneFalse({eachSong, user}) {
    let missedChord=''
    eachSong.chords.forEach((el)=>{
        // console.log(el, 'el')
            if (!user.chordsKnow.includes(el)) {
                // console.log(el, 'MISSING el')
                missedChord=el;
                return el;
            }
            // else {console.log(el, 'not this one')}
            return missedChord;
        })
    // console.log(missedChord, 'MISSING CHORD')


    // const [missingChord, setMissingChord] = useState('E7')
    // // // // // // // // // console.log(user.chordsKnow, 'user SONGLISTONEFALSE')
    // // // // // // // // // console.log(eachSong.chords, 'song chords SONGLISTONEFALSE')


    // user.chordsKnow
    // // let missingChord=''
    // // // // // const compareChords=eachSong.chords.forEach(element => {
    // // // // //     if (!user.chordsKnow.includes(element)) {
    // // // // //         // // // // // // console.log(element, 'MISSING CHORD');
    // // // // //         return element;
    // // // // //     }
    // // // // // });
    // setMissingChord(missChord)

    // const {eachSong}=song
    // console.log(eachSong, 'EACH SONG')
  return (
    <>
            <div key={eachSong._id}>
                {eachSong.title} - {eachSong.artist} - you would need to learn the chord: {missedChord}
            </div>
    </>
  )
}
