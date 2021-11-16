const express = require('express')
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('back'));
app.use(express.json());

//Routes



//star the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
