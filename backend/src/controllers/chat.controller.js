const dotenv = require('dotenv');
dotenv.config();

const { GoogleGenerativeAI } = require('@google/generative-ai');
const geminiAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const gemini = geminiAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
});

class chatController {
    index(req, res) {
        res.send('dmcs22');
    }

    async ask(req, res) {
        try {
            const result = await gemini.generateContent(req.query.prompt);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = new chatController();
