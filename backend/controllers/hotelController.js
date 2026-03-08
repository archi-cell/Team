const Hotel = require("../models/Hotel");

// ================================
// ✅ CREATE HOTEL (WITH IMAGE)
// ================================
exports.createHotel = async (req, res) => {
    try {

        const {
            name,
            location,
            description,
            hotel_type,
            roomDetails,
            travelServices,
            banquetHall,
            cateringServices
        } = req.body;

        const image = req.file ? req.file.filename : null;

        const hotel = await Hotel.create({
            name,
            location,
            description,
            hotel_type,
            image,

            // ✅ SAVE THESE
            room_details: roomDetails,
            travel_services: travelServices,

            banquet_hall_details: banquetHall,
            catering_services: cateringServices,

            owner_id: req.user.id
        });

        res.status(201).json(hotel);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating hotel" });
    }
};


// ================================
// ✅ GET ALL HOTELS
// ================================
exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching hotels"
        });
    }
};


// ================================
// ✅ STAY HOTELS
// ================================
exports.getStayHotels = async (req, res) => {
    try {

        const hotels = await Hotel.findAll({
            where: { hotel_type: "STAY" }
        });

        const formattedHotels = hotels.map(hotel => {

            const data = hotel.toJSON();

            let rooms = [];

            try {
                rooms = data.room_details ? JSON.parse(data.room_details) : [];
            } catch {
                rooms = [];
            }

            return {
                ...data,
                roomDetails: rooms
            };

        });

        res.json(formattedHotels);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching stay hotels"
        });
    }
};


// ================================
// ✅ EVENT HOTELS
// ================================
exports.getEventHotels = async (req, res) => {
    try {

        const hotels = await Hotel.findAll({
            where: { hotel_type: "EVENT_HOST" }
        });

        const formattedHotels = hotels.map(hotel => {

            const data = hotel.toJSON();

            return {
                ...data,
                banquetHall: data.banquet_hall_details,
                cateringServices: data.catering_services
            };

        });

        res.json(formattedHotels);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching event hotels"
        });
    }
};


// ================================
// ✅ DELETE HOTEL
// ================================
exports.deleteHotel = async (req, res) => {
    try {
        await Hotel.destroy({
            where: { id: req.params.id }
        });

        res.json({ message: "Hotel deleted" });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting hotel"
        });
    }
};


// ================================
// ✅ UPDATE HOTEL (WITH IMAGE)
// ================================
exports.updateHotel = async (req, res) => {
    try {

        const {
            name,
            location,
            description,
            hotel_type
        } = req.body;

        const image = req.file ? req.file.filename : undefined;

        const updateData = {
            name,
            location,
            description,
            hotel_type
        };

        if (image) {
            updateData.image = image;
        }

        await Hotel.update(updateData, {
            where: { id: req.params.id }
        });

        res.json({ message: "Hotel updated" });

    } catch (error) {
        res.status(500).json({
            message: "Error updating hotel"
        });
    }
};
