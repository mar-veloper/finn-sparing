export interface BankProps {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  data: Bank[]
}

export interface Bank {
  title: string
  link: Link
  id: string
  updated: string
  name: string
  bankNumber: string
  bankName: string
  productPackageNumber: string | null
  productPackage: string | null
  freeWithdrawal: string | null
  maxAmount1: number
  maxAmount2: number | null
  maxAmount3: number | null
  maxAmount4: number | null
  maxAmount5: number | null
  maxAmount6: number | null
  group: string
  highestEntryFee: number | null
  highestEntryFeeRequirements: number | null
  capitalizationPeriod: number
  lowestEntryFee: number | null
  lowestEntryFeeRequirements: number | null
  maxAge: number
  monthlySaving: false
  monthlySavingMaxAmount: number | null
  monthlySavingMinAmount: number | null
  marketArea: string
  houseLoanMarket: string
  houseLoanText: string | null
  marketAreaText: string
  maxAmount: number
  minAge: number
  minAmount: number
  followUp: boolean
  isPensionist: boolean
  publishedFrom: string
  publishedTo: null
  highestInterestRate: number
  interestRate1: number
  interestRate2: null | number
  interestRate3: null | number
  interestRate4: null | number
  interestRate5: null | number
  interestRate6: null | number
  specialConditions: string | null
  isStudent: boolean
  trapType: boolean | string
  isPackageNotNeeded: boolean
  membership: null | string
  membershipText: null
}

interface Link {
  rel: string
  href: string
}
