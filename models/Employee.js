const mongoose = require('mongoose');


// Employee info
const EmployeeSchema = new mongoose.Schema(
    {
        eid: { type: String, required: true, unique: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, unique: true },
        gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
        designation: { type: String, required: true },
        salary: { type: Number, required: true, min: 1000 },
        date_of_joining: { type: Date, required: true },
        department: { type: String, required: true },
        employee_photo: { type: String }, 
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('Employee', EmployeeSchema);
