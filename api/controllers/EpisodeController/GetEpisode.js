class GetEpisode {
  constructor(Episode) {
    this.Episode = Episode;
  }

  async execute(req, res) {
    try {
      const episode = await this.Episode.findById(req.params.id);
      res.status(200).json(episode);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = GetEpisode;
