const mongoose = require('.');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  chordsKnow: [String],
  chordsNext: [String],
  songsMastered: [String],
});

const usersModel = mongoose.model('user', userSchema);

module.exports = usersModel;