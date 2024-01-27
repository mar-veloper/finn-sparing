import { Slider } from '@mui/material'
import { parseAsInteger, useQueryState, useQueryStates } from 'nuqs'

const AgeFilter = () => {
  const defaultMinAge = parseAsInteger.withDefault(0)
  const defaultMaxAge = parseAsInteger.withDefault(100)

  const [age, setAge] = useQueryStates({
    minAge: defaultMinAge,
    maxAge: defaultMaxAge,
  })

  const handleChange = (e: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      const [newMinAge, newMaxAge] = newValue
      return setAge({ minAge: newMinAge, maxAge: newMaxAge })
    }
    return setAge({ minAge: newValue, maxAge: newValue })
  }

  const ageToRender =
    age.minAge !== age.maxAge ? `${age.minAge} - ${age.maxAge}` : age.minAge

  return (
    <label className="flex flex-col justify-evenly p-5 text-sm font-semibold text-neutral mb-2 w-full">
      <p className="mb-5">
        Alder: <span className="text-lg">{ageToRender}</span>
      </p>
      <Slider
        className="!text-secondary"
        max={100}
        min={0}
        value={[age.minAge, age.maxAge]}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </label>
  )
}

export default AgeFilter
