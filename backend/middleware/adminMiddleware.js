const isAdmin = (req, res, next) => {

    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // Allow both ADMIN and OWNER
    if (req.user.role !== "ADMIN" && req.user.role !== "OWNER") {
        return res.status(403).json({
            message: "Access denied. Admin only."
        });
    }

    next();
};

module.exports = { isAdmin };
