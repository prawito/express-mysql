const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

router.get('/', UserController.getAllUsers);

router.post('/', UserController.createNewUser);


module.exports = router;