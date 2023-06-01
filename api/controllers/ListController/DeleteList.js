class DeleteList {
  constructor(List) {
    this.List = List;
  }

  async execute(req, res) {
    if (req.user.isAdmin) {
      try {
        await this.List.findByIdAndDelete(req.params.id);
        res.status(200).json("The list has been deleted...");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("You are not allowed to delete lists!");
    }
  }
}

module.exports = DeleteList;
