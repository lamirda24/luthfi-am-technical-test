const express = require('express');
const router = express.Router();

const userController = require('../controller/index');
router.get('/', userController.getAll);

module.exports = router;
