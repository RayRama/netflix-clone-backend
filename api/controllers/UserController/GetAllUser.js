class GetAllUser {
  constructor(User) {
    this.User = User;
  }

  async execute(req, res) {
    const query = req.query.new;
    if (req.user.isAdmin) {
      try {
        const users = query
          ? await this.User.find().sort({ _id: -1 }).limit(5)
          : await this.User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed to see all users!");
    }
  }
}

module.exports = GetAllUser;
