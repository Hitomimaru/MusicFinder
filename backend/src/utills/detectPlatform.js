module.exports = function detectPlatform(input) {
    if (input.includes('spotify.com')) return 'Spotify';
    if (input.includes('youtube.com') || input.includes('youtu.be')) return 'YouTube';
    if (input.includes('music.apple.com')) return 'Apple';
    return 'Unknown';
}