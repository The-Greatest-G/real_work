import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
  name: String,
  role: String,
  location: String,
  email: String
}, { timestamps: true })
export default mongoose.model('User', UserSchema)
