'use client'
import {
  Area,
  CartesianGrid,
  AreaChart as ReAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const AreaChart = () => {
  const data = [
    {
      name: '2024',
      'Din penger': 1000,
    },
    {
      name: '2025',
      'Din penger': 4000,
    },
    {
      name: '2026',
      'Din penger': 6000,
    },
    {
      name: '2027',
      'Din penger': 7000,
    },
    {
      name: '2028',
      'Din penger': 8000,
    },
    {
      name: '2029',
      'Din penger': 10000,
    },
    {
      name: '2030',
      'Din penger': 11100,
    },
  ]

  return (
    <div>
      <h6 className="text-lg mb-2">Potensiell pengevekst</h6>
      <ResponsiveContainer width="100%" height={400}>
        <ReAreaChart
          width={900}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Din penger"
            stroke="var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)))"
            fill="var(--arc-background-simple-color)"
            fillOpacity={0.5}
          />
        </ReAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChart
