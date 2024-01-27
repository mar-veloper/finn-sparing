'use client'
import { Bank } from '../hooks/useBanks/bank.types'

import { findHighestInterestRateProperty } from '../hooks/useBanks/bank.helpers'
import { useBanks } from '../hooks/useBanks/index.'
import TimelineLeft from './_components/_timeline/TimelineLeft'
import TimelineMiddle from './_components/_timeline/TimelineMiddle'
import { Suspense } from 'react'

const ProductsPage = () => {
  const { banks } = useBanks()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {banks.data.map((bank: Bank, index: number) => {
            const isEven = (index + 1) % 2 === 0
            const rank =
              (banks.currentPage - 1) * banks.itemsPerPage + (index + 1)
            const { highestInterestRate: interestRate } =
              findHighestInterestRateProperty(bank)

            return (
              <li key={bank.id}>
                <TimelineLeft isEven={isEven} bank={bank} />
                <TimelineMiddle rank={rank} interestRate={interestRate} />
              </li>
            )
          })}
        </ul>
      </div>
    </Suspense>
  )
}

export default ProductsPage
