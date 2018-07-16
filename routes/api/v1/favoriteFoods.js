const express = require('express');
const router = express.Router();

const FavoriteFoodsController = require('../../../controllers/favoriteFoodsController')

router.get('/', FavoriteFoodsController.index)

module.exports = router;
