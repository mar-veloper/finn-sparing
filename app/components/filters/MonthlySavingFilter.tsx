import { parseAsInteger, useQueryState } from 'nuqs'
import React from 'react'

const MonthlySavingFilter = () => {
  const defaultMonthlySaving = parseAsInteger.withDefault(0)
  const [monthlySaving, setMonthlySaving] = useQueryState(
    'monthlySaving',
    defaultMonthlySaving
  )

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMonthlySaving(parseFloat(e.currentTarget.value || '0'))
  }

  return (
    <label className=" flex flex-col text-sm font-semibold text-neutral mb-2 w-full">
      <p className="mb-5">
        Månedlig sparing:{' '}
        <span className="text-lg">
          {addSpacesToNumbers(String(monthlySaving || 0))} kr
        </span>
      </p>
      <input
        min={0}
        type="number"
        name="monthlySaving"
        className="input input-bordered "
        placeholder="0 kr"
        value={monthlySaving || undefined}
        onChange={handleChange}
      />
    </label>
  )
}

export default MonthlySavingFilter

function addSpacesToNumbers(inputString: string) {
  return inputString.replace(/\d+/g, (match: string) =>
    match.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
  )
}
