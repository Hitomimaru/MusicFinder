exports.resolve = function(query) {
    return { query, track: {
      title: 'Numb',
      artist: 'Linkin Park',
      platforms: {
        spotify: 'https://open.spotify.com/track/example',
        youtube: 'https://youtube.com/watch?v=example'
      }
    } };
};