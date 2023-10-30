const express = require('express');
const router = express.Router();

// taking all handeler from the controller
const {localFileUpload, imageUpload} = require('../controllers/fileUpload_controller');

// define api rout
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

module.exports = router; 