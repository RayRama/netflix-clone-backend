class GetStats {
  constructor(User) {
    this.User = User;
  }

  async execute(req, res) {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    try {
      const data = await this.User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = GetStats;
