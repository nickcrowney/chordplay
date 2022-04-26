const songsModel = require('../models/songs.models.js');

async function getSongs(req, res) {
  try {
    res.send(await songsModel.find());
  } catch (e) {
    console.log(e);
  }
}

async function postSongs(req, res) {
  try {
    const post = await songsModel.create(req.body);
    console.log(post);
    res.status(201);
    res.send(post);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
}

module.exports = { getSongs, postSongs };
