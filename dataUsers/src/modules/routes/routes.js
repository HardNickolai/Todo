const express = require('express');
const router = express.Router();

const {
    getDataUsers,
    createNewUser,
    deleteUser
} = require('../controllers/task.controller');

router.get('/users', getDataUsers);
router.post('/createUser', createNewUser);
router.delete('/deleteUser', deleteUser);

module.exports = router;