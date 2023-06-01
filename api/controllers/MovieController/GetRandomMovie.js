class GetRandomMovie {
  constructor(Movie) {
    this.Movie = Movie;
  }

  async execute(req, res) {
    let movie;

    try {
      movie = await this.Movie.aggregate([{ $sample: { size: 1 } }]);
      res.status(200).json(movie);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = GetRandomMovie;
