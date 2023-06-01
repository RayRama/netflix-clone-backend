class GetAllTVShow {
  constructor(TVShow) {
    this.TVShow = TVShow;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        const TVShows = await this.TVShow.find();
        res.status(200).json(TVShows);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  }
}

module.exports = GetAllTVShow;
