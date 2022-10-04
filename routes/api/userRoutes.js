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

const router = require('express').Router();

const {

    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,

} = require('../../controllers/userController');

// get all users /api/users
router.route('/').get(getUsers).post(createUser);

// get single user /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);




module.exports = router;