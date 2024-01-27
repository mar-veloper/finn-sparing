import React, { PropsWithChildren } from 'react'
import BarChart from './_components/_charts/BarChart'
import BankListFilter from './_components/_filters/BankListFilter'
import { BanksContextProvider } from '../hooks/useBanks/index.'

const BankSavingsLayout = ({ children }: PropsWithChildren) => {
  return (
    <BanksContextProvider>
      <div className="flex justify-between w-full">
        <div className="max-w-screen-sm">
          <BankListFilter />
        </div>
        <div className="max-w-screen-md">{children}</div>
        <div className="max-w-screen-md">
          <BarChart />
        </div>
      </div>
    </BanksContextProvider>
  )
}

export default BankSavingsLayout
