class GetMovie {
  constructor(Movie) {
    this.Movie = Movie;
  }

  async execute(req, res) {
    try {
      const movie = await this.Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = GetMovie;
