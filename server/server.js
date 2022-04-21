const express = require('express');
const cors = require('cors');
const router = require('./routes')
const app = express();
const morgan = require('morgan')
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