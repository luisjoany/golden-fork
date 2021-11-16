const { ɵflushModuleScopingQueueAsMuchAsPossible } = require('@angular/core');
const mongoose = require('mongoose');

const URL = '';

mongoose.connect(URL)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
