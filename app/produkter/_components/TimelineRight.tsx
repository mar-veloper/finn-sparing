import { Bank } from '@/app/hooks/useBanks/bank.types'
import { useBanks } from '@/app/hooks/useBanks/index.'
import { parseAsString, useQueryState } from 'nuqs'
import React from 'react'
import { If, Then } from 'react-if'

interface Props {
  bank: Bank
  interestRate: number
}

const TimelineRight = ({ bank, interestRate }: Props) => {
  const { highestInterestRate } = useBanks()

  const defaultProductToShow = parseAsString.withDefault('')

  const [, setProductToShow] = useQueryState(
    'productToShow',
    defaultProductToShow
  )

  return (
    <div className="timeline-middle timeline-end !self-start mx-2 relative">
      <span className="text-md absolute top-1 left-2 z-10">
        Rentestats {interestRate}%
      </span>{' '}
      <progress
        className="progress progress-success w-64 h-8 bg-transparent relative"
        value={interestRate}
        max={highestInterestRate}
      ></progress>
      <div className="timeline-icon relative"></div>
      <button
        onClick={() => setProductToShow(bank.id)}
        className="btn btn-outline border-none btn-secondary btn-sm  absolute top-10 left-2 z-10"
      >
        {'Les mer →'}
      </button>
    </div>
  )
}

export default TimelineRight
