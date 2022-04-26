const mongoose = require('.');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  chordsKnow: [Object],
  songsMastered: [Object],
});

const usersModel = mongoose.model('user', userSchema);

module.exports = usersModel;
