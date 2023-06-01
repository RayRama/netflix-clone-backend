class GetAllEpisode {
  constructor(Episode) {
    this.Episode = Episode;
  }

  async execute(req, res) {
    const query = req.query.tvShowId;
    if (req.user.isAdmin) {
      try {
        const episodes = query
          ? await this.Episode.find({ tvShowId: query })
          : await this.Episode.find();
        res.status(200).json(episodes);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json({ message: "Not authorized" });
    }
  }
}

module.exports = GetAllEpisode;
