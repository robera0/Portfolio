import { useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  { href: 'https://github.com/robera0', label: 'GitHub', external: true }
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-line/60 backdrop-blur bg-ink/80">
        <div className="container-edge flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="font-display text-lg tracking-tight">R. Ararsa</a>

          <nav className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-muted">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener' : undefined}
                className="link-trace text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
          >
            <span className="block w-6 h-px bg-paper" />
            <span className="block w-4 h-px bg-paper" />
          </button>
        </div>
      </header>

      <div className={`mnav fixed inset-0 z-50 bg-ink flex flex-col justify-center px-8 md:hidden ${open ? 'open' : ''}`}>
        <button
          aria-label="Close menu"
          onClick={close}
          className="absolute top-6 right-6 text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col gap-6">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener' : undefined}
              onClick={close}
              className="stagger font-display fs-2"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
