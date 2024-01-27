import { parseAsInteger, useQueryState } from 'nuqs'
import React from 'react'

const EntryFeeFilter = () => {
  const defaultAmount = parseAsInteger.withDefault(0)
  const [amount, setAmount] = useQueryState('amount', defaultAmount)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.currentTarget.value || '0'))
  }

  return (
    <label className=" flex flex-col p-5 text-sm font-semibold text-neutral mb-2 w-full">
      <p className="mb-5">
        Innskudd:{' '}
        <span className="text-lg">
          {addSpacesToNumbers(String(amount || 0))} kr
        </span>
      </p>
      <input
        min={0}
        type="number"
        name="amount"
        className="input input-bordered "
        placeholder="0 kr"
        value={amount || undefined}
        onChange={handleChange}
      />
    </label>
  )
}

export default EntryFeeFilter

function addSpacesToNumbers(inputString: string) {
  return inputString.replace(/\d+/g, (match: string) =>
    match.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
  )
}
