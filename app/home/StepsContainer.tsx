import classNames from 'classnames'
import { parseAsInteger, useQueryState } from 'nuqs'
import React from 'react'

const StepsContainer = () => {
  const [step] = useQueryState('step', parseAsInteger.withDefault(1))

  return (
    <ul className="steps my-8 w-2/4">
      <li
        className={classNames({
          step: true,
          'step-secondary': step >= 1,
        })}
      >
        Tilpass dine ønsker
      </li>
      <li
        className={classNames({
          step: true,
          'transition-all duration-500 ease-in-out': true,
          'step-secondary': step >= 2,
        })}
      >
        Viktige detaljer
      </li>
      <li
        className={classNames({
          step: true,
          'step-secondary': step >= 3,
        })}
      >
        Mål
      </li>
    </ul>
  )
}

export default StepsContainer
