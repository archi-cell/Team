const express = require("express");
const router = express.Router();

const hotelController = require("../controllers/hotelController");
const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

// ✅ Multer for file uploads
const multer = require("multer");
const path = require("path");

// Configure storage for uploaded images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // save files in uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    },
});

const upload = multer({ storage });

// 🔓 PUBLIC ROUTES
router.get("/", hotelController.getAllHotels);
router.get("/stay", hotelController.getStayHotels);
router.get("/event", hotelController.getEventHotels);

// 🔒 ADMIN ROUTES
router.post(
    "/",
    verifyToken,
    isAdmin,
    upload.single("image"), // <-- handle single image upload
    hotelController.createHotel
);

router.put("/:id", verifyToken, isAdmin, upload.single("image"), hotelController.updateHotel);

router.delete("/:id", verifyToken, isAdmin, hotelController.deleteHotel);

module.exports = router;
