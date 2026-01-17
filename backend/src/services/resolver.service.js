const detectPlatform = require('../utills/detectPlatform');

exports.resolve = function(query) {
    const platform = detectPlatform(query);
    return { platform, query, track: {
      title: 'Numb',
      artist: 'Linkin Park',
      platforms: {
        spotify: 'https://open.spotify.com/track/example',
        youtube: 'https://youtube.com/watch?v=example'
      }
    } 
};

}