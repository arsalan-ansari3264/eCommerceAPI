/* --------- IMPORTING EXPRESS --------- */
const express = require('express');
const PORT =process.env.PORT ||  8000;
const app = express();
require("dotenv").config();

const db = require('./config/mongoose');


app.use(express.urlencoded({ extended: true }));

app.use('/',require('./routes'));

app.listen(PORT, function(err){
    if(err) {
        console.log('Error in connecting to the server', err);
    } else {
        console.log('Server is up and running on port', PORT);
    }
})