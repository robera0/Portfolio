import useReveal from '../hooks/useReveal.js'
import { projects, otherBuilds } from '../data/content.js'

function ProjectCard({ project, index }) {
  const ref = useReveal()
  return (
    <article
      ref={ref}
      className="reveal grid md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-line items-center group"
    >
      <div className="md:col-span-4 flex items-center gap-2 relative">
        <div className="perf h-24 hidden md:block" />
        <div className="stub px-6 py-5 w-full relative">
          {project.verified && (
            <span className="stamp absolute -top-3 -right-3 font-mono text-[9px] uppercase tracking-widest px-2 py-1 rotate-[-8deg]">
              Verified
            </span>
          )}
          <p className="font-mono text-[10px] uppercase tracking-widest text-brass mb-1">
            Ticket / {project.id}
          </p>
          <p className="font-display fs-1 leading-tight">{project.name}</p>
          <p className="font-mono text-[10px] text-muted mt-2">STATUS &mdash; {project.status}</p>
        </div>
      </div>

      <div className="md:col-span-5">
        <p className="fs-0 text-paper mb-3">{project.description}</p>
        <p className="font-mono text-xs text-muted uppercase tracking-widest">{project.tech}</p>
      </div>

      <div className="md:col-span-3 flex md:justify-end">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-trace font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2"
        >
          View live ↗
        </a>
      </div>
    </article>
  )
}

export default function Work() {
  const headerRef = useReveal()
  const listRef = useReveal()

  return (
    <section id="work" className="container-edge py-24 md:py-32 border-t border-line">
      <div ref={headerRef} className="reveal flex items-end justify-between mb-16">
        <h2 className="font-display fs-3">Selected Work</h2>
        <span className="font-mono text-xs uppercase tracking-widest text-muted hidden md:block">
          {String(projects.length).padStart(2, '0')} shipped
        </span>
      </div>

      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}

      <div className="border-t border-line" />

      <div className="mt-20 md:mt-28">
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">Other builds</p>
        <ul ref={listRef} className="reveal divide-y divide-line font-mono text-sm">
          {otherBuilds.map((b) => (
            <li key={b.id} className="grid grid-cols-12 py-4 gap-4 items-baseline">
              <span className="col-span-1 text-muted">{b.id}</span>
              <span className="col-span-7 md:col-span-5 text-paper">{b.name}</span>
              <span className="col-span-4 md:col-span-6 text-muted">{b.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
