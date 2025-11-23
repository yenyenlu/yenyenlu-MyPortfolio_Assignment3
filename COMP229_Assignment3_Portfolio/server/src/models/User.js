import mongoose from 'mongoose'; import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema({ name:String, email:{type:String,unique:true}, password:String, role:{type:String,enum:['user','admin'],default:'user'} }, {timestamps:true});
userSchema.pre('save', async function(next){ if(!this.isModified('password')) return next(); const salt=await bcrypt.genSalt(10); this.password=await bcrypt.hash(this.password,salt); next(); });
userSchema.methods.comparePassword = function(c){ return bcrypt.compare(c,this.password); };
export default mongoose.model('User', userSchema);