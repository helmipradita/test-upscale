const express = require('express');
const router = express.Router();
const taskControllers = require('../routes/task');

router.use('/task', taskControllers);

module.exports = router;
