exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "ADMIN" && req.user.role !== "OWNER") {
        return res.status(403).json({ message: "Admin access required" });
    }

    next();
};
