import { useBanks } from '@/app/hooks/useBanks'
import classNames from 'classnames'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import React from 'react'
import { If, Then } from 'react-if'

const BankListFilter = () => {
  const { bankList, bankIdAvailable } = useBanks()

  const defaultBanksSelected = parseAsArrayOf(parseAsString).withDefault([])
  const [banksSelected, setBanksSelected] = useQueryState(
    'banksSelected',
    defaultBanksSelected
  )

  const handleOnChange = (bankId: string) => {
    if (banksSelected.includes(bankId)) {
      setBanksSelected(banksSelected.filter((b) => b !== bankId))
    } else {
      setBanksSelected([...banksSelected, bankId])
    }
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {bankList.map((bank) => {
        return (
          <If key={bank.id} condition={bankIdAvailable.includes(bank.id)}>
            <Then>
              <li>
                <label
                  className={classNames({
                    'label cursor-pointer p-2 btn btn-outline btn-secondary':
                      true,
                    'bg-secondary !text-white': banksSelected.includes(
                      bank.name
                    ),
                  })}
                >
                  {bank.name}
                  <input
                    type="checkbox"
                    checked={banksSelected.includes(bank.name)}
                    value={bank.id}
                    onChange={() => handleOnChange(bank.id)}
                    className="btn btn-outline btn-secondary hidden"
                  />
                </label>
              </li>
            </Then>
          </If>
        )
      })}
    </ul>
  )
}

export default BankListFilter
