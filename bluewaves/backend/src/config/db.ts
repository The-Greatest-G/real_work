import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/bluewave'
export async function connectDB(){
  await mongoose.connect(MONGO)
  console.log('MongoDB connected')
}
