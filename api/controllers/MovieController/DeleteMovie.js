class DeleteMovie {
  constructor(Movie) {
    this.Movie = Movie;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        await this.Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Movie has been deleted" });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    } else {
      res.status(403).json({ message: "You are not allowed to do that!" });
    }
  }
}

module.exports = DeleteMovie;
