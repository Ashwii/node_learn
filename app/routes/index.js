var express = require('express');
var router = express.Router();
const customer = require ('../controllers/index.controller')
/* GET home page. */
router.get('/', customer.customerList);
router.post('/', customer.postData);
router.get('/:id', customer.customerDetail);
router.put('/:id/update', customer.updateDetail);
router.delete('/:id', customer.deletData)
module.exports = router;
