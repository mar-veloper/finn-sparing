import classNames from 'classnames'
import React from 'react'
import { Bank } from '../../../hooks/useBanks/bank.types'

interface Props {
  isEven: boolean
  bank: Bank
}

const TimelineLeft = ({ isEven, bank }: Props) => {
  return (
    <div
      className={classNames({
        '!mb-16  timeline-start md:text-end  ': true,
      })}
    >
      <time className="font-mono italic">{bank.bankName}</time>
      <div
        className={classNames({
          'text-lg font-bold': true,
        })}
      >
        {bank.name}
      </div>
    </div>
  )
}

export default TimelineLeft
