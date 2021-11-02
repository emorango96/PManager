import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({ 
    id: Number,
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    totalTime: {
        type: Date,
        default: 0
    },
    completed: {
        type: Boolean,
        default: false
    },
    employee_id: Number,
    department_id: Number
});

const taskModel = mongoose.model('taskModel', taskSchema);

export default taskModel;