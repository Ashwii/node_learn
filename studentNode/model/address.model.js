const mongoose = require('mongoose');
const addressSchema = mongoose.Schema;
// ==========================================================
// SCHEMA
// =============
const address = new addressSchema({
    student_id: { type: String, required: true },
    door_no: { type: Number, required: true },
    street_name: { type: String, required: true },
    area: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('address', address);
