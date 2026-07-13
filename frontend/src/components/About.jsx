import useReveal from '../hooks/useReveal.js'
import { experience, education } from '../data/content.js'

export default function About() {
  const introRef = useReveal()
  const bodyRef = useReveal()

  return (
    <section id="about" className="container-edge py-24 md:py-32 border-t border-line">
      <div className="grid md:grid-cols-12 gap-10">
        <div ref={introRef} className="reveal md:col-span-4">
          <h2 className="font-display fs-3 mb-6">About</h2>
          <p className="fs-0 text-muted">
            I care more about what breaks under real traffic than what looks good
            in a demo — atomic writes, cache invalidation, cookies that actually
            survive a CORS-locked browser.
          </p>
        </div>

        <div ref={bodyRef} className="reveal md:col-span-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Experience</p>
          <dl className="divide-y divide-line font-mono text-sm mb-14">
            {experience.map((e) => (
              <div key={e.place} className="grid grid-cols-12 py-5 gap-4">
                <dt className="col-span-4 md:col-span-3 text-muted uppercase tracking-widest text-xs pt-0.5">
                  {e.place}
                </dt>
                <dd className="col-span-8 md:col-span-9">{e.detail}</dd>
              </div>
            ))}
          </dl>

          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Education</p>
          <dl className="divide-y divide-line font-mono text-sm mb-14">
            {education.map((e) => (
              <div key={e.label} className="grid grid-cols-12 py-5 gap-4">
                <dt className="col-span-4 md:col-span-3 text-muted uppercase tracking-widest text-xs pt-0.5">
                  {e.label}
                </dt>
                <dd className="col-span-8 md:col-span-9">{e.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-2 gap-6 font-mono text-sm">
            <div>
              <p className="text-muted uppercase tracking-widest text-xs mb-2">Languages</p>
              <p>English, Amharic</p>
            </div>
            <div>
              <p className="text-muted uppercase tracking-widest text-xs mb-2">Based</p>
              <p>Addis Ababa, Ethiopia — open to remote work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
