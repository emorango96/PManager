import mongoose from "mongoose";
import taskModel from "../models/taskModel.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });   
    }
}

export const createTask = async (req, res) => {
    const task = req.body;
    const newTask = new taskModel(task);

    try {
        await newTask.save();

        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No task with that id');

    const updatedTask = await taskModel.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedTask);
}