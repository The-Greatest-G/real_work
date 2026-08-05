import { Router } from 'express'
const router = Router()

const pool = [
  "Good to see you — build something beautiful today.",
  "You're doing great work. Keep pushing the boundaries.",
  "Small steps every day lead to big results. Let's ship it.",
  "Creativity is your superpower. Use it wisely.",
  "Focus, iterate, and celebrate progress — you're on the right track."
]

router.get('/', (req, res) => {
  const idx = Math.floor(Math.random() * pool.length)
  res.json({ text: pool[idx] })
})

export default router
