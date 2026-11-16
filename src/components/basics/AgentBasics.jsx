const steps = [
  {
    number: '01',
    title: 'Observe',
    description: 'Read the current situation. What does the agent know right now?',
    icon: '◉',
  },
  {
    number: '02',
    title: 'Act',
    description: 'Choose an action that could move toward the goal.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Learn',
    description: 'Use the result as feedback. Keep what works; adjust what does not.',
    icon: '↻',
  },
]

export default function AgentBasics() {
  return (
    <section className="basics-section" id="basics">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE SHORT VERSION</p>
          <h2>Learning is a loop.</h2>
        </div>
        <p className="section-note">
          The agent is not born knowing the answer. It builds a better strategy from experience.
        </p>
      </div>

      <div className="step-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <div className="step-topline"><span>{step.number} / 03</span><span className="step-icon">{step.icon}</span></div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <div className="concept-strip">
        <span className="concept-label">THREE USEFUL WORDS</span>
        <p><strong>Agent</strong> makes choices <i>·</i> <strong>Environment</strong> responds <i>·</i> <strong>Reward</strong> is the feedback</p>
      </div>
    </section>
  )
}
