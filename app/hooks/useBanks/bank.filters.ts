import { Status } from '@/app/components/filters/StatusFilter'
import { Bank } from './bank.types'
import banksById from './static/bankId.json'
import students from './static/students.json'
import pensionist from './static/pensionist.json'
import trapType from './static/trapType.json'
import sortedBanks from './static/sortedByHighestReturn.json'
import { TrapType } from '@/app/components/filters/TrapTypeFilter'
import _ from 'lodash'

interface Filters {
  amount: number
  monthlySaving: number
  minAge: number
  maxAge: number
  trapType: TrapType
  status: Status
  keywords: string[]
  banksSelected: string[]
}

export enum ProcessBanksTypes {
  PENSIONIST,
  STUDENT,
  TRAPTYPE,
  BANKSSELECTED,
  DEFAULT,
}

interface ProcessBanksResponse {
  banks: Bank[]
  type: ProcessBanksTypes
}

export function processBanks(props: Filters): ProcessBanksResponse {
  switch (true) {
    case props.status === Status.PENSIONIST:
      return {
        banks: pensionist as unknown as Bank[],
        type: ProcessBanksTypes.PENSIONIST,
      }
    case props.status === Status.STUDENT:
      return {
        banks: students as unknown as Bank[],
        type: ProcessBanksTypes.STUDENT,
      }
    case props.trapType === TrapType.DECLINED:
      return {
        banks: trapType as unknown as Bank[],
        type: ProcessBanksTypes.TRAPTYPE,
      }
    case props.banksSelected.length > 0:
      let newBanks: Bank[] = []
      props.banksSelected.forEach((bankId) => {
        newBanks = [
          ...newBanks,
          ...banksById[bankId as keyof typeof banksById],
        ] as unknown as Bank[]
      })
      return {
        banks: _.uniqBy(newBanks, 'id'),
        type: ProcessBanksTypes.BANKSSELECTED,
      }
    default:
      return {
        banks: sortedBanks as unknown as Bank[],
        type: ProcessBanksTypes.DEFAULT,
      }
  }
}
