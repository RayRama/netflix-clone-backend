class CreateMovie {
  constructor(Movie) {
    this.Movie = Movie;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      const newMovie = new this.Movie(req.body);

      try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } else {
      res.status(403).json({ message: "You are not allowed to do that!" });
    }
  }
}

module.exports = CreateMovie;
