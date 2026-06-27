const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY || "SuperSecretKeyForJWT", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

const userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "Token missing" });
  }
  jwt.verify(token, process.env.TOKEN_KEY || "SuperSecretKeyForJWT", async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Token invalid" });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: false, message: "User not found" });
      }
    }
  });
};

module.exports = { createSecretToken, userVerification };
