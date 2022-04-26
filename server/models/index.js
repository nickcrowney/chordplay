const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://nickcrowney:codeworks84@cluster0.rambw.mongodb.net/songsdb'
);

module.exports = mongoose;
