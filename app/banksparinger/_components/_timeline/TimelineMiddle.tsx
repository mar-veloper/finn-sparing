import { useBanks } from '@/app/hooks/useBanks/index.'
import React from 'react'

interface Props {
  rank: number
  interestRate: number
}

const TimelineMiddle = ({ rank, interestRate }: Props) => {
  const { highestInterestRate } = useBanks()

  return (
    <div className="timeline-middle timeline-end !self-start mx-2 relative">
      <span className="text-md absolute top-1 left-2 z-10">
        Rentestats {interestRate}%
      </span>
      <progress
        className="progress progress-success w-64 h-8 bg-transparent relative"
        value={interestRate}
        max={highestInterestRate}
      ></progress>
      <div className="timeline-icon relative"></div>
    </div>
  )
}

export default TimelineMiddle
