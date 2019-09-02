const mongoose = require('mongoose');
const studentSchema = mongoose.Schema;
// ==========================================================================
// SCHEMA
// ============
const student = new studentSchema({
    first_name: { type: String, required: true, unique: true },
    last_name: { type: String, required: true },
    father_name: { type: String, required: true },
    mother_name: { type: String, required: true },
    dob: { type: String, required: true },
    father_occupation: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('student', student);