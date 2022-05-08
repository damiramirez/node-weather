const { Router } = require('express');
const { cities, weatherByCoordinates } = require('../controllers/weather');

const router = Router();

router.get('/cities/:city', cities);
router.get('/', weatherByCoordinates);

module.exports = router;
