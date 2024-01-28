'use client'
import { PropsWithChildren } from 'react'

import dynamic from 'next/dynamic'
import AgeFilter from '../components/filters/AgeFilter'
import BankListFilter from '../components/filters/BankListDropdownFilter'
import EntryFeeFilter from '../components/filters/EntryFeeFilter'
import MonthlySavingFilter from '../components/filters/MonthlySavingFilter'
import StatusFilter from '../components/filters/StatusFilter'
import TrapTypeFilter from '../components/filters/TrapTypeFilter'
import { BanksContextProvider } from '../hooks/useBanks/index.'
import Statistics from './_components/Statistics'
import GoalTimeframeFilter from '../components/filters/GoalTimeframeFilter'
import SavingGoalFilter from '../components/filters/SavingGoalFilter'
import ProductDetail from './_components/ProductDetail'
import { parseAsString, useQueryState } from 'nuqs'
import { If, Then } from 'react-if'

const AreaChart = dynamic(() => import('./_components/AreaChart'), {
  ssr: false,
  loading: () => <div className="skeleton w-96 h-400"></div>,
})

const BankSavingsLayout = ({ children }: PropsWithChildren) => {
  const defaultProductToShow = parseAsString.withDefault('')
  const [productToShow] = useQueryState('productToShow', defaultProductToShow)

  return (
    <BanksContextProvider>
      <div className="flex justify-between w-3xl gap-5">
        <div className="max-w-sm w-[330px] flex flex-col gap-5">
          <BankListFilter />
          <StatusFilter />
          <TrapTypeFilter />
          <AgeFilter />
          <GoalTimeframeFilter />
          <SavingGoalFilter />
          <MonthlySavingFilter />
          <EntryFeeFilter />
        </div>
        <div className="w-5/12">{children}</div>
        <div className="w-5/12 max-w-lg">
          <If condition={productToShow}>
            <Then>
              <AreaChart />
              <Statistics />
              <ProductDetail />
            </Then>
          </If>
        </div>
      </div>
    </BanksContextProvider>
  )
}

export default BankSavingsLayout
