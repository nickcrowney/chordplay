import React, { useState } from 'react';
import Main from './Main';
// import {UserData} from '../Extras/Data';
// import { useState } from 'react';
import LineChart from '../Extras/LineChart';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import BarChart from '../Extras/BarChart';

function Home(props) {
  if (!props.user || !props.songs) <h1>loading...</h1>;

  console.log(props.user.chordsKnow, 'USER CHORDS KNOW HOME');
  const chordsTime = props.user.chordsKnow.map((el) => {
    return el.dateLearned;
  });

  const timeArray = [];
  let timeObject = {};
  let id = 0;
  let count = 0;
  chordsTime.forEach((el, i) => {
    console.log(chordsTime.indexOf(el), 'index of');

    if (i === chordsTime.lastIndexOf(el)) {
      count++;
      timeObject.id = id;
      id++;
      timeObject.dateLearned = el;
      timeObject.count = count;
      timeArray.push(timeObject);
      count = 0;
      timeObject = {};
    } else count++;
  });

  // This is to render the graph. Still a lot to work on here. I want to have an even timeline - so if there
  // are no values for one day, it doesn't skip that day. Instead it renders as zero. I could do this in my
  // timeArray array above but I think it could get complicated.

  // Also, I'm still learning how the chart works so I have left some comments.
  const [userData, setUserData] = useState({
    labels: timeArray.map((data) => data.dateLearned),
    datasets: [
      {
        label: 'Chords Learned',
        data: timeArray.map((data) => data.count),
        backgroundColor: ['red'],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
    options: {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Y text',
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'X text',
            },
          },
        ],

        // x: {
        //     type: 'time',
        //     time: {
        //       unit: 'year'
        //     }
        // }
      },
    },
  });

  const homeQuotes = [
    "Home, home is whenever I'm with you...",
    'Your hometown, this is your hometown...',
    "I'm coming home, tell the world that I'm coming home...",
  ];
  const selectedhomeQuote =
    homeQuotes[Math.floor(Math.random() * homeQuotes.length)];

  return (
    <>
      <div className="home-quote">{selectedhomeQuote}</div>
      <div className="home-order">
        <div>
          <Main
            user={props.user}
            setUser={props.setUser}
            songs={props.songs}
            sortedChordsObject={props.sortedChordsObject}
            userChords={props.userChords}
            userSongsMastered={props.userSongsMastered}
            newChord={props.newChord}
            setNewChord={props.setNewChord}
            // filteredChordsArray= {props.filteredChordsArray}
            // etFilteredChordsArray={props.setFilteredChordsArray}
          />
        </div>
        <div style={{ width: 700 }}>
          <BarChart chartData={userData} />
        </div>
      </div>
      <div className="home-bottom-info">
        <nav>
          The most common chord in the current most searched for music is{' '}
          <Link to="/chords" className="chord-name-link">
            {Object.keys(props.sortedChordsObject)[0]}.
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Home;
