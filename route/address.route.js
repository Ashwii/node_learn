const express = require('express');
const router = express.Router();
const addressCtrl = require('../controller/address.controller');
// ================================================================================
// ROUTES
// ================
router.post('/', addressCtrl.createAddress);
router.get('/', addressCtrl.addressList);
router.get('/:id', addressCtrl.addressDetail);
router.put('/:id', addressCtrl.addressModify);
router.delete('/:id', addressCtrl.removeAddress);
module.exports = router;
// ====================================================================================