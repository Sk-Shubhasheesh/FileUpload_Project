const express = require('express');
const router = express.Router();

// taking all handeler from the controller
const {localFileUpload} = require('../controllers/fileUpload_controller');

// define api rout
router.post("/localFileUpload", localFileUpload);

module.exports = router; 