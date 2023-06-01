/**
 * User Module Routes Index
 */

// ExpressJS Core
const express = require('express');
const router = express.Router();

// Controllers
const SearchCtrl = require('./controllers/search.controller');

// Routes
router.get('/special-search/repositories', SearchCtrl.Index);

module.exports = router;
