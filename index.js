const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { logs } = require('./middlewares/logs');
const { AnotherLog } = require('./middlewares/logs');
const bookRoutes = require('./routes/book');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookify')
.then(() => console.log('mongoDB database connected'))
.catch(err => console.log("failed to connect",err));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./view'));

app.use(express.static(path.resolve('./public')));    
app.use(bodyParser.json());

app.use(logs);
app.use(AnotherLog('POST'));

app.use("/", bookRoutes);







app.listen(8000, () =>{console.log(`Server is running on port 8000`)});