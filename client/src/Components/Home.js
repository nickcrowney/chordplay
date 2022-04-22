import React from 'react';
import Main from './Main';

function Home(props) {
  const homeQuotes = [
    "Home, home is whenever I'm with you...",
    'Your hometown, this is your hometown...',
    "I'm coming home, tell the world that I'm coming home...",
  ];
  const selectedhomeQuote =
    homeQuotes[Math.floor(Math.random() * homeQuotes.length)];

  return (
    <>
      <div className="home-order">
        <div className="home-quote">{selectedhomeQuote}</div>
        <div>
          <Main
            user={props.user}
            songs={props.songs}
            sortedChordsObject={props.sortedChordsObject}
            userChords={props.userChords}
            userSongs={props.userSongs}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
