import { Router } from 'express'

const router = Router()

// In-memory store so the demo works with zero external services.
// Swap this for a database write or an email send (e.g. nodemailer / Resend)
// when you're ready to receive messages for real.
const messages = []

router.post('/', (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are all required.' })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'That email address looks invalid.' })
  }

  const entry = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString()
  }

  messages.push(entry)
  console.log('New portfolio message:', entry)

  return res.status(201).json({ ok: true })
})

// Handy while developing locally to confirm messages are landing.
router.get('/', (_req, res) => {
  res.json({ count: messages.length, messages })
})

export default router
