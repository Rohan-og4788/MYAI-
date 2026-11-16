import AgentBasics from './components/basics/AgentBasics.jsx'
import LearningLab from './components/lab/LearningLab.jsx'

export default function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Agent School home">
          <span className="brand-mark">a.</span>
          <span>agent school</span>
        </a>
        <a className="top-link" href="#lab">
          Open the learning lab <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> A FRIENDLY INTRO TO AI AGENTS</p>
          <h1>Make an agent.<br />Let it <span>learn.</span></h1>
          <p className="hero-description">
            A self-learning agent gets better by acting, seeing what happens, and using feedback to
            choose smarter next time. Learn the loop, then try it yourself.
          </p>
          <a className="primary-link" href="#lab">
            Try the tiny agent <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-art" aria-label="An illustrated agent learning from feedback" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="agent-orb"><span>✳</span></div>
          <span className="orbit-label label-action">ACTION <b>→</b></span>
          <span className="orbit-label label-feedback"><b>↗</b> FEEDBACK</span>
          <span className="orbit-label label-learn">LEARN <b>↻</b></span>
          <div className="art-caption"><span>01</span> THE IMPROVEMENT LOOP</div>
        </div>
      </section>

      <AgentBasics />
      <LearningLab />

      <footer className="footer">
        <a className="brand" href="#top"><span className="brand-mark">a.</span><span>agent school</span></a>
        <span>A tiny, local demo. No data leaves your browser.</span>
      </footer>
    </main>
  )
}
