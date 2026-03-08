const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const EventBooking = sequelize.define("EventBooking", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    event_id: DataTypes.INTEGER,

    user_id: DataTypes.INTEGER,

    seats: DataTypes.INTEGER,

    total_price: DataTypes.FLOAT,
});

module.exports = EventBooking;
