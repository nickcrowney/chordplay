
import SongList from "./SongList";
import SongListOneFalse from "./SongListOneFalse";
import SongListTwoFalse from "./SongListTwoFalse";
import './Songs.css'

export default function Songs({user, songs}) {
    if (!songs) return (
        <h1>
          loading...
        </h1>
        );
    // console.log(songs.length, 'SONGS TOTAL')




    let canPlaySongs=[];




    const checkOnlyChords = (user) => {
        canPlaySongs = [];
        if (songs) {

            songs.map(el => {
                if (el["chords"]
                .every(el=> user["chordsKnow"].includes(el))) canPlaySongs.push(el)
            })
            return canPlaySongs;
        }
        else (console.log('Didnt run checkOnlyChords'))
    }
    checkOnlyChords(user);



//--------------------------------------
let relevantSongs=[];
let missingChord=[];


const relevantSongFinder = (song, user, numberMissingChords) => {
    relevantSongs=[];

    missingChord=[];

    song.chords.forEach((el)=>{
        if (!user.chordsKnow.includes(el)) {
            missingChord.push(el)
        }
    });
    if (missingChord.length===numberMissingChords) relevantSongs.push(song)
    return relevantSongs
}



    relevantSongs=[];
    let relevantSongsTotal=[];

const relevantSongsFinder = (songs, user, numberMissingChords) =>{
    relevantSongs=[];
    relevantSongsTotal=[];

    songs.forEach((el, index)=>{
        relevantSongFinder(el, user, numberMissingChords)
        if (relevantSongs.length) {relevantSongsTotal=[...relevantSongsTotal, ...relevantSongs]}
    })
    return relevantSongsTotal
}


//-------------------------------------



    // In case almostPlay hasn't loaded...
    // // // if (!almostPlay) return (
    // // //     <h1>
    // // //       loading...
    // // //     </h1>
    // // //     );


    const oneFalse = relevantSongsFinder(songs, user, 1)
    // console.log(oneFalse, 'ONE FALSE')
    const twoFalse = relevantSongsFinder(songs, user, 2)
    // console.log(twoFalse, 'TWO FALSE')

    return (
        <>
            <p></p>
          <div className='songs-can-play-list'>
          Songs you can play:
            <ul>
                <div>
                    {canPlaySongs && canPlaySongs.map((el)=>{
                        return(
                            <SongList eachSong={el}/>
                        )
                    }
                    )}
                    {(canPlaySongs.length===0)?'none yet... learn a some chords and be amazed with what you can do!': ''}

                </div>
            </ul>
          </div>

          <div className='songs-one-false-list'>
          If you learn one more chord, you could play {oneFalse.length} more songs:
            <ul>
                <div>
                {oneFalse && oneFalse.map((el)=>{
                        return(
                            <SongListOneFalse eachSong={el} user={user}/>
                        )
                    }
                    )}

                </div>

            </ul>
          </div>

          <div className='songs-two-false-list'>
          ...with two more chords you could play {twoFalse.length} extra songs:
            <ul>
                <div>
                {twoFalse && twoFalse.map((el)=>{
                        return(
                            <SongListTwoFalse eachSong={el} user={user}/>
                        )
                    }
                    )}

                </div>

            </ul>
          </div>
        </>
        )
}