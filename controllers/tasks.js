import Task from "../models/Task.js";

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(201).json({tasks});

    } catch (e) {
        res.status(500).json({msg: e});
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});

    } catch (e) {
        res.status(500).json({msg: e});
    }
};

const getTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOne({_id: taskId});

        if (!task)
            return res.status(404).json({msg: `No task with id ${id}`});

        res.status(201).json({task});
    } catch (e) {

    }
};

const updateTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
            new: true, runValidators: true
        });

        res.status(200).json({ task });

    } catch (e) {
        res.status(500).json({msg: e});

    }
};

const deleteTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId});

        if (!task)
            return res.status(404).json({msg: `No task with id ${id}`});

        res.status(200).json({task});

    } catch (e) {
        res.status(500).json({msg: e});
    }
};

export {getAllTasks, createTask, getTask, updateTask, deleteTask};
