const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Hotel = sequelize.define("Hotel", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT
    },

    // ✅ HOTEL CATEGORY
    hotel_type: {
        type: DataTypes.ENUM("STAY", "EVENT_HOST"),
        allowNull: false
    },

    // ✅ HOTEL IMAGE
    image: {
        type: DataTypes.STRING
    },

    // ==============================
    // 🏨 STAY HOTEL FIELDS
    // ==============================

    room_details: {
        type: DataTypes.TEXT, // we will store JSON string
    },

    travel_services: {
        type: DataTypes.TEXT
    },

    // ==============================
    // 🎉 EVENT HOTEL FIELDS
    // ==============================

    banquet_hall_details: {
        type: DataTypes.TEXT
    },

    catering_services: {
        type: DataTypes.TEXT
    },

    // ==============================
    // 👤 OWNER
    // ==============================

    owner_id: {
        type: DataTypes.INTEGER
    }

});

module.exports = Hotel;
