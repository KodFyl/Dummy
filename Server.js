const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const users = require('./routes/api/users')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

URIRemote = "mongodb+srv://kodfyl:meinhoonkhan@cluster0-o7fsc.mongodb.net/test?retryWrites=true"
URILocal =  "mongodb://localhost/myDB"

mongoose.connect(URIRemote, { useNewUrlParser: true }).then(
    () => console.log("Database connection successfull")).catch(
        (err) => console.log("Database connection failed!", err)
);

app.use('/api/users', users);

app.listen(port, () => console.log('Server running on Port' , port));