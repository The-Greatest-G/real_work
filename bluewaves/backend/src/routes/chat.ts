import { Router } from 'express'
const router = Router()

router.post('/', (req, res) => {
  const { text } = req.body
  let reply = "Thanks for that. I can summarize, give advice, or help you plan next steps."
  if(!text) reply = "Say something and I'll respond."
  if(text && /help|how/i.test(text)) reply = "Sure — tell me more about what you want to achieve and I'll suggest a plan."
  if(text && /project/i.test(text)) reply = "For projects break tasks into milestones and schedule weekly reviews."
  res.json({ reply })
})

export default router
