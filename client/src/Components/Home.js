import React, { useState } from 'react';
import Main from './Main';
// import {UserData} from '../Extras/Data';
// import { useState } from 'react';
import LineChart from '../Extras/LineChart';
import BarChart from '../Extras/BarChart';



function Home(props) {
    const chordsTime=  props.user.chordsKnow.map(el=>{
        return el.dateLearned
      })

      const timeArray = [];
      let timeObject= {};
      let id=0;
      let count =0;
      chordsTime.forEach((el, i)=>{
      console.log(chordsTime.indexOf(el), 'index of')

        if (i===chordsTime.lastIndexOf(el)) {
          count++
          timeObject.id=id
          id++
          timeObject.dateLearned=el
          timeObject.count=count
         timeArray.push(timeObject);
         count=0;
         timeObject= {};
      } else count++
      })
    const [userData, setUserData] = useState({ // FILL THIS WITH PROPER TERMS

        labels: timeArray.map((data) => data.dateLearned),
        datasets: [
            {
                label: 'Chords Learned',
                data: timeArray.map((data) => data.count),
                backgroundColor: ['white'],
                borderColor: 'black',
                borderWidth: 1,
                   },
        ],
        options: {
          scales: {
            yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Y text'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'X text'
            }
          }],

              // x: {
              //     type: 'time',
              //     time: {
              //       unit: 'year'
              //     }
              // }
          }
      }
    });

    // const [userData, setUserData] = useState({ // FILL THIS WITH PROPER TERMS
    //     labels: UserData.map((data) => data.year),
    //     datasets: [
    //         {
    //             label: 'Users Gained',
    //             data: UserData.map((data) => data.userGain),
    //             backgroundColor: ['red', 'green'],
    //             borderColor: 'black',
    //             borderWidth: 1,
    //         },
    //     ],
    // });
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
            setUser= {props.setUser}
            songs={props.songs}
            sortedChordsObject={props.sortedChordsObject}
            userChords={props.userChords}
            userSongs={props.userSongs}
          />
        </div>
          <div style={{ width: 700 }}>
            <BarChart chartData={userData} />
          </div>
      </div>
    </>
  );
}

export default Home;
