'use client'
import { useBanks } from '@/app/hooks/useBanks'
import { parseAsInteger, useQueryState } from 'nuqs'
import React from 'react'

const Pagination = () => {
  const { banks } = useBanks()

  const defaultPage = parseAsInteger.withDefault(1)
  const [page, setPage] = useQueryState('page', defaultPage)

  return (
    <div className="join mx-auto mb-16">
      <button
        className="join-item btn btn-secondary text-xl px-5"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        «
      </button>
      <p className="join-item flex items-center px-5">
        {page} / {banks.totalPages}
      </p>
      <button
        className="join-item btn btn-secondary text-xl px-5"
        onClick={() => setPage(page + 1)}
        disabled={page === banks.totalPages}
      >
        »
      </button>
    </div>
  )
}

export default Pagination
