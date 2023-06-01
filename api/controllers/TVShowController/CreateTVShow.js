class CreateTVShow {
  constructor(TVShow) {
    this.TVShow = TVShow;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      const newTVShow = new this.TVShow(req.body);

      try {
        const savedTVShow = await newTVShow.save();
        res.status(201).json(savedTVShow);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } else {
      res.status(403).json({ message: "You are not allowed to do that!" });
    }
  }
}

module.exports = CreateTVShow;
