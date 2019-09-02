Address = require('../model/address.model');
// ============================================================================
// ADD
// ==========
exports.createAddress = async (req, res) => {
    const data = req.body;
    const address = new Address(data)
    try {
        await address.save();
        res.send('Address Created Successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// ==============================================================================
// LIST
// ===========
exports.addressList = async (req, res) => {
    try {
        const result = await Address.find({});
        res.send({ data: result, message: 'Get Address List Successfully' })            
    
    } catch (error) {
        res.status(500).send(error);
    }
}
// ===============================================================================
// DETAIL
// ===============
exports.addressDetail = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Address.findById(id);
        res.send({ data: result, message: 'Get Address Successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
}
// ================================================================================
// UPDATE
// ============
exports.addressModify = async (req, res) => {
    const id = req.params.id;
    const data = req.body.data;
    try {
        await Address.findByIdAndUpdate(id, { $set: data });
        res.json({result: { message: 'Address Updated Successfully'}});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// ==================================================================================
// DELETE
// =============
exports.removeAddress = async (req, res) => {
    const id = req.params.id;
    try {
        await Address.findByIdAndRemove(id);
        res.json({result:{ message:'Address Deleted Successfully' }});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// =================================================================================