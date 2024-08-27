import mongoose from 'mongoose';
import { ENV_VARS } from './envVars.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log('MongoDB connected:' + conn.connection.host);
  } catch (error) {
    console.error('Error connecting to MongoDB' + error.message);
    process.exit(1); // 1은 오류가 있음을 의미하고, 0은 성공을 의미합니다.
  }
};
