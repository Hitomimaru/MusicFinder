const express = require('express');
const cors = require('cors');

const trackRoutes = require('./routes/track.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/tracks', trackRoutes);

module.exports = app;