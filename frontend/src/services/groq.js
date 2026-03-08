import axios from "axios";

export const generateDescription = async (title, location) => {

    const res = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            model: "llama3-70b-8192",
            messages: [
                {
                    role: "user",
                    content: `Write an attractive event description for ${title} happening at ${location}`
                }
            ]
        },
        {
            headers: {
                Authorization: `Bearer YOUR_GROQ_API_KEY`,
                "Content-Type": "application/json"
            }
        }
    );

    return res.data.choices[0].message.content;
};
