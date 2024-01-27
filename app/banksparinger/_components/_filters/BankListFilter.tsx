'use client'
import { useBanks } from '@/app/hooks/useBanks/index.'
import React from 'react'

const BankListFilter = () => {
  const { bankList } = useBanks()
  return (
    <details className="collapse collapse-arrow !w-96 bg-base-200 ">
      <summary className="collapse-title text-xl font-medium">
        Leverandør
      </summary>

      <ul className="collapse-content ">
        {bankList.map((bank) => (
          <li
            key={bank.id}
            className="w-96 pr-8 text-ellipsis overflow-hidden truncate ..."
          >
            {bank.name}
          </li>
        ))}
      </ul>
    </details>
  )
}

export default BankListFilter
