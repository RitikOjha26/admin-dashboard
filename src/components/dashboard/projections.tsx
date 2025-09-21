import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { useTheme } from "../ui/theme-provider"


const data = [
  { month: "Jan", actual: 18, proj: 2 },
  { month: "Feb", actual: 20, proj: 4 },
  { month: "Mar", actual: 18, proj: 3 },
  { month: "Apr", actual: 22, proj: 4 },
  { month: "May", actual: 15, proj: 2 },
  { month: "Jun", actual: 20, proj: 4 },
]


const toMillions = (v: number) => `${v}M`

export function ProjectionsCard() {
    const {  resolved } = useTheme()
    const currentStroke = resolved === "light" ? "rgba(28, 28, 28, 0.4)" : "rgba(255, 255, 255, 0.4)"

  return (
    <Card className="rounded-3xl dark:bg-[#ffffff0d]">
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
     
      <CardContent className="h-52 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={24}>
            <CartesianGrid vertical={false} stroke={currentStroke} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke={currentStroke}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke={currentStroke}
              tickFormatter={toMillions}
              domain={[0, 30]}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
              formatter={(value: any, key: any) => [`${value}M`, key]}
            />
            
            <Bar dataKey="actual" stackId="a" radius={[6, 6, 0, 0]} fill="#93c5fd" />
            
            <Bar dataKey="proj" stackId="a" radius={[6, 6, 0, 0]} fill="#cfe0ff" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
