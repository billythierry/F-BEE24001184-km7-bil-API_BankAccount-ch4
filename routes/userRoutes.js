const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/api/v1/users', createUser);
router.get('/api/v1/users', getUsers);
router.get('/api/v1/users/:userId', getUserById);
router.put('/api/v1/users/:userId', updateUser);
router.delete('/api/v1/users/:userId', deleteUser);

module.exports = router;