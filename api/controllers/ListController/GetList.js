class GetList {
  constructor(List) {
    this.List = List;
  }

  async execute(req, res) {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;

    let list = [];

    try {
      if (typeQuery) {
        if (genreQuery) {
          list = await this.List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery, genre: genreQuery } },
          ]);
        } else {
          list = await this.List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery } },
          ]);
        }
      } else {
        list = await this.List.aggregate([{ $sample: { size: 10 } }]);
      }
      return res.status(200).json(list);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = GetList;
