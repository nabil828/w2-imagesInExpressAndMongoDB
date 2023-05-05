const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
  name: String,
  image: Buffer
});

const KittenModel = mongoose.model('Kittens', kittySchema);

module.exports = KittenModel;
