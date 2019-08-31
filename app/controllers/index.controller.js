

const Customer = require('../model/index.model');
exports.customerList = (req, res) => {
    Customer.find({})
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(500).json({ message: error.message })
        })
}
exports.postData = (req, res) => {
    let customer = new Customer(req.body);
    var err = customer.joiValidate(req.body);
    if (!err.error) {
        customer.save()
            .then(() => {
                res.send('Customer Added Successfully')
            })
            .catch((error) => { res.send(500).json({ message: error.message }) })
    } else {
        res.send(err.error)
    }
}
exports.customerDetail = (req, res) => {
    const id = req.params.id;
    Customer.findById(id)
        .then((result) => {
            res.send(result)
        })
        .catch(error => res.send(500).json({ message: error.message }))
}

exports.updateDetail = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Customer.findByIdAndUpdate(id, { $set: data })
        .then(() => {
            res.send('Customer Updated Successfully');
        })
        .catch(error => res.send(500).json({ message: error.message }))
}
exports.deletData = (req, res) => {
    const id = req.params.id;
    Customer.findByIdAndDelete(id)
        .then(() => {
            res.send('Customer Deleted Successfully');
        })
        .catch(error => res.send(500).json({ message: error.message }))
}