const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, "secret_this_should_be_longer_like_very_longer");
    } catch(err) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
    if (!decodedToken) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
    req.userId = decodedToken.userId;
    next();
}