const { Request, Response } = require("express");
const { User } = require("../../models/User");
const LoginController = require("./LoginController");
const RegisterController = require("./RegisterController");

class AuthController {
  constructor() {
    this.User = new User();
  }

  async login(req = Request, res = Response) {
    const loginController = new LoginController(this.User);
    await loginController.excute(req, res);
  }

  async register(req = Request, res = Response) {
    const registerController = new RegisterController(this.User);
    await registerController.excute(req, res);
  }
}

module.exports = AuthController;
