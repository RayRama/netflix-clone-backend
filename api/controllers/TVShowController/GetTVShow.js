class GetTVShow {
  constructor(TVShow) {
    this.TVShow = TVShow;
  }

  async execute(req, res) {
    try {
      const tvshow = await this.TVShow.findById(req.params.id);
      res.status(200).json(tvshow);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = GetTVShow;
