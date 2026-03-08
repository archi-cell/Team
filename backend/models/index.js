const sequelize = require("../config/db");

const User = require("./User");
const Hotel = require("./Hotel");
const Room = require("./Room");
const Event = require("./Event");
const HotelBooking = require("./HotelBooking");
const EventBooking = require("./EventBooking");

User.hasMany(Hotel, { foreignKey: "owner_id" });
Hotel.belongsTo(User, { foreignKey: "owner_id" });

Hotel.hasMany(Room, { foreignKey: "hotel_id" });
Room.belongsTo(Hotel);

User.hasMany(HotelBooking);
HotelBooking.belongsTo(User);

Event.belongsTo(Hotel);
Event.belongsTo(User, { foreignKey: "created_by" });

EventBooking.belongsTo(Event);
EventBooking.belongsTo(User);

module.exports = {
    sequelize,
    User,
    Hotel,
    Room,
    Event,
    HotelBooking,
    EventBooking,
};
