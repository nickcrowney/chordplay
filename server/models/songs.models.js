const mongoose = require('.');

const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: String,
  artist: String,
  url: String,
  capo: String,
  chords: [String],
});

const songsModel = mongoose.model('song', songSchema);

module.exports = songsModel;
