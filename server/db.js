const totalUrls= [
  //   'https://tabs.ultimate-guitar.com/tab/jeff-buckley/hallelujah-chords-198052',
  // 'https://tabs.ultimate-guitar.com/tab/ed-sheeran/perfect-chords-1956589',
  // 'https://tabs.ultimate-guitar.com/tab/passenger/let-her-go-chords-1137467',
  // 'https://tabs.ultimate-guitar.com/tab/john-legend/all-of-me-chords-1248578',
  // 'https://tabs.ultimate-guitar.com/tab/elvis-presley/cant-help-falling-in-love-chords-1086983',
  // 'https://tabs.ultimate-guitar.com/tab/jason-mraz/im-yours-chords-373896',
  // 'https://tabs.ultimate-guitar.com/tab/ed-sheeran/thinking-out-loud-chords-1486860',
  // 'https://tabs.ultimate-guitar.com/tab/radiohead/creep-chords-4169',
  // 'https://tabs.ultimate-guitar.com/tab/vance-joy/riptide-chords-1237247',
  // 'https://tabs.ultimate-guitar.com/tab/bruno-mars/when-i-was-your-man-chords-1198871'

  //,

  'https://tabs.ultimate-guitar.com/tab/ed-sheeran/photograph-chords-1493446',
  'https://tabs.ultimate-guitar.com/tab/justin-bieber/love-yourself-chords-1780199',
  'https://tabs.ultimate-guitar.com/tab/coldplay/the-scientist-chords-180849',
  'https://tabs.ultimate-guitar.com/tab/adele/someone-like-you-chords-1006040',
  'https://tabs.ultimate-guitar.com/tab/pink-floyd/wish-you-were-here-chords-44555',
  'https://tabs.ultimate-guitar.com/tab/oasis/dont-look-back-in-anger-chords-6097',
  'https://tabs.ultimate-guitar.com/tab/oasis/wonderwall-chords-39144',
  'https://tabs.ultimate-guitar.com/tab/goo-goo-dolls/iris-chords-54512',
  'https://tabs.ultimate-guitar.com/tab/taylor-swift/love-story-chords-730809',
  'https://tabs.ultimate-guitar.com/tab/train/hey-soul-sister-chords-884388',
  'https://tabs.ultimate-guitar.com/tab/ed-sheeran/i-see-fire-chords-1430599',
  'https://tabs.ultimate-guitar.com/tab/paramore/the-only-exception-chords-874862',
  'https://tabs.ultimate-guitar.com/tab/plain-white-ts/hey-there-delilah-chords-337676',
  'https://tabs.ultimate-guitar.com/tab/coldplay/viva-la-vida-chords-675427',
  'https://tabs.ultimate-guitar.com/tab/the-beatles/let-it-be-chords-17427',
  'https://tabs.ultimate-guitar.com/tab/oasis/wonderwall-chords-6125',
  'https://tabs.ultimate-guitar.com/tab/eagles/hotel-california-chords-46190',
  'https://tabs.ultimate-guitar.com/tab/extreme/more-than-words-chords-14087',
  'https://tabs.ultimate-guitar.com/tab/kodaline/all-i-want-chords-1180259',
  'https://tabs.ultimate-guitar.com/tab/imagine-dragons/radioactive-chords-1171909',
  'https://tabs.ultimate-guitar.com/tab/green-day/boulevard-of-broken-dreams-chords-146744',
  'https://tabs.ultimate-guitar.com/tab/the-animals/house-of-the-rising-sun-chords-18688',
  'https://tabs.ultimate-guitar.com/tab/the-beatles/hey-jude-chords-17275',
  'https://tabs.ultimate-guitar.com/tab/john-lennon/imagine-chords-9306',
  'https://tabs.ultimate-guitar.com/tab/johnny-cash/hurt-chords-89849'
  // ,
//   'https://tabs.ultimate-guitar.com/tab/sam-smith/stay-with-me-chords-1473600',
//   'https://tabs.ultimate-guitar.com/tab/jason-mraz/im-yours-chords-468625',
//   'https://tabs.ultimate-guitar.com/tab/bruno-mars/just-the-way-you-are-chords-970416',
//   'https://tabs.ultimate-guitar.com/tab/adele/rolling-in-the-deep-chords-1007655',
//   'https://tabs.ultimate-guitar.com/tab/oasis/wonderwall-chords-27596',
//   'https://tabs.ultimate-guitar.com/tab/misc-soundtrack/a-star-is-born-shallow-chords-2488086',
//   'https://tabs.ultimate-guitar.com/tab/adele/someone-like-you-chords-1006751',
//   'https://tabs.ultimate-guitar.com/tab/onerepublic/counting-stars-chords-1233464',
//   'https://tabs.ultimate-guitar.com/tab/green-day/good-riddance-time-of-your-life-chords-12835',
//   'https://tabs.ultimate-guitar.com/tab/the-beatles/yesterday-chords-17450',
//   'https://tabs.ultimate-guitar.com/tab/ed-sheeran/the-a-team-chords-989712',
//   'https://tabs.ultimate-guitar.com/tab/christina-perri/jar-of-hearts-chords-963934',
//   'https://tabs.ultimate-guitar.com/tab/lewis-capaldi/someone-you-loved-chords-2512737',
//   'https://tabs.ultimate-guitar.com/tab/taylor-swift/you-belong-with-me-chords-752550',
//   'https://tabs.ultimate-guitar.com/tab/john-denver/take-me-home-country-roads-chords-1101747',
//   'https://tabs.ultimate-guitar.com/tab/creedence-clearwater-revival/have-you-ever-seen-the-rain-chords-56479',
//   'https://tabs.ultimate-guitar.com/tab/adele/when-we-were-young-chords-1782038',
//   'https://tabs.ultimate-guitar.com/tab/coldplay/fix-you-chords-202594',
//   'https://tabs.ultimate-guitar.com/tab/frank-sinatra/fly-me-to-the-moon-chords-335196',
//   'https://tabs.ultimate-guitar.com/tab/james-arthur/say-you-wont-let-go-chords-1874747',
//   'https://tabs.ultimate-guitar.com/tab/misc-soundtrack/a-star-is-born-shallow-chords-2480119',
//   'https://tabs.ultimate-guitar.com/tab/the-cranberries/zombie-chords-844902',
//   'https://tabs.ultimate-guitar.com/tab/snow-patrol/chasing-cars-chords-355425',
//   'https://tabs.ultimate-guitar.com/tab/bruno-mars/grenade-chords-993953',
//   'https://tabs.ultimate-guitar.com/tab/the-fray/how-to-save-a-life-chords-258804',
//   'https://tabs.ultimate-guitar.com/tab/misc-cartoons/frozen-let-it-go-chords-1445224',
//   'https://tabs.ultimate-guitar.com/tab/rihanna/stay-chords-1195964',
//   'https://tabs.ultimate-guitar.com/tab/the-script/breakeven-chords-733647',
//   'https://tabs.ultimate-guitar.com/tab/sam-smith/im-not-the-only-one-chords-1489018',
//   'https://tabs.ultimate-guitar.com/tab/don-mclean/american-pie-chords-187946',
//   'https://tabs.ultimate-guitar.com/tab/adele/make-you-feel-my-love-chords-752102',
//   'https://tabs.ultimate-guitar.com/tab/a-great-big-world/say-something-chords-1429805',
//   'https://tabs.ultimate-guitar.com/tab/death-cab-for-cutie/i-will-follow-you-into-the-dark-chords-335735',
//   'https://tabs.ultimate-guitar.com/tab/coldplay/yellow-chords-114080',
//   'https://tabs.ultimate-guitar.com/tab/james-blunt/youre-beautiful-chords-180394',
//   'https://tabs.ultimate-guitar.com/tab/the-script/the-man-who-cant-be-moved-chords-716149',
//   'https://tabs.ultimate-guitar.com/tab/the-lumineers/ho-hey-chords-1144876',
//   'https://tabs.ultimate-guitar.com/tab/pnk/just-give-me-a-reason-chords-1183088',
//   'https://tabs.ultimate-guitar.com/tab/bon-iver/skinny-love-chords-835053',
//   'https://tabs.ultimate-guitar.com/tab/jeff-buckley/hallelujah-chords-27336',
//   'https://tabs.ultimate-guitar.com/tab/4-non-blondes/whats-up-chords-349210',
//   'https://tabs.ultimate-guitar.com/tab/foster-the-people/pumped-up-kicks-chords-1032143',
//   'https://tabs.ultimate-guitar.com/tab/the-neighbourhood/sweater-weather-chords-1237978',
//   'https://tabs.ultimate-guitar.com/tab/bob-dylan/knockin-on-heavens-door-chords-66559',
//   'https://tabs.ultimate-guitar.com/tab/calum-scott/you-are-the-reason-chords-2267805',
//   'https://tabs.ultimate-guitar.com/tab/gotye/somebody-that-i-used-to-know-chords-1094597',
//   'https://tabs.ultimate-guitar.com/tab/dolly-parton/jolene-chords-183019',
//   'https://tabs.ultimate-guitar.com/tab/mumford-sons/little-lion-man-chords-872773'

// ,


//   'https://tabs.ultimate-guitar.com/tab/david-guetta/titanium-chords-1098920',
//   'https://tabs.ultimate-guitar.com/tab/cat-stevens/father-and-son-chords-84491',
//   'https://tabs.ultimate-guitar.com/tab/guns-n-roses/sweet-child-o-mine-chords-176076',
//   'https://tabs.ultimate-guitar.com/tab/green-day/21-guns-chords-823449',
//   'https://tabs.ultimate-guitar.com/tab/radiohead/karma-police-chords-103398',
//   'https://tabs.ultimate-guitar.com/tab/bob-marley/redemption-song-chords-417640',
//   'https://tabs.ultimate-guitar.com/tab/elton-john/your-song-chords-29113',
//   'https://tabs.ultimate-guitar.com/tab/kings-of-leon/use-somebody-chords-799959',
//   'https://tabs.ultimate-guitar.com/tab/ed-sheeran/shape-of-you-chords-1928439',
//   'https://tabs.ultimate-guitar.com/tab/shawn-mendes/stitches-chords-1721601',
//   'https://tabs.ultimate-guitar.com/tab/of-monsters-and-men/little-talks-chords-1046763',
//   'https://tabs.ultimate-guitar.com/tab/train/drops-of-jupiter-chords-1433',
//   'https://tabs.ultimate-guitar.com/tab/armada/harusnya-aku-chords-1733940',
//   'https://tabs.ultimate-guitar.com/tab/the-beatles/let-it-be-chords-60690',
//   'https://tabs.ultimate-guitar.com/tab/759809',
//   'https://tabs.ultimate-guitar.com/tab/imagine-dragons/demons-chords-1148110',
//   'https://tabs.ultimate-guitar.com/tab/ben-e-king/stand-by-me-chords-73005'
]

