import classNames from 'classnames'
import { parseAsString, useQueryState } from 'nuqs'
import React from 'react'

export enum TrapType {
  ACCEPTED = 'ja',
  DECLINED = 'nei',
}

const TrapTypeFilter = () => {
  const defaultStatus = parseAsString.withDefault(TrapType.ACCEPTED)
  const [trapType, setStatus] = useQueryState('trapType', defaultStatus)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className="flex flex-col max-w-1/2">
      <h3 className="text-lg font-semibold text-neutral mb-5">
        Er du interessert i type traprente?
      </h3>
      <div className="join">
        <input
          className={classNames({
            'join-item font-medium btn border-secondary hover:bg-secondary hover:text-white':
              true,
            '!bg-secondary !border-secondary text-white':
              trapType === TrapType.ACCEPTED,
          })}
          type="radio"
          name="options"
          value={TrapType.ACCEPTED}
          aria-label="Vis traprente"
          checked={trapType === TrapType.ACCEPTED}
          onChange={handleChange}
        />
        <input
          className={classNames({
            'join-item font-medium btn border-secondary hover:bg-secondary hover:text-white':
              true,
            '!bg-secondary !border-secondary text-white':
              trapType === TrapType.DECLINED,
          })}
          type="radio"
          name="options"
          value={TrapType.DECLINED}
          aria-label="Fjern traprente"
          checked={trapType === TrapType.DECLINED}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default TrapTypeFilter
