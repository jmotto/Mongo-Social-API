const router = require('express').Router();

const {

    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,


} = require('../../controllers/thoughController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);





module.exports = router;