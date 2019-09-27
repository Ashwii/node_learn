const User = require('../model/signup');
// ==============================================================================
//  GET USER LIST
// =======================
exports.getUsers = async (req, res) => {
    try {
        const userList = await User.find({});
        res.send({result: userList, message: 'User Listed Successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
// ==============================================================================
//  POST USER
// ====================
exports.postUsers = async (req, res) => {
    const data = req.body;
    const user = new User(data);
    try {
        await user.save();
        res.send('User Added SuccessFully');
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
// ==============================================================================
//  GET SINGLE USER
// ========================
exports.getSingleUser = async (req, res) => {
 const id = req.params.id;
 try {
     const User = await User.findById({id});
     res.send({data: User, message: 'User Got SuccessFully'});
 } catch (error) {
     res.status(500).json({message: error.message});
 }
}
// ==============================================================================
//  UPDATE USER
// ========================
exports.updateUser = async (req, res) => {
 const id = req.params.id;
 const data = req.body.data;
    try {
        await User.findByIdAndUpdate(id, {$set: data});
        res.send({ message: 'User Updated SuccessFully' });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
 }
// ===============================================================================
//  DELETE USER
// =======================
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.send ({ message: 'User Deleted SuccessFully '});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
 // ===============================================================================