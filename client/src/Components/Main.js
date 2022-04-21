import './Main.css'
import Songs from './Songs'


export default function Main({user, songs, sortedChordsObject }) {

    // const filteredChordsArray= [];
    const sortedChordsArray = Object.keys(sortedChordsObject)

    // song.chords.forEach((el)=>{
    //     if (!user.chordsKnow.includes(el)) {
    //         missingChord.push(el)
    //     }
    // });
    const filteredChordsArray=sortedChordsArray.filter(el=>!user.chordsKnow.includes(el))
    console.log(filteredChordsArray, 'filtered chords Array HERE')

    return (

        <div>
        <div className='main-notification'>
            <div className='chordsknow-notification'>
            You know {user.chordsKnow? user.chordsKnow.length:0} chords.
          </div>
          <div className='songsmastered-notification'>
            You have mastered {user.songsMastered? user.songsMastered.length:0} songs.
          </div>
        </div>
            {/* <p>
            {songs.title} - {songs.artist}
            </p> */}
            <p></p>
            <div>
                Last chord you learned: {user.chordsKnow[user.chordsKnow.length-1]}
            </div>
            <div>   The most common chord is: {Object.keys(sortedChordsObject)[0]}
            </div>
            <div>   The next chord you should learn is: {filteredChordsArray[0]}
            </div>
            <Songs user={user} songs={songs}/>

        </div>
        )
}