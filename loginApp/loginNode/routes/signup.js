const express = require('express');
const route = express.Router();
const signUpCtrl = require('../controllers/signup');
// =============================================================
route.get('/', signUpCtrl.getUsers);
route.post('/', signUpCtrl.postUsers);
route.get('/:id', signUpCtrl.getSingleUser);
route.put('/:id', signUpCtrl.updateUser);
route.delete('/:id', signUpCtrl.deleteUser);
module.exports = route;
// =============================================================
