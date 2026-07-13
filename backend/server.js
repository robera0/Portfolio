import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRouter from './routes/contact.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRouter)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'robera-portfolio-backend' })
})

// Serve the built React app in production:
// run `npm run build` in /frontend first, which outputs to /frontend/dist.
const distPath = path.join(__dirname, '..', 'frontend', 'dist')
app.use(express.static(distPath))
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) res.status(404).send('Build the frontend first: cd frontend && npm run build')
  })
})

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`)
})
