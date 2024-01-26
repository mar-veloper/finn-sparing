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
  maxAmount1: string
  maxAmount2: string | null
  maxAmount3: string | null
  maxAmount4: string | null
  maxAmount5: string | null
  maxAmount6: string | null
  group: string
  highestEntryFee: string | null
  highestEntryFeeRequirements: string | null
  capitalizationPeriod: string
  lowestEntryFee: string | null
  lowestEntryFeeRequirements: string | null
  maxAge: string
  monthlySaving: false
  monthlySavingMaxAmount: string | null
  monthlySavingMinAmount: string | null
  marketArea: string
  houseLoanMarket: string
  houseLoanText: string | null
  marketAreaText: string
  maxAmount: string
  minAge: string
  minAmount: string
  followUp: boolean
  pensioner: boolean
  publishedFrom: '03.11.2023'
  publishedTo: null
  interestRate1: string
  interestRate2: null | string
  interestRate3: null | string
  interestRate4: null | string
  interestRate5: null | string
  interestRate6: null | string
  specialConditions: string | null
  student: boolean
  trapType: boolean | string
  isPackageNotNeeded: boolean
  membership: null | string
  membershipText: null
}

interface Link {
  rel: string
  href: string
}
