import { stack } from "../data/content.js";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 container-edge overflow-hidden"
    >
      <div className="noise absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-6">
        <p className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-muted self-start pt-2">
          Addis&nbsp;Ababa, ET &mdash; 2026
          <br />
          Full-Stack Engineer
        </p>

        <h1 className="md:col-span-8 font-display fs-4 leading-[1.02] tracking-tight">
          I build the systems that{" "}
          <span className="text-accent">issue the ticket</span>,{" "}
          <span className="italic">verify the receipt</span>, and hold under
          load.
        </h1>

        <p className="md:col-start-5 md:col-span-6 fs-0 text-muted max-w-xl">
          Robera Ararsa im an inspiring Software developer working across React,
          Node, Express and MongoDB, currently shipping an event ticketing
          platform and a restaurant revenue verification system out of Addis
          Ababa, alongside frontend work for an international NGO.
        </p>
      </div>

      <div className="relative mt-16 md:mt-24 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest text-muted border-t border-line pt-6">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </section>
  );
}
