const CryptoJS = require("crypto-js");

class RegisterController {
  constructor(User) {
    this.User = User;
  }

  async execute(req, res) {
    const newUser = this.User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    try {
      const user = await newUser.save();
      req.status(201).json(user);
    } catch (error) {
      req.status(500).json(error);
    }
  }
}

module.exports = RegisterController;
