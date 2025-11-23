import Contact from '../models/Contact.js';
export const createContact=async(req,res)=>{try{const doc=await Contact.create(req.body);res.status(201).json(doc);}catch(e){res.status(400).json({message:e.message});}};
export const getContacts=async(_req,res)=>{res.json(await Contact.find().sort({createdAt:-1}));};
export const deleteContact=async(req,res)=>{const d=await Contact.findByIdAndDelete(req.params.id); if(!d) return res.sendStatus(404); res.json({ok:true});};