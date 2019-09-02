const express = require('express');
const router = express.Router();
const studentCtrl = require('../controller/students.controller');
// =============================================================================
// ROUTES
// ===============
router.post('/', studentCtrl.createStudent);
router.get('/', studentCtrl.studentList);
router.get('/:id', studentCtrl.studentDetail);
router.put('/:id', studentCtrl.studentModify);
router.delete('/:id', studentCtrl.removeStudent);
module.exports = router;
// =============================================================================