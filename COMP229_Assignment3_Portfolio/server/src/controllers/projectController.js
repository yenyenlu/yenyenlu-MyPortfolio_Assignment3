import Project from '../models/Project.js';
export const createProject=async(req,res)=>{try{const doc=await Project.create(req.body);res.status(201).json(doc);}catch(e){res.status(400).json({message:e.message});}};
export const getProjects=async(_req,res)=>{res.json(await Project.find().sort({createdAt:-1}));};
export const getProject=async(req,res)=>{const d=await Project.findById(req.params.id); if(!d) return res.sendStatus(404); res.json(d);};
export const updateProject=async(req,res)=>{const d=await Project.findByIdAndUpdate(req.params.id,req.body,{new:true}); if(!d) return res.sendStatus(404); res.json(d);};
export const deleteProject=async(req,res)=>{const d=await Project.findByIdAndDelete(req.params.id); if(!d) return res.sendStatus(404); res.json({ok:true});};