const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20').Strategy;
const port = process.env.PORT || 5000;

passport.use(new GoogleStartegy());

app.listen(port, () => console.log(`listening on http://localhost:${port}`));