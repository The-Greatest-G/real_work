import { Router } from 'express'
const router = Router()

router.post('/:mode', (req, res) => {
  const { mode } = req.params
  const { input } = req.body
  if(mode === 'smart'){
    const summary = (input || '').split(/[.?!]\s/)[0] || input
    return res.json({ result: summary || 'No input provided' })
  }
  if(mode === 'discover'){
    return res.json({ result: `Resources for "${input || 'topic'}": Intro; Best practices; Advanced examples.` })
  }
  if(mode === 'advice'){
    return res.json({ result: `Advice for "${input}": 1) Clarify goal 2) Break tasks 3) Prototype 4) Iterate` })
  }
  if(mode === 'study'){
    return res.json({ result: `Study mode created flashcards for input.` })
  }
  if(mode === 'deep'){
    return res.json({ result: `Deep mode ran a toy network on input vector.` })
  }
  res.json({ result: 'Unknown mode' })
})

export default router
