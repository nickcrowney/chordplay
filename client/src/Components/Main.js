import './Main.css'
import Songs from './Songs'


export default function Main({user, songs}) {
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
            <Songs user={user} songs={songs}/>

        </div>
        )
}