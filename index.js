const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const port = process.env.PORT || 5000;

// mongoose.connect(keys.mongoURI);

/* 
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {});
*/

mongoose
    .connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Connection succed!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

require('./routes/authRoutes');
require('./routes/authRoutes')(app);
require('./models/User');
require('./services/passport');

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
