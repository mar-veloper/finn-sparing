'use client'
import { Bank } from '../hooks/useBanks/bank.types'

import { findHighestInterestRateProperty } from '../hooks/useBanks/bank.helpers'
import { useBanks } from '../hooks/useBanks'
import TimelineLeft from './_components/TimelineLeft'
import TimelineRight from './_components/TimelineRight'
import Pagination from './_components/Pagination'

const ProductsPage = () => {
  const { banks } = useBanks()

  return (
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
              <TimelineRight bank={bank} interestRate={interestRate} />
            </li>
          )
        })}
        <Pagination />
      </ul>
    </div>
  )
}

export default ProductsPage
