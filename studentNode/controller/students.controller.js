const Student = require('../model/students.model');
const Address = require('../model/address.model');
// ==========================================================================
// ADD
// =======
exports.createStudent = async (req, res) => {
    const data = req.body;
    const student = new Student(data);
    try {
        await student.save();
        res.send({ data: data, message: 'Student Created Successfully' });
    } catch (error) {
        res.status(500).json({ data: data, message: error.message });
    }
}
// ===========================================================================
// LIST
// ============
exports.studentList = async (req, res) => {
    try {
        const result = await Student.aggregate([
            {
                "$project": {
                    "_id": {
                        "$toString": "$_id"
                    },
                    "first_name": 1
                }
            },
            {
                $lookup:
                {
                    from: 'addresses',
                    localField: '_id',
                    foreignField: 'student_id',
                    as: 'address'
                }
            }
        ])

        res.send({ data: result, message: 'Get Student List Successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// =============================================================================
// DETAIL
// =============
exports.studentDetail = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Student.findById(id);
        res.send({ data: result, message: 'Get Student Successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// ================================================================================
// UPDATE
// ================
exports.studentModify = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await Student.findByIdAndUpdate(id, { $set: data });
        res.send('Student Updated Successfully');
    } catch (error) {
        res.status(500).send(error);
    }
}
// ====================================================================================
// DELETE
// ==============
exports.removeStudent = async (req, res) => {
    const id = req.params.id;
    try {
        await Student.findByIdAndRemove(id);
        res.send('Student Deleted Successfully');
    } catch (error) {
        res.status(500).send(error);
    }
}
// =======================================================================================