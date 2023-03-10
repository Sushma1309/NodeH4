const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register');

router.post('/register', registerController.userRegister);

module.exports = {router};