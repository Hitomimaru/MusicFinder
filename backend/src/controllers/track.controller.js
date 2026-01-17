const resolver = require('../services/resolver.service');

exports.searchTrack = async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try{
        const results = await resolver.resolve(query);
        res.json( results );
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for tracks' });
    }
}