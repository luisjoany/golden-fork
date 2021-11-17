const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbGoldenFork:Goldenfork2021@cluster0.qle6c.mongodb.net/Goldenfork?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
