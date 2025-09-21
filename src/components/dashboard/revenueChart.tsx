
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const data = [
  { month: "Jan", current: 12, previous: 8, forecast: null },
  { month: "Feb", current: 10, previous: 14, forecast: null },
  { month: "Mar", current: 11, previous: 12, forecast: null },
  { month: "Apr", current: 16, previous: 10, forecast: 16 },
  { month: "May", current: 18, previous: 12, forecast: 19 },
  { month: "Jun", current: 20, previous: 16, forecast: 22 },
]

const toMillions = (v: number) => `${v}M`

export function RevenueChartCard() {
  return (
    <Card className="rounded-3xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <CardTitle>Revenue</CardTitle>
          
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-neutral-800" />
              Current Week <span className="font-semibold">$58,211</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-sky-400" />
              Previous Week <span className="font-semibold">$68,768</span>
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="#9ca3af"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="#9ca3af"
              tickFormatter={toMillions}
              domain={[0, 30]}
            />
            <Tooltip
              cursor={{ stroke: "rgba(0,0,0,0.2)", strokeWidth: 1 }}
              formatter={(value: any, key: any) => [`${value}M`, key]}
            />
            {/* Previous */}
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#93c5fd"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4 }}
            />
            {/* Current */}
            <Line
              type="monotone"
              dataKey="current"
              stroke="#111827"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4 }}
            />
            {/* Forecast  */}
            <Line
              type="natural"             
              dataKey="forecast"
              stroke="#111827"
              strokeWidth={3}
              dot={false}
              strokeDasharray="4 6"
              strokeLinecap="round"
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
