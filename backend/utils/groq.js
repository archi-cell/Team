const axios = require("axios");

const generateEventDescription = async (title) => {

    const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: `Write a short exciting event description for a college event titled: ${title}.`
                }
            ]
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data.choices[0].message.content;
};

module.exports = { generateEventDescription };
