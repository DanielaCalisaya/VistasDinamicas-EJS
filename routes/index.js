let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController')


/* GET home page. */
router.get('/', controller.index)
router.get('/detalleMenu/id:', controller.detalle)


module.exports = router;