const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
fs = require('fs'),
cors = require('cors'),
routers = require('./server/routes/routes.js');

const port = 3001;
const app = express();

app.use('/main', express.static(path.join(__dirname, 'client/html/index.html')));
app.use('/list_users', express.static(path.join(__dirname, 'client/html/index.html')));
app.use('/add_user', express.static(path.join(__dirname, 'client/html/add_user_form.html')));
app.use('/list', express.static(path.join(__dirname, 'client/html/list.html')));

app.use('/js', express.static(path.join(__dirname, 'client/js')));
app.use('/css', express.static(path.join(__dirname, 'client/css')));

//restfull 
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
});