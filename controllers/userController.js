const { User, Thought } = require('../models');

module.exports = {
  //  GET "/"
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //  GET "/:userId"
  // User.findById( req.params.userId )
  // ---> another way to find one user User.findOne ( { _id: req.params.userId})
  // .populate('field that has reference id');
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("Thought")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // PUT "/:userId"
  createUser( req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // DELETE "/:userId"
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // PUT ""/:userId""
  // User.findOneAndUpdate( search, { $set: req.body })
  updateUser(req, res) {
    User.findOneAndUpdate( search, { $set: req.body })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //  add friend
  addFriend( req, res ) {
    console.log('You are adding an assignment');
    console.log(req.body);
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $addToSet: { friends: req.body} },
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  removeFriend( req, res ) {
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $pull: { friend: {friendID: req.params.friendID} } },
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
};


