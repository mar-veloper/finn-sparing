import { parseAsString, useQueryState } from 'nuqs'
import React from 'react'

export enum Status {
  OTHER = 'annet',
  STUDENT = 'student',
  PENSIONIST = 'penjonist',
}

const StatusFilter = () => {
  const defaultStatus = parseAsString.withDefault(Status.OTHER)
  const [status, setStatus] = useQueryState('status', defaultStatus)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className="flex flex-col w-full px-5">
      <h3 className="text-lg font-semibold text-neutral mb-5">
        Velg din status som søkere:
      </h3>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-5">
          <input
            type="radio"
            name="status"
            value={Status.OTHER}
            onChange={handleChange}
            className="radio checked:bg-secondary"
            checked={status === Status.OTHER}
          />
          <span className="label-text ">Annet</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-5">
          <input
            type="radio"
            name="status"
            value={Status.STUDENT}
            onChange={handleChange}
            className="radio checked:bg-secondary"
            checked={status === Status.STUDENT}
          />
          <span className="label-text ">Student</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-5">
          <input
            type="radio"
            name="status"
            value={Status.PENSIONIST}
            onChange={handleChange}
            className="radio checked:bg-secondary"
            checked={status === Status.PENSIONIST}
          />
          <span className="label-text ">Pensjonist</span>
        </label>
      </div>
    </div>
  )
}

export default StatusFilter
