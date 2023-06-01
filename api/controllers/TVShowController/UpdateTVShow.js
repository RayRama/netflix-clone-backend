class UpdateTVShow {
  constructor(TVShow) {
    this.TVShow = TVShow;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        const updatedTVShow = await this.TVShow.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedTVShow);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } else {
      res.status(403).json({ message: "You are not allowed to do that!" });
    }
  }
}

module.exports = UpdateTVShow;
