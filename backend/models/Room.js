const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Room = sequelize.define("Room", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    hotel_id: DataTypes.INTEGER,

    room_type: DataTypes.STRING,

    price: DataTypes.FLOAT,

    total_rooms: DataTypes.INTEGER,
});

module.exports = Room;
