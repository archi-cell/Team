const express = require("express");
const router = express.Router();

const { generateEventDescription } = require("../utils/groq");

router.post("/generate-description", async (req, res) => {
    try {
        const { title } = req.body;

        const description = await generateEventDescription(title);

        res.json({ description });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "AI generation failed" });
    }
});

module.exports = router;
