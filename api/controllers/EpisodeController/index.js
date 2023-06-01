const { Request, Response } = require("express");
const Episode = require("../../models/Episode");
const CreateEpisode = require("./CreateEpisode");
const DeleteEpisode = require("./DeleteEpisode");
const GetEpisode = require("./GetEpisode");
const GetAllEpisode = require("./GetAllEpisode");

class EpisodeController {
  async create(req = Request, res = Response) {
    const createEpisode = new CreateEpisode(Episode);
    await createEpisode.execute(req, res);
  }

  async delete(req = Request, res = Response) {
    const deleteEpisode = new DeleteEpisode(Episode);
    await deleteEpisode.execute(req, res);
  }

  async getAll(req = Request, res = Response) {
    const getAllEpisode = new GetAllEpisode(Episode);
    await getAllEpisode.execute(req, res);
  }

  async get(req = Request, res = Response) {
    const getEpisode = new GetEpisode(Episode);
    await getEpisode.execute(req, res);
  }
}

module.exports = EpisodeController;
