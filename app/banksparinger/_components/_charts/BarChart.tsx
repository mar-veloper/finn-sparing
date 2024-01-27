'use client'
import { useBanks } from '@/app/hooks/useBanks/index.'
import {
  BarChart as ReBarChart,
  Bar,
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts'

const BarChart = () => {
  const { banks } = useBanks()

  const data = banks.data.map((bank) => ({
    label: bank.name,
    value: bank.highestInterestRate,
  }))

  return (
    <div>
      <ResponsiveContainer width={500} height={300}>
        <ReBarChart data={data}>
          <XAxis dataKey="label" />
          <Bar
            dataKey="value"
            barSize={60}
            style={{
              fill: 'var(--accent-9)',
            }}
          />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart
