import { Bank } from './bank.types'

interface PaginateArgs {
  items: Bank[]
  currentPage: number
  itemsPerPage: number
}

export function paginate({ items, currentPage, itemsPerPage }: PaginateArgs) {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const totalPages = Math.ceil(items.length / itemsPerPage)

  const paginatedItems = items.slice(startIndex, endIndex)
  const newData = paginatedItems.map((item) => {
    const { highestInterestRate, indexOfHighestInterestRate } =
      findHighestInterestRateProperty(item)

    return {
      ...item,
      highestInterestRate,
      indexOfHighestInterestRate,
    }
  })

  return {
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems: items.length,
    data: newData,
  }
}

export function sortByInterestRate(array: Bank[], order: string = 'desc') {
  return array.sort((a, b) => {
    const interestRateA = findHighestInterestRateProperty(a).highestInterestRate
    const interestRateB = findHighestInterestRateProperty(b).highestInterestRate

    const sortedByORder =
      order === 'desc'
        ? interestRateB - interestRateA
        : interestRateA - interestRateB

    return sortedByORder
  })
}

export function findHighestInterestRateProperty(bank: Bank) {
  const interestRates = [
    bank.interestRate1,
    bank.interestRate2,
    bank.interestRate3,
    bank.interestRate4,
    bank.interestRate5,
    bank.interestRate6,
  ].filter((rate) => rate !== null)

  const highestInterestRate = Math.max(...(interestRates as number[]))

  const indexOfHighestInterestRate = interestRates.findIndex(
    (rate) => rate === highestInterestRate
  )

  return {
    highestInterestRate,
    indexOfHighestInterestRate: `interestRate${indexOfHighestInterestRate + 1}`,
  }
}

export function convertToCorrectType(key: string, value: string) {
  switch (key) {
    case 'maxAmount1':
    case 'maxAmount2':
    case 'maxAmount3':
    case 'maxAmount4':
    case 'maxAmount5':
    case 'maxAmount6':
    case 'highestEntryFee':
    case 'highestEntryFeeRequirements':
    case 'capitalizationPeriod':
    case 'lowestEntryFee':
    case 'lowestEntryFeeRequirements':
    case 'maxAge':
    case 'monthlySavingMaxAmount':
    case 'monthlySavingMinAmount':
    case 'maxAmount':
    case 'minAmount':
    case 'minAge':
    case 'interestRate1':
    case 'interestRate2':
    case 'interestRate3':
    case 'interestRate4':
    case 'interestRate5':
    case 'interestRate6':
      return Number(value) ? Number(value) : null
    default:
      return value
  }
}

export function getObjectPropertyTypes(array: any[], property: string) {
  const uniqueTypes = new Set()

  array.forEach((item: any) => {
    if (item[property] === null) {
      return uniqueTypes.add(null)
    }
    const itemType = typeof item[property]
    uniqueTypes.add(itemType)
  })

  return Array.from(uniqueTypes)
}

export function getAllBankNames(banks: Bank[]) {
  const bankNames = banks.map((bank) => ({
    name: bank.bankName,
    id: bank.bankNumber,
  }))

  const uniqueBanks = Array.from(new Set(bankNames.map((bank) => bank.id)))

  const bankList = uniqueBanks
    .map((bankId) => {
      const matchingBank = bankNames.find((bank) => bank.id === bankId)
      return {
        id: bankId,
        name: matchingBank?.name || 'TBA',
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return bankList
}

export function getKeywords(banks: Bank[]) {
  return banks.map((bank) => bank.name[0])
}
