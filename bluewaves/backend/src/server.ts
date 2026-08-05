import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import messages from './routes/messages'
import user from './routes/user'
import chat from './routes/chat'
import modes from './routes/modes'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/messages', messages)
app.use('/api/user', user)
app.use('/api/chat', chat)
app.use('/api/modes', modes)

const PORT = process.env.PORT || 4000
connectDB().then(()=> {
  app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))
})
