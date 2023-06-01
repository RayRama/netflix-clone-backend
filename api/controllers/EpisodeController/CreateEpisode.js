class CreateEpisode {
  constructor(Epsiode) {
    this.Epsiode = Epsiode;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      const episode = new this.Epsiode(req.body);
      try {
        await episode.save();
        res.status(201).json(episode);
      } catch (error) {
        res.status(409).json({ message: error.message });
      }
    } else {
      res.status(403).json({ message: "Not authorized" });
    }
  }
}

module.exports = CreateEpisode;
