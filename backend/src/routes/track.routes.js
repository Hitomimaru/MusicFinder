const router = require('express').Router();
const { searchTrack } = require('../controllers/track.controller');

router.get('/search', searchTrack);


module.exports = router;
