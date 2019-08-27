const mongoose = require('mongoose');
const customerSchema = mongoose.Schema;

let customer = new customerSchema ({
    first_name: { type: String, unique: true, dropDups: true},
    last_name: String,
    mobile_number: Number,
    age: Number,
    mail: String,
}, {strict: true}, {timestamp: true})
customer.methods.joiValidate = function(obj) {
    const Joi = require('@hapi/joi');
	var schema = Joi.object().keys({
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
		mail: Joi.string().email({ minDomainSegments: 2 }).required(),
		age: Joi.number().required(),
		mobile_number: Joi.number().required(),
	})
	return Joi.validate(obj, schema);
}
module.exports = mongoose.model('customer', customer)