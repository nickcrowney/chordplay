const express = require('express');
const cors = require('cors');
const router = require('./routes');
const app = express();
const morgan = require('morgan');

// var client_id = '6bc4369e56cc463b83128d4e043207ae';
// var redirect_uri = 'http://localhost:3333/callback';

// app.get('/login', function (req, res) {
//   var state = generateRandomString(16);
//   var scope = 'user-read-private user-read-email';

//   res.redirect(
//     'https://accounts.spotify.com/authorize?' +
//       querystring.stringify({
//         response_type: 'code',
//         client_id: client_id,
//         scope: scope,
//         redirect_uri: redirect_uri,
//         state: state,
//       })
//   );
//   (res) => {
//     console.log(res, 'RES HERE');
//   };
// });

const PORT = 3100;

app.use(morgan('short'));
app.use(cors());
app.use(express.json());
app.use(router);

// const head= document.getElementsByClassName('headlines')
// head.innerHTML = articles[0].title;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
