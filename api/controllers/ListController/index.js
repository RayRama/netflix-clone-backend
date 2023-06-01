const { Request, Response } = require("express");
const List = require("../../models/List");
const CreateList = require("./CreateList");
const DeleteList = require("./DeleteList");
const GetList = require("./GetList");

class ListController {
  async createList(req = Request, res = Response) {
    const createList = new CreateList(List);
    await createList.execute(req, res);
  }

  async deleteList(req = Request, res = Response) {
    const deleteList = new DeleteList(List);
    await deleteList.execute(req, res);
  }

  async getList(req = Request, res = Response) {
    const getList = new GetList(List);
    await getList.execute(req, res);
  }
}

module.exports = ListController;
