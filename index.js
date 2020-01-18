const express = require ('express') ;
const mongoose = require('mongoose');
const http = require ('http');
const fs = require('fs');

import routes from './src/routes/userRoutes';
var bodyParser = require('body-parser');


const app = express();
const PORT = 5002;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/webappdb1', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

//bodyParser setting
app.use(bodyParser.urlencoded({ extended: true}));
app.use (bodyParser.json());


routes(app);

//serving static files
app.use(express.static(__dirname +'/'));
app.use(express.static(__dirname +'/public/'));



app.listen(PORT);
console.log("server listening at port " + PORT);