const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const HotelBooking = sequelize.define("HotelBooking", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    user_id: DataTypes.INTEGER,

    hotel_id: DataTypes.INTEGER,

    room_id: DataTypes.INTEGER,

    check_in: DataTypes.DATE,

    check_out: DataTypes.DATE,

    total_price: DataTypes.FLOAT,
});

module.exports = HotelBooking;
