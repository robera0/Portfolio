export default function Footer() {
  return (
    <footer className="container-edge py-8 border-t border-line flex flex-col md:flex-row justify-between gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
      <span>&copy; {new Date().getFullYear()} Robera Ararsa</span>
      <span>Built with React, Node & a lot of coffee</span>
    </footer>
  )
}
