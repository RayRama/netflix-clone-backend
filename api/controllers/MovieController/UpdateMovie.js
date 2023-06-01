class UpdateMovie {
  constructor(Movie) {
    this.Movie = Movie;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        const updateMovie = await this.Movie.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateMovie);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(403).json({ message: "You are not allowed to do that!" });
    }
  }
}

module.exports = UpdateMovie;
