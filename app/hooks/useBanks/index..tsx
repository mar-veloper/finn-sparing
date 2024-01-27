'use client'
import { parseAsInteger, useQueryState } from 'nuqs'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import {
  convertToCorrectType,
  findHighestInterestRateProperty,
  getAllBankNames,
  getKeywords,
  paginate,
  sortByInterestRate,
} from './bank.helpers'
import { Bank, BankProps } from './bank.types'
import banksJson from './banksparing.json'
interface ContextProps {
  banks: BankProps
  keywords: string[]
  bankList: {
    name: string
    id: string
  }[]
  highestInterestRate: number
  updateBankContext: (newValues: Partial<ContextProps>) => void
}

const BanksContext = createContext<ContextProps | undefined>(undefined)

interface BanksContextProviderProps {
  children: ReactNode
}

export const BanksContextProvider: React.FC<BanksContextProviderProps> = ({
  children,
}) => {
  const [sortedBanks] = useState<Bank[]>(getSortedBanks(OrderBy.desc))

  const { highestInterestRate } = findHighestInterestRateProperty(
    sortedBanks[0]
  )

  const bankList = getAllBankNames(sortedBanks)

  const deaultPage = parseAsInteger.withDefault(1)
  const [page] = useQueryState('page', deaultPage)

  const paginatedBanks = paginate({
    items: sortedBanks,
    currentPage: page,
    itemsPerPage: 10,
  })

  const [state, setState] = useState<ContextProps>({
    banks: paginatedBanks,
    bankList,
    keywords: getKeywords(sortedBanks),
    highestInterestRate,
    updateBankContext: (newValues) => {
      setState((prevState) => ({ ...prevState, ...newValues }))
    },
  })

  return <BanksContext.Provider value={state}>{children}</BanksContext.Provider>
}

export const useBanks = (): ContextProps => {
  const context = useContext(BanksContext)
  if (!context) {
    throw new Error('useBanks must be used within a BanksContextProvider')
  }
  return context
}

enum OrderBy {
  asc = 'asc',
  desc = 'desc',
}

function getSortedBanks(order: OrderBy) {
  const stringifiedBanks = JSON.stringify(banksJson)
  const parsedBanks = JSON.parse(stringifiedBanks, convertToCorrectType)
  const sortedBanks = sortByInterestRate(parsedBanks, order)
  return sortedBanks
}
