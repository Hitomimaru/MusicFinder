const resolver = require('../services/resolver.service');
const detectPlatform = require('../utills/detectPlatform');

exports.searchTrack = async (req, res) => {
    const {query}  = req.body;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try{
        await detectPlatform(query).then(result => res.status(200).json([result]));

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for tracks' });
    }
}