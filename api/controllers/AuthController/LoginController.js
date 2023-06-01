const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

class LoginController {
  constructor(User) {
    this.User = User;
  }

  async excute(req, res) {
    try {
      const user = await this.User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");

      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      originalPassword !== req.body.password &&
        res.status(401).json("wrong password");

      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );

      const { password, ...info } = user._doc;

      res.status(200).json({ ...info, accessToken });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = LoginController;
