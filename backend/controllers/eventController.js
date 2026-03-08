const { Event } = require("../models");


// CREATE EVENT
exports.createEvent = async (req, res) => {

    try {

        const {
            title,
            hotel_name,
            location,
            event_date,
            event_time,
            description,
            ticket_price,
            total_seats
        } = req.body;

        const image = req.file ? req.file.filename : null;

        const event = await Event.create({
            title,
            hotel_name,
            location,
            event_date,
            event_time,
            description,
            ticket_price,
            total_seats,
            image
        });

        res.json(event);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};



// GET ALL EVENTS (FOR EXPLORE PAGE)
exports.getEvents = async (req, res) => {

    try {

        const events = await Event.findAll();

        res.json(events);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};



// ADMIN EVENTS
exports.getAdminEvents = async (req, res) => {

    try {

        const events = await Event.findAll();

        res.json(events);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};



// UPDATE EVENT
exports.updateEvent = async (req, res) => {

    try {

        const { id } = req.params;

        const image = req.file ? req.file.filename : null;

        const updateData = {
            ...req.body
        };

        if (image) {
            updateData.image = image;
        }

        await Event.update(updateData, {
            where: { id }
        });

        res.json({
            message: "Event updated"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};



// DELETE EVENT
exports.deleteEvent = async (req, res) => {

    try {

        const { id } = req.params;

        await Event.destroy({
            where: { id }
        });

        res.json({
            message: "Event deleted"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};
