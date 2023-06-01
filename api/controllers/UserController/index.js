const {Request , Response} = require('express');
const {User} = require('../models/User');
const UpdateUser = require('./UpdateUser');
const DeleteUser = require('./DeleteUser');
const GetUser = require('./GetUser');
const GetAllUsers = require('./GetAllUsers');
const GetStats = require('./GetStats');

class UserController {
  constructor() {
    this.User = New User();
  }

  async updateUser(req = Request, res = Response) {
    const updateUser = new UpdateUser(this.User);
    await updateUser.execute(req, res);
  }

  async deleteUser(req = Request, res = Response) {
    const deleteUser = new DeleteUser(this.User);
    await deleteUser.execute(req, res);
  }
}

module.exports = UserController;