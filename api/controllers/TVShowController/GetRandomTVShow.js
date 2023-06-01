class GetRandomTVShow {
  constructor(TVShow) {
    this.TVShow = TVShow;
  }

  async execute(req, res) {
    let tvshow;

    try {
      tvshow = await this.TVShow.aggregate([{ $sample: { size: 1 } }]);
      res.status(200).json(TVShow);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = GetRandomTVShow;
