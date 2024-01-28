import React from 'react'

const Statistics = () => {
  return (
    <div className="stats shadow w-full my-8">
      <div className="stat place-items-center">
        <div className="stat-title">Din Finansmålet</div>
        <div className="stat-value">650K</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Oppnå Finansmålet</div>
        <div className="stat-value text-secondary">5ÅR</div>
        <div className="stat-desc text-neutral">med (6.4%) per år</div>
      </div>
    </div>
  )
}

export default Statistics
