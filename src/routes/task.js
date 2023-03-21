const express = require(`express`);
const router = express.Router();
const { taskControllers } = require(`../controllers/task`);
let multer = require('multer');
let uploaded = multer();

router.post('/', uploaded.array(), taskControllers.add);
router.get('/', taskControllers.get);
router.get('/:id', taskControllers.detail);
router.put('/:id', uploaded.array(), taskControllers.edit);
router.delete('/:id', taskControllers.delete);

module.exports = router;
