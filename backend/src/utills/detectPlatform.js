const getSpotifyByLink = require('./Spotify/getSpotifyByLink');


async function detectPlatform(input) {
  if (input.includes('spotify.com')) {

    return await getSpotifyByLink(input);
  }
  if (input.includes('youtube.com') || input.includes('youtu.be')) return 'YouTube';
  if (input.includes('music.apple.com')) return 'Apple';
  return 'Unknown';
}

module.exports = detectPlatform;


async function detectPlatform(input) {
    
    if (input.includes('spotify.com')) {
        return await getSpotifyByLink(input)
    };
    if (input.includes('youtube.com') || input.includes('youtu.be')) return 'YouTube';
    if (input.includes('music.apple.com')) return 'Apple';
    return 'Unknown';
}

module.exports = detectPlatform;