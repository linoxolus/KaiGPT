const dotenv = require('dotenv');
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

function gemini() {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const geminiAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const gemini = geminiAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
    });
    return gemini;
}

module.exports = gemini;