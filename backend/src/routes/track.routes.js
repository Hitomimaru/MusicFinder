const router = require('express').Router();
const { searchTrack } = require('../controllers/track.controller');

router.post('/search', searchTrack);


module.exports = router;
