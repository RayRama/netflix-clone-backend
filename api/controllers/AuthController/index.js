const { Request, Response } = require("express");
const User = require("../../models/User");
const LoginController = require("./LoginController");
const RegisterController = require("./RegisterController");

class AuthController {
  async login(req = Request, res = Response) {
    const loginController = new LoginController(User);
    await loginController.execute(req, res);
  }

  async register(req = Request, res = Response) {
    const registerController = new RegisterController(User);
    await registerController.execute(req, res);
  }
}

module.exports = AuthController;
