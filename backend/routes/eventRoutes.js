const express = require("express");
const router = express.Router();

const {
    createEvent,
    getEvents,
    getAdminEvents,
    updateEvent,
    deleteEvent
} = require("../controllers/eventController");

const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");
const upload = require("../middleware/upload"); // multer middleware


// PUBLIC - explore events
router.get("/", getEvents);


// ADMIN - view all events
router.get("/admin", verifyToken, isAdmin, getAdminEvents);


// CREATE EVENT WITH IMAGE
router.post(
    "/create",
    verifyToken,
    isAdmin,
    upload.single("image"),
    createEvent
);


// UPDATE EVENT WITH IMAGE
router.put(
    "/:id",
    verifyToken,
    isAdmin,
    upload.single("image"),
    updateEvent
);


// DELETE EVENT
router.delete(
    "/:id",
    verifyToken,
    isAdmin,
    deleteEvent
);


module.exports = router;
