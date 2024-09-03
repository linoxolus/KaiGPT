const gemini = require('../utils/gemini');

class chatController {
    index(req, res) {
        res.send('dmcs22');
    }

    async ask(req, res) {
        const AI = gemini();
        try {
            const result = await AI.generateContent(req.query.prompt);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }

    async askStream(req, res) {
        const AI = gemini();
        try {
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = new chatController();
