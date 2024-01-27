import { useBanks } from '@/app/hooks/useBanks/index.'
import React from 'react'

const KeywordsFilter = () => {
  const { keywords } = useBanks()
  return (
    <ul>
      {keywords.map((keyword, index) => {
        return <li key={index}>{keyword}</li>
      })}
    </ul>
  )
}

export default KeywordsFilter
