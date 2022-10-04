//  GET "/"

//  User.find()

//  GET "/:userId"



// User.findById( req.params.userId )
// ---> another way to find one user User.findOne ( { _id: req.params.userId})
    // .populate('field that has reference id');

// DELETE "/:userId"

// User.deleteOne({ _id: req.params.userId })

// PUT ""/:userId""

// User.findOneAndUpdate( search, { $set: req.body })