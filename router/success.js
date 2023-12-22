const express = require('express');
const successController = require('../controllers/done')
const router = express.Router();


router.get("/success", successController.getSuccess);

module.exports = router;