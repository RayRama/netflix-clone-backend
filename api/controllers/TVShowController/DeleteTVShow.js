class DeleteTVShow {
  constructor(TVShow) {
    this.TVShow = TVShow;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        await this.TVShow.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "TV Show has been deleted" });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } else {
      res.status(403).json({ message: "You are not allowed to do that!" });
    }
  }
}

module.exports = DeleteTVShow;
