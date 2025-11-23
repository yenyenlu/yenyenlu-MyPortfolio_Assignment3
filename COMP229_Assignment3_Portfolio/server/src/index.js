import 'dotenv/config'; import express from 'express'; import cors from 'cors'; import morgan from 'morgan'; import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js'; import eduRoutes from './routes/education.js'; import projRoutes from './routes/project.js'; import contactRoutes from './routes/contact.js';
const app=express(); app.use(cors()); app.use(express.json()); app.use(morgan('dev'));
app.get('/', (_req,res)=>res.json({ok:true,service:'portfolio-server'}));
app.use('/auth', authRoutes); app.use('/educations', eduRoutes); app.use('/projects', projRoutes); app.use('/contacts', contactRoutes);
const PORT=process.env.PORT||5000;
connectDB(process.env.MONGO_URI).then(()=> app.listen(PORT,()=>console.log(`🚀 Server http://localhost:${PORT}`)));