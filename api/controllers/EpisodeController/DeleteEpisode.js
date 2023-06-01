class DeleteEpisode {
  constructor(Episode) {
    this.Episode = Episode;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        await this.Episode.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Episode has been deleted..." });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(403).json({ message: "Not authorized" });
    }
  }
}

module.exports = DeleteEpisode;
