import { Bank } from './types'

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

  return {
    currentPage,
    totalPages,
    totalItems: items.length,
    itemsPerPage,
    data: paginatedItems,
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
