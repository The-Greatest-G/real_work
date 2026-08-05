import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.json({
    name: 'gogfrey',
    role: 'Developer • Frontend Enthusiast',
    location: 'Iwambi, Mbeya Region, Tanzania',
    email: 'gogfrey@example.com'
  })
})

export default router
