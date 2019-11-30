const User = require('../model/signup');
var bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

const generateToken = data => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, 'adfsdkbsh', { expiresIn: '1d' }, function (error, token) {
        if (error) {
            reject(error);
        } else {
            resolve(token);
        }
    });
  });
};

const saltRounds = 10;
// ==============================================================================
//  GET USER LIST
// =======================
exports.getUsers = async (req, res) => {
    try {
        const userList = await User.find({});
        console.log(userList);
        res.send({ result: userList, message: 'User Listed Successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// ==============================================================================
//  POST USER
// ====================
exports.postUsers = async (req, res) => {
    const data = req.body;
    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        const value = {
            user_name: req.body.user_name,
            password: hash
        };
        const user = new User(value);
        try {
            await user.save();
            res.send('User Added SuccessFully');
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    })

}

exports.login = async (req, res) => {
    const { user_name, password } = req.body;
    const doc = await User.findOne({ user_name });
    if (!doc) {
        return res.status(401).json({ message: 'Invalid Details' });
    }

    const isMatched = await bcrypt.compare(password, doc.password);

    if (!isMatched) {
        return res.status(401).json({ message: 'Invalid Details' });
    }

    const token = await generateToken({ userId: doc._id, user_name });

    res.json({ message: 'Success' });
};
// ==============================================================================
//  GET SINGLE USER
// ========================
exports.getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const User = await User.findById({ id });
        res.send({ data: User, message: 'User Got SuccessFully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// ==============================================================================
//  UPDATE USER
// ========================
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const data = req.body.data;
    try {
        await User.findByIdAndUpdate(id, { $set: data });
        res.send({ message: 'User Updated SuccessFully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// ===============================================================================
//  DELETE USER
// =======================
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.send({ message: 'User Deleted SuccessFully ' });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
 // ===============================================================================