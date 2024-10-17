const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

const getOpenAiResponse = async (text) => {
    const msg = text.replace(".openai", "");
    if (!msg) return "Please provide a prompt";

    try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: msg }],
          temperature: 0,
          max_tokens: 1000,
        });
        return response;
      } catch (err) {
        return err.message;
      }
}

module.exports = { getOpenAiResponse };