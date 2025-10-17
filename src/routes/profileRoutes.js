const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

// GET /me - Profile endpoint
router.get('/me', profileController.getProfile);

module.exports = router;