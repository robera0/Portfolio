import { useRef, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { contact } from '../data/content.js'

function MagneticEmail() {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * 0.15
    const y = (e.clientY - r.top - r.height / 2) * 0.3
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  return (
    <a
      ref={ref}
      href={`mailto:${contact.email}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="magnetic font-display fs-3 md:fs-4 link-trace inline-block break-all"
    >
      {contact.email}
    </a>
  )
}

export default function Contact() {
  const ref = useReveal()
  const linksRef = useReveal()
  const formRef = useReveal()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="container-edge py-24 md:py-40 border-t border-line">
      <div ref={ref} className="reveal">
        <h2 className="font-display fs-3 mb-10">Let's talk</h2>
        <MagneticEmail />
      </div>

      <div ref={linksRef} className="reveal mt-16 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted">
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="link-trace text-paper">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link-trace text-paper">LinkedIn</a>
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="link-trace text-paper">Instagram</a>
        <a href={`tel:${contact.phone}`} className="link-trace text-paper">{contact.phoneDisplay}</a>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="reveal mt-16 max-w-xl grid gap-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Or send a message directly</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">Name</label>
            <input
              id="name" name="name" type="text" required
              value={form.name} onChange={handleChange}
              className="w-full bg-transparent border-b border-line py-2 fs-0 focus-visible:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">Email</label>
            <input
              id="email" name="email" type="email" required
              value={form.email} onChange={handleChange}
              className="w-full bg-transparent border-b border-line py-2 fs-0 focus-visible:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">Message</label>
          <textarea
            id="message" name="message" rows="4" required
            value={form.message} onChange={handleChange}
            className="w-full bg-transparent border-b border-line py-2 fs-0 focus-visible:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        <div className="flex items-center gap-6">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="link-trace font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send message ↗'}
          </button>
          {status === 'sent' && (
            <span className="font-mono text-xs text-brass uppercase tracking-widest">Sent — thank you</span>
          )}
          {status === 'error' && (
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              Couldn't send — email me directly
            </span>
          )}
        </div>
      </form>
    </section>
  )
}
