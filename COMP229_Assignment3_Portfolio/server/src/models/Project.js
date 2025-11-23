import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({ title:String, repoUrl:String, liveUrl:String, description:String, tech:[String] }, {timestamps:true});
export default mongoose.model('Project', projectSchema);