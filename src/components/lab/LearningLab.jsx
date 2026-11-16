import { useState } from 'react'

const initialActions = [
  { name: 'Practice', estimate: 0, tries: 0, color: 'mint' },
  { name: 'Explore', estimate: 0, tries: 0, color: 'orange' },
]
const rewardChance = { Practice: 0.72, Explore: 0.48 }

function chooseAction(actions, step) {
  const unexplored = actions.find((action) => action.tries === 0)
  if (unexplored) return unexplored.name

  if (Math.random() < 0.25) {
    return actions[Math.floor(Math.random() * actions.length)].name
  }

  const bestScore = Math.max(...actions.map((action) => action.estimate))
  const bestActions = actions.filter((action) => action.estimate === bestScore)
  return bestActions[step % bestActions.length].name
}

export default function LearningLab() {
  const [actions, setActions] = useState(initialActions)
  const [round, setRound] = useState(0)
  const [lastResult, setLastResult] = useState(null)
  const positiveCount = actions.reduce((sum, action) => sum + action.estimate * action.tries, 0)
  const totalTries = actions.reduce((sum, action) => sum + action.tries, 0)
  const successRate = totalTries ? Math.round((positiveCount / totalTries) * 100) : 0

  function runRound() {
    const actionName = chooseAction(actions, round)
    const reward = Math.random() < rewardChance[actionName] ? 1 : 0

    setActions((current) => current.map((action) => {
      if (action.name !== actionName) return action
      const tries = action.tries + 1
      return {
        ...action,
        tries,
        estimate: action.estimate + (reward - action.estimate) / tries,
      }
    }))
    setRound((current) => current + 1)
    setLastResult({ actionName, reward })
  }

  function reset() {
    setActions(initialActions)
    setRound(0)
    setLastResult(null)
  }

  return (
    <section className="lab-section" id="lab">
      <div className="section-heading lab-heading">
        <div>
          <p className="eyebrow">YOUR TURN · INTERACTIVE DEMO</p>
          <h2>Teach a tiny agent.</h2>
        </div>
        <p className="section-note">
          It tries two study strategies, gets a reward, and updates its estimate of what works.
        </p>
      </div>

      <div className="lab-panel">
        <div className="lab-main">
          <div className="lab-panel-header">
            <div className="live-label"><span className="status-dot" /> AGENT IS READY</div>
            <button className="reset-button" type="button" onClick={reset}>Reset demo <span aria-hidden="true">↺</span></button>
          </div>

          <div className="agent-message" aria-live="polite">
            <div className="mini-agent">✳</div>
            <div>
              <span className="message-label">AGENT NOTE</span>
              <p>
                {lastResult
                  ? `${lastResult.actionName} got ${lastResult.reward ? 'a reward' : 'no reward'}. I’ve updated my estimate.`
                  : 'I’m choosing between Practice and Explore. Let’s see which strategy earns more rewards.'}
              </p>
            </div>
          </div>

          <div className="action-list">
            {actions.map((action) => (
              <div className="action-row" key={action.name}>
                <span className={`action-dot ${action.color}`} />
                <span className="action-name">{action.name}</span>
                <span className="action-detail">{action.tries} {action.tries === 1 ? 'try' : 'tries'}</span>
                <div className="score-track" aria-label={`${action.name} estimated reward`}>
                  <span className={action.color} style={{ width: `${action.estimate * 100}%` }} />
                </div>
                <span className="score-number">{action.tries ? `${Math.round(action.estimate * 100)}%` : '—'}</span>
              </div>
            ))}
          </div>

          <div className="lab-controls">
            <button className="run-button" type="button" onClick={runRound}>
              Run next round <span aria-hidden="true">↗</span>
            </button>
            <span className="round-count">ROUND {String(round).padStart(2, '0')}</span>
          </div>
        </div>

        <aside className="lab-stats">
          <div className="stat-block">
            <span className="stat-label">TOTAL ROUNDS</span>
            <strong>{round}</strong>
          </div>
          <div className="stat-block">
            <span className="stat-label">REWARD RATE</span>
            <strong>{successRate}<small>%</small></strong>
          </div>
          <div className="how-it-learns">
            <span className="stat-label">WHAT CHANGED?</span>
            <p>Each result nudges that action’s reward estimate toward what actually happened.</p>
          </div>
        </aside>
      </div>
      <p className="lab-footnote">Toy example: rewards are randomized, so a few rounds do not prove which strategy is best.</p>
    </section>
  )
}
