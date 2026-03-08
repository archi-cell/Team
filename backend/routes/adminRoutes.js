const express = require("express");
const router = express.Router();

const { getDashboardStats } = require("../controllers/adminController");

const adminAuth = require("../middleware/adminAuth"); // admin middleware

// Admin dashboard stats (Admin Only)
router.get("/dashboard-stats", adminAuth, getDashboardStats);

module.exports = router;
