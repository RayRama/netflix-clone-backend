class GetAllMovie {
  constructor(Movie) {
    this.Movie = Movie;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        const movies = await this.Movie.find();
        res.status(200).json(movies);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  }
}

module.exports = GetAllMovie;
