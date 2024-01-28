import { Slider } from '@mui/material'
import { parseAsInteger, useQueryState } from 'nuqs'

const GoalTimeframeFilter = () => {
  const deaultGoalTimeframe = parseAsInteger.withDefault(1)

  const [goalTimeframe, setGoalTimeframe] = useQueryState(
    'goalTimeframe',
    deaultGoalTimeframe
  )

  const handleChange = (e: Event, newValue: number | number[]) => {
    return setGoalTimeframe(newValue as number)
  }

  return (
    <label className="flex flex-col justify-evenly text-sm font-semibold text-neutral mb-2 w-full">
      <p className="mb-5">
        Målramme: <span className="text-lg">{goalTimeframe} år</span>
      </p>
      <Slider
        className="!text-secondary"
        max={100}
        min={0}
        value={goalTimeframe}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </label>
  )
}

export default GoalTimeframeFilter
