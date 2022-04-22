// import Header from '../App'
import './Header.css';

export default function Header({ user }) {
  const chordsKnown = user.chordsKnow.length;
  const skillLevel = (numberChords) => {
    if (numberChords < 4) {
      return 'just started';
    }
    if (numberChords < 8) {
      return 'beginner';
    }
    if (numberChords < 12) {
      return 'ready for a jam';
    }
    if (numberChords < 15) {
      return 'intermediate';
    } else return 'pro';
  };
  const skill = skillLevel(chordsKnown);
  return (
    <header className="App-header">
      <div className="head-user neon">
        Welcome back,
        <div></div>
        <div className="head-username neon-red delay">{user.name}!</div>
      </div>

      {/* <a href="https://www.fontspace.com/category/chalk"> */}
      {/* <img src="https://see.fontimg.com/api/renderfont4/oworB/eyJyIjoiZnMiLCJoIjoyMjAsInciOjIwMDAsImZzIjoxMTAsImZnYyI6IiNGRkZGRkYiLCJiZ2MiOiIjMTIwMDAwIiwidCI6MX0/Q0hPUkQ/buree-chalk-regular.png" alt="Chalk fonts"> */}
      {/* </a> */}
      <div className="head-mid-line">
        <div className="head-center">CHORD</div>
        <div className="head-skill neon-red">Skill level: {skill}</div>
        {/* <div className='head-skill neon-red'>

                </div> */}
      </div>
    </header>
  );
}
