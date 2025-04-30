import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB!');
    process.exit();
  })
  .catch((err) => {
    console.error('❌ Connection error:', err.message);
    process.exit(1);
  });
