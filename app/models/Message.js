const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  msg: String,
  thumbUp: Number,
  thumbDown: Number,
  userId: String,
});

module.exports = mongoose.model('Message', messageSchema);