const express = require('express');
const router = express.Router();

// taking all handeler from the controller
const {localFileUpload, imageUpload, videoUpload, imageSizeReducer} = require('../controllers/fileUpload_controller');

// define api rout
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);
module.exports = router; 