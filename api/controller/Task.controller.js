import TaskModel from "../models/Task.model.js";

export const createTask =async (req,res)=>{
    try {
        const {title,description} = req.body;
        const newTask = new TaskModel({
            title,description
        })
        await newTask.save();

        res.status(200).json({
            status:true,
            message:"Task created successfully",
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
};
export const getAllTask =async (req,res)=>{
    try {
        const taskData = await TaskModel.find().sort({createdAt:-1}).lean().exec(); //to get all tasks in sorted order 

        res.status(200).json({
            status:true,
            taskData
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
};

export const ShowTask =async (req,res)=>{
    try {
        const {taskid} = req.params;
        const taskData = await TaskModel.findById(taskid).lean().exec();

        res.status(200).json({
            status:true,
            taskData
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
};
export const UpdateTask =async (req,res)=>{
    try {
        const {taskid} = req.params;
        const {title,description,status} = req.body;
        const taskData = await TaskModel.findByIdAndUpdate(taskid, { title, description, status }, { new: true })
        
        res.status(200).json({
            status:true,
            message:"Task updated successfully",
            taskData
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
};

export const DeleteTask =async (req,res)=>{
    try {
        const {taskid} = req.params;
        const taskData = await TaskModel.findByIdAndDelete(taskid); //updateded data mile isliye new=true

        res.status(200).json({
            status:true,
            message:"Task deleted successfully",
            taskData
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
};