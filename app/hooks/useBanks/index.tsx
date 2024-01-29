'use client'
import { Status } from '@/app/components/filters/StatusFilter'
import { TrapType } from '@/app/components/filters/TrapTypeFilter'
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
  useQueryStates,
} from 'nuqs'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ProcessBanksTypes, processBanks } from './bank.filters'
import {
  findHighestInterestRateProperty,
  getAllBankId,
  paginate,
  sortByInterestRate,
} from './bank.helpers'
import { Bank, BankProps } from './bank.types'
import banksListJson from './static/banks.json'

interface ContextProps {
  banks: BankProps
  bankIdAvailable: string[]
  bankList: {
    name: string
    id: string
  }[]
  highestInterestRate: number
}

const BanksContext = createContext<ContextProps | undefined>(undefined)

export const BanksContextProvider = ({ children }: PropsWithChildren) => {
  const [banksToRender, setBanksToRender] = useState<BankProps>({
    data: [],
    totalPages: 0,
    currentPage: 0,
    itemsPerPage: 0,
    totalItems: 0,
  })

  const [processedBanks, setProcessedBanks] = useState<{
    banks: Bank[]
    type: ProcessBanksTypes
  }>({
    banks: [],
    type: ProcessBanksTypes.DEFAULT,
  })

  const defaultFilters = {
    amount: parseAsInteger.withDefault(0),
    monthlySaving: parseAsInteger.withDefault(0),
    minAge: parseAsInteger.withDefault(0),
    maxAge: parseAsInteger.withDefault(100),
    trapType: parseAsStringEnum(Object.values(TrapType)).withDefault(
      TrapType.ACCEPTED
    ),
    status: parseAsStringEnum(Object.values(Status)).withDefault(Status.OTHER),
    keywords: parseAsArrayOf(parseAsString).withDefault([]),
    banksSelected: parseAsArrayOf(parseAsString).withDefault([]),
    page: parseAsInteger.withDefault(1),
  }

  const [filters] = useQueryStates(defaultFilters)

  useEffect(() => {
    const availableBanks = processBanks(filters)
    setProcessedBanks(availableBanks)

    const paginatedBanks = paginate({
      items: sortByInterestRate(availableBanks.banks),
      currentPage: filters.page,
      itemsPerPage: 10,
    })

    setBanksToRender({ ...paginatedBanks })
  }, [filters])

  useEffect(() => {}, [filters.status, filters.trapType])

  const { highestInterestRate } = findHighestInterestRateProperty(
    banksToRender.data[0] || []
  )

  return (
    <BanksContext.Provider
      value={{
        bankIdAvailable: getAllBankId(processedBanks.banks),
        banks: banksToRender,
        bankList: banksListJson,
        highestInterestRate,
      }}
    >
      {children}
    </BanksContext.Provider>
  )
}

export const useBanks = (): ContextProps => {
  const context = useContext(BanksContext)
  if (!context) {
    throw new Error('useBanks must be used within a BanksContextProvider')
  }
  return context
}
