const Spotify = require('spotify-url-info')(fetch);


async function getSpotifyByLink(url) {
  if (!url) throw new Error('URL is required');

  const track = await Spotify.getData(url);

  return {
    platform: 'Spotify',
    name: track.name,
    artist: track.artists[0].name,
  };
}

module.exports = getSpotifyByLink;
