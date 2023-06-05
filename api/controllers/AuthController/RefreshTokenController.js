const jwt = require("jsonwebtoken");

class RefreshTokenController {
  async execute(req, res) {
    // check token is valid from request body
    const refreshToken = req.body.token;
    // if token is not valid, return error
    if (!refreshToken)
      return res.status(401).json("You are not authenticated!");
    // if token is valid, get new access token
    jwt.verify(refreshToken, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json("Token is not valid!");
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
      // return new access token
      res.status(200).json({ accessToken });
    });
  }
}

module.exports = RefreshTokenController;
