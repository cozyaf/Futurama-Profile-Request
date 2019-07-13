const express = require('express');
const app = express();
const profileRouter = require('./router/profile-router');

app.use(express.json());
app.use(profileRouter);

module.exports = app;
