import { parseAsInteger, useQueryState } from 'nuqs'
import React from 'react'

const SavingGoalFilter = () => {
  const defaultSavingGoal = parseAsInteger.withDefault(0)
  const [savingGoal, setSavingGoal] = useQueryState(
    'savingGoal',
    defaultSavingGoal
  )

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSavingGoal(parseFloat(e.currentTarget.value || '0'))
  }

  return (
    <label className=" flex flex-col text-sm font-semibold text-neutral mb-2 w-full">
      <p className="mb-5">
        Finansmålet:{' '}
        <span className="text-lg">
          {addSpacesToNumbers(String(savingGoal || 0))} kr
        </span>
      </p>
      <input
        min={0}
        type="number"
        name="savingGoal"
        className="input input-bordered "
        placeholder="0 kr"
        value={savingGoal || undefined}
        onChange={handleChange}
      />
    </label>
  )
}

export default SavingGoalFilter

function addSpacesToNumbers(inputString: string) {
  return inputString.replace(/\d+/g, (match: string) =>
    match.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
  )
}
