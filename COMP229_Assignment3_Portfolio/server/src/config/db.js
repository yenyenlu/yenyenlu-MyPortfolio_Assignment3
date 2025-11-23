import mongoose from 'mongoose';
export const connectDB = async (uri) => {
  try { await mongoose.connect(uri, { dbName: 'portfolio' }); console.log('✅ MongoDB connected'); }
  catch (err) { console.error('❌ Mongo connect error:', err.message); process.exit(1); }
};