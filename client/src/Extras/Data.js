

// export const UserData = [
//     { id: 1, year: 2015, userGain: 8000, userLost: 800 },
//     { id: 2, year: 2017, userGain: 3000, userLost: 900 },
//     { id: 3, year: 2018, userGain: 12000, userLost: 300 },
//   ];

// export const Data = [
//   { id: 1, year: 2015, userGain: 8000, userLost: 800 },
//       { id: 2, year: 2017, userGain: 3000, userLost: 900 },
//       { id: 3, year: 2018, userGain: 12000, userLost: 300 },
// ]

const user1=
  {
      "_id": "626040d11ab47a40bbac456b",
      "name": "Bolito",
      "chordsKnow": [
          {
              "chord": "D",
              "dateLearned": "2022-04-23"
          },
          {
              "chord": "A",
              "dateLearned": "2022-04-23"
          },
          {
              "chord": "C",
              "dateLearned": "2022-04-24"
          }
      ],
      "songsMastered": [],
      "__v": 42
  }

const chordsTime=  user1.chordsKnow.map(el=>{
  return el.dateLearned
})

const timeArray = []
let timeObject= {

}
let count =0;
let id=0;
// const chordsTimeData=
chordsTime.forEach((el, i)=>{
console.log(chordsTime.indexOf(el), 'index of')
  // console.log(el)

  if (i===chordsTime.lastIndexOf(el)) {
    console.log(el, 'HERE')
    count++
    timeObject.id=id
    id++
    timeObject.dateLearned=el
    timeObject.count=count
   timeArray.push(timeObject);
   count=0;
   timeObject= {};
} else count++
  // chordsTime.indexOf(el)
})
// console.log(chordsTimeData)
console.log(timeObject)
console.log(timeArray)