const { Request, Response } = require("express");
const TVShow = require("../../models/TVShow");
const CreateTVShow = require("./CreateTVShow");
const GetTVShow = require("./GetTVShow");
const GetAllTVShow = require("./GetAllTVShow");
const GetRandomTVShow = require("./GetRandomTVShow");
const UpdateTVShow = require("./UpdateTVShow");
const DeleteTVShow = require("./DeleteTVShow");

class TVShowController {
  async create(req = Request, res = Response) {
    const createTVShow = new CreateTVShow(TVShow);
    await createTVShow.execute(req, res);
  }

  async get(req = Request, res = Response) {
    const getTVShow = new GetTVShow(TVShow);
    await getTVShow.execute(req, res);
  }

  async getAll(req = Request, res = Response) {
    const getAllTVShow = new GetAllTVShow(TVShow);
    await getAllTVShow.execute(req, res);
  }

  async getRandom(req = Request, res = Response) {
    const getRandomTVShow = new GetRandomTVShow(TVShow);
    await getRandomTVShow.execute(req, res);
  }

  async update(req = Request, res = Response) {
    const updateTVShow = new UpdateTVShow(TVShow);
    await updateTVShow.execute(req, res);
  }

  async delete(req = Request, res = Response) {
    const deleteTVShow = new DeleteTVShow(TVShow);
    await deleteTVShow.execute(req, res);
  }
}

module.exports = TVShowController;
