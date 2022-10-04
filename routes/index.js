const router = require('express').Router();

const { modelNames } = require('mongoose');
const {

    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,


} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);





module.exports = router;