import mongoose from 'mongoose';
const educationSchema = new mongoose.Schema({ school:String, program:String, level:String, startDate:String, endDate:String, description:String }, {timestamps:true});
export default mongoose.model('Education', educationSchema);