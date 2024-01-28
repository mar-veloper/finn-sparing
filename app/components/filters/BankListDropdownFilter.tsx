'use client'
import { useBanks } from '@/app/hooks/useBanks/index.'
import classNames from 'classnames'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import React from 'react'
import { If, Then } from 'react-if'

const BankListDropdownFilter = () => {
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
    <details className="collapse collapse-arrow w-full bg-base-200 ">
      <summary className="collapse-title text-xl font-medium">
        Leverandør{' '}
        <span className="font-bold text-neutral">
          {banksSelected.length > 0 && `(${banksSelected.length})`}
        </span>
      </summary>

      <ul className="collapse-content ">
        {bankList.map((bank) => (
          <If key={bank.id} condition={bankIdAvailable.includes(bank.id)}>
            <Then>
              <li className="mb-2 text-ellipsis overflow-hidden ">
                <button
                  disabled={!bankIdAvailable.includes(bank.id)}
                  onClick={() => handleOnChange(bank.id)}
                  className={classNames({
                    'btn hover:bg-secondary hover:text-white w-full justify-start truncate pr-5 overflow-hidden':
                      true,
                    'bg-secondary !text-white': banksSelected.includes(bank.id),
                  })}
                >
                  {bank.name}
                </button>
              </li>
            </Then>
          </If>
        ))}
      </ul>
    </details>
  )
}

export default BankListDropdownFilter
