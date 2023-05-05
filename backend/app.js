const express = require('express');
const app = express();
const KittenModel = require('./models/KittenModel');

// 1 - import
const multer = require('multer')

// 2 - config: store the file in the memory
const upload = multer({ storage: multer.memoryStorage() })

// 3 - middleware
app.post('/upload', upload.single('kittenFile'), async (req, res) => {

  const result = await KittenModel.create({
    name: 'Maru',
    image: req.file.buffer
  });


  const findResult = await KittenModel.find({ name: 'Maru' });


  res.send(`<img src="data:image/png;base64,${findResult[0].image.toString('base64')}">`);
});

module.exports = app;