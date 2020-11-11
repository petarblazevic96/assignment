var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var api = require('./routes/apiRoutes');
var config = require('./config');

var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', api);

app.listen(config.app.port, () => {
    console.log(`Server running on port ${config.app.port}`);
});