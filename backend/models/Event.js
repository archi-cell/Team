const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define("Event", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    hotel_name: {   // changed from hotel_id
        type: DataTypes.STRING,
        allowNull: false,
    },

    location: {
        type: DataTypes.STRING,
    },

    event_date: {
        type: DataTypes.DATE,
    },

    event_time: {
        type: DataTypes.STRING,
    },

    description: {
        type: DataTypes.TEXT,
    },

    ticket_price: {
        type: DataTypes.FLOAT,
    },

    total_seats: {
        type: DataTypes.INTEGER,
    },

    image: {   // new field for event image
        type: DataTypes.STRING
    }

});

module.exports = Event;
