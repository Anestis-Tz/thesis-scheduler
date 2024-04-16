const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Auth token missing" });
    }
    const parts = req.headers.authorization.split(" ");
    if (parts.length === 2 && parts[0] === "Bearer") {
        const token = parts[1];
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, "secret_this_should_be_longer_like_very_longer");
        } catch (err) {
            return res.status(401).json({
                message: "Auth failed",
                error: err.message // Adjust according to environment
            });
        }
        if (!decodedToken) {
            return res.status(401).json({ message: "Auth failed" });
        }
        req.userId = decodedToken.userId;
        next();
    } else {
        return res.status(401).json({ message: "Auth token malformed" });
    }
};