const User = require("../models/User");
const Hotel = require("../models/Hotel");
const Event = require("../models/Event");

exports.getDashboardStats = async (req, res) => {
    try {

        const users = await User.count();
        const hotels = await Hotel.count();
        const events = await Event.count();

        res.status(200).json({
            users,
            hotels,
            events
        });

    } catch (error) {

        console.error("Dashboard Stats Error:", error);

        res.status(500).json({
            message: "Server Error",
            error: error.message
        });

    }
};
