require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./models");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const aiRoutes = require("./routes/aiRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/admin", adminRoutes);
app.use("/uploads", express.static("uploads"));

console.log("GROQ KEY:", process.env.GROQ_API_KEY);

sequelize.sync({ alter: true }).then(() => {
    console.log("Database connected & synced");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});