const songs = [
    {
      title: 'Im Yours',
      artist: 'Jason Mraz',
      url: 'https://tabs.ultimate-guitar.com/tab/jason-mraz/im-yours-chords-373896',
      capo: '4th fret',
      chords: [ 'G', 'D', 'Em', 'C', 'A7', 'Dsus4', 'Bm' ]
    },
    {
      title: 'Creep',
      artist: 'Radiohead',
      url: 'https://tabs.ultimate-guitar.com/tab/radiohead/creep-chords-4169',
      capo: 'none',
      chords: [ 'G', 'B', 'C', 'Cm' ]
    },
    {
      title: 'Hallelujah',
      artist: 'Jeff Buckley',
      url: 'https://tabs.ultimate-guitar.com/tab/jeff-buckley/hallelujah-chords-198052',
      capo: '1st fret',
      chords: [ 'C', 'Am', 'F', 'G', 'E7' ]
    },
    {
      title: 'Thinking Out Loud',
      artist: 'Ed Sheeran',
      url: 'https://tabs.ultimate-guitar.com/tab/ed-sheeran/thinking-out-loud-chords-1486860',
      capo: '2nd fret',
      chords: [ 'C', 'C/E', 'F', 'G', 'Dm', 'Am' ]
    },
    {
      title: 'Cant Help Falling In Love',
      artist: 'Elvis Presley',
      url: 'https://tabs.ultimate-guitar.com/tab/elvis-presley/cant-help-falling-in-love-chords-1086983',
      capo: '2nd fret',
      chords: [
        'C',   'G',  'Am',
        'Em',  'F',  'B7',
        'A7',  'Dm', 'D',
        'F#m', 'Bm', 'A',
        'C#7'
      ]
    },
    {
      title: 'Perfect',
      artist: 'Ed Sheeran',
      url: 'https://tabs.ultimate-guitar.com/tab/ed-sheeran/perfect-chords-1956589',
      capo: '1st fret',
      chords: [ 'G', 'Em', 'C', 'D', 'D/F#', 'G/B', 'Dsus4' ]
    },
    {
      title: 'Riptide',
      artist: 'Vance Joy',
      url: 'https://tabs.ultimate-guitar.com/tab/vance-joy/riptide-chords-1237247',
      capo: '1st fret',
      chords: [ 'Am', 'G', 'C', 'Fmaj7' ]
    },
    {
      title: 'Let Her Go',
      artist: 'Passenger',
      url: 'https://tabs.ultimate-guitar.com/tab/passenger/let-her-go-chords-1137467',
      capo: '7th fret',
      chords: [ 'G', 'F', 'Am', 'C', 'Em' ]
    },
    {
      title: 'When I Was Your Man',
      artist: 'Bruno Mars',
      url: 'https://tabs.ultimate-guitar.com/tab/bruno-mars/when-i-was-your-man-chords-1198871',
      capo: 'none',
      chords: [
        'D7',  'Dm7', 'C',
        'G/B', 'Am',  'Dm',
        'G',   'G7',  'Em/B',
        'Em',  'Bb',  'C/G',
        'F',   'Fm',  'Em/G'
      ]
    },
    {
      title: 'All Of Me',
      artist: 'John Legend',
      url: 'https://tabs.ultimate-guitar.com/tab/john-legend/all-of-me-chords-1248578',
      capo: '1st fret',
      chords: [
        'Em',     'C',
        'G',      'D',
        'Cmaj7',  'Cadd9',
        'Amadd9', 'Am',
        'Emadd9', 'Am/C',
        'C/D',    'Dadd9'
      ]
    },
      {
        "title": "Harusnya Aku",
        "artist": "Armada",
        "url": "https://tabs.ultimate-guitar.com/tab/armada/harusnya-aku-chords-1733940",
        "capo": "none",
        "chords": [
          "C",
          "F",
          "Dm",
          "G",
          "Em",
          "Am"
        ]
      },
      {
        "title": "Use Somebody",
        "artist": "Kings of Leon",
        "url": "https://tabs.ultimate-guitar.com/tab/kings-of-leon/use-somebody-chords-799959",
        "capo": "none",
        "chords": [
          "C",
          "C/E",
          "F",
          "Am",
          "D",
          "F#"
        ]
      },
      {
        "title": "Titanium",
        "artist": "David Guetta feat. Sia",
        "url": "https://tabs.ultimate-guitar.com/tab/david-guetta/titanium-chords-1098920",
        "capo": "3rd fret",
        "chords": [
          "C",
          "G",
          "Am",
          "F",
          "Em",
          "Asus2"
        ]
      },
      {
        "title": "Drops Of Jupiter",
        "artist": "Train",
        "url": "https://tabs.ultimate-guitar.com/tab/train/drops-of-jupiter-chords-1433",
        "capo": "none",
        "chords": [
          "C",
          "G",
          "F",
          "D",
          "Dm",
          "Bb"
        ]
      },
      {
        "title": "Stand By Me",
        "artist": "Ben E. King",
        "url": "https://tabs.ultimate-guitar.com/tab/ben-e-king/stand-by-me-chords-73005",
        "capo": "none",
        "chords": [
          "A",
          "F#m",
          "D",
          "E"
        ]
      },
      {
        "title": "Demons",
        "artist": "Imagine Dragons",
        "url": "https://tabs.ultimate-guitar.com/tab/imagine-dragons/demons-chords-1148110",
        "capo": "1st fret",
        "chords": [
          "D",
          "A",
          "Bm",
          "G"
        ]
      },
      {
        "title": "Let It Be",
        "artist": "The Beatles",
        "url": "https://tabs.ultimate-guitar.com/tab/the-beatles/let-it-be-chords-60690",
        "capo": "none",
        "chords": [
          "C",
          "G",
          "Am",
          "Am7",
          "Fmaj7",
          "F6",
          "F",
          "E",
          "D"
        ]
      },
      {
        "title": "Sweet Child O Mine",
        "artist": "Guns N' Roses",
        "url": "https://tabs.ultimate-guitar.com/tab/guns-n-roses/sweet-child-o-mine-chords-176076",
        "capo": "none",
        "chords": [
          "D",
          "C",
          "G",
          "A",
          "Em",
          "B7",
          "Am",
          "E"
        ]
      },
      {
        "title": "Little Talks",
        "artist": "Of Monsters and Men",
        "url": "https://tabs.ultimate-guitar.com/tab/of-monsters-and-men/little-talks-chords-1046763",
        "capo": "1st fret",
        "chords": [
          "Am",
          "Fmaj7",
          "C",
          "G",
          "F"
        ]
      },
      {
        "title": "Karma Police",
        "artist": "Radiohead",
        "url": "https://tabs.ultimate-guitar.com/tab/radiohead/karma-police-chords-103398",
        "capo": "m",
        "chords": [
          "Am",
          "D/F#",
          "Em",
          "G",
          "F",
          "D",
          "C",
          "Em/B",
          "Bm",
          "F#7",
          "E7"
        ]
      },
      {
        "title": "21 Guns",
        "artist": "Green Day",
        "url": "https://tabs.ultimate-guitar.com/tab/green-day/21-guns-chords-823449",
        "capo": "m",
        "chords": [
          "A",
          "Bb",
          "C",
          "Dm",
          "F",
          "Bb5",
          "C5",
          "C/E",
          "D5",
          "F5",
          "A5"
        ]
      },
      {
        "title": "Father And Son",
        "artist": "Cat Stevens",
        "url": "https://tabs.ultimate-guitar.com/tab/cat-stevens/father-and-son-chords-84491",
        "capo": "none",
        "chords": [
          "G",
          "D/F#",
          "C",
          "Am7",
          "Em",
          "Am",
          "D",
          "C/G",
          "Bm",
          "G/D"
        ]
      },
      {
        "title": "Halo",
        "artist": "Beyoncé",
        "url": "https://tabs.ultimate-guitar.com/tab/759809",
        "capo": "2nd fret",
        "chords": [
          "G",
          "Am",
          "Em",
          "C"
        ]
      },
      {
        "title": "Redemption Song",
        "artist": "Bob Marley",
        "url": "https://tabs.ultimate-guitar.com/tab/bob-marley/redemption-song-chords-417640",
        "capo": "none",
        "chords": [
          "G",
          "Em",
          "Em7",
          "C",
          "G/B",
          "Am",
          "Am7",
          "D",
          "C/B",
          "Am6"
        ]
      },
      {
        "title": "Your Song",
        "artist": "Elton John",
        "url": "https://tabs.ultimate-guitar.com/tab/elton-john/your-song-chords-29113",
        "capo": "1st fret",
        "chords": [
          "D",
          "G",
          "A",
          "F#m",
          "Bm",
          "Em7",
          "Bm/A",
          "Bm/G#",
          "A/C#",
          "Gmaj7",
          "F#",
          "Em",
          "G6"
        ]
      },
      {
        "title": "Shape Of You",
        "artist": "Ed Sheeran",
        "url": "https://tabs.ultimate-guitar.com/tab/ed-sheeran/shape-of-you-chords-1928439",
        "capo": "2nd fret",
        "chords": [
          "Bm",
          "Em",
          "G",
          "A"
        ]
      },
      {
        "title": "Stitches",
        "artist": "Shawn Mendes",
        "url": "https://tabs.ultimate-guitar.com/tab/shawn-mendes/stitches-chords-1721601",
        "capo": "1st fret",
        "chords": [
          "Am",
          "G",
          "C",
          "F"
        ]
      }

  ]
module.exports = {totalUrls, songs};

// const jsSong =
// {
//   title: 'Hallelujah',
//   artist: 'Jeff Buckley',
//   url: 'https://tabs.ultimate-guitar.com/tab/jeff-buckley/hallelujah-chords-198052',
//   capo: '1st fret',
//   chords: [ 'C', 'Am', 'F', 'G', 'E7' ]
// };

// const jsonSong = JSON.parse(jsSong);
// console.log(jsonSong);


// {
//   "name": "Bolito",
//   "chordsKnow" : ["B", "G", "C"],
//   "chordsNext" : [],
//   "songsMastered": []
// }