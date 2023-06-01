const { Request, Response } = require("express");
const Movie = require("../../models/Movie");
const GetMovie = require("./GetMovie");
const GetRandomMovie = require("./GetRandomMovie");
const CreateMovie = require("./CreateMovie");
const UpdateMovie = require("./UpdateMovie");
const DeleteMovie = require("./DeleteMovie");
const GetAllMovie = require("./GetAllMovie");

class MovieController {
  async getMovie(req = Request, res = Response) {
    const getMovie = new GetMovie(Movie);
    await getMovie.execute(req, res);
  }

  async getRandomMovie(req = Request, res = Response) {
    const getRandomMovie = new GetRandomMovie(Movie);
    await getRandomMovie.execute(req, res);
  }

  async createMovie(req = Request, res = Response) {
    const createMovie = new CreateMovie(Movie);
    await createMovie.execute(req, res);
  }

  async updateMovie(req = Request, res = Response) {
    const updateMovie = new UpdateMovie(Movie);
    await updateMovie.execute(req, res);
  }

  async deleteMovie(req = Request, res = Response) {
    const deleteMovie = new DeleteMovie(Movie);
    await deleteMovie.execute(req, res);
  }

  async getAllMovie(req = Request, res = Response) {
    const getAllMovie = new GetAllMovie(Movie);
    await getAllMovie.execute(req, res);
  }
}

module.exports = MovieController;
