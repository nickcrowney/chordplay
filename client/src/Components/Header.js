// import Header from '../App'
import './Header.css'

export default function Header({user}) {
    return (

        <header className="App-header">
          <div className='head-user'>
            Welcome back, {user.name}!
          </div>


          <div className='head-center'>
          CHORD
          </div>


        </header>
        )
}