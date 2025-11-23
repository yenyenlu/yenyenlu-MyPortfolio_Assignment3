import Education from '../models/Education.js';
export const createEducation=async(req,res)=>{try{const doc=await Education.create(req.body);res.status(201).json(doc);}catch(e){res.status(400).json({message:e.message});}};
export const getEducations=async(_req,res)=>{res.json(await Education.find().sort({createdAt:-1}));};
export const getEducation=async(req,res)=>{const d=await Education.findById(req.params.id); if(!d) return res.sendStatus(404); res.json(d);};
export const updateEducation=async(req,res)=>{const d=await Education.findByIdAndUpdate(req.params.id,req.body,{new:true}); if(!d) return res.sendStatus(404); res.json(d);};
export const deleteEducation=async(req,res)=>{const d=await Education.findByIdAndDelete(req.params.id); if(!d) return res.sendStatus(404); res.json({ok:true});};