import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"

const data = [
  { name: "Direct", value: 300.56, color: "#111827" },      
  { name: "Affiliate", value: 135.18, color: "#BFEAC7" },  
  { name: "Sponsored", value: 154.02, color: "#9DB1FF" },   
  { name: "E-mail", value: 48.96, color: "#CDE7FF" },       
]


const total = data.reduce((s, d) => s + d.value, 0)
const pct = (v: number) => `${Math.round((v / total) * 1000) / 10}%`

function BadgeTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const v = payload[0].value as number
  return (
    <div className="rounded-lg bg-neutral-800 text-white px-2.5 py-1 text-xs shadow">
      {pct(v)}
    </div>
  )
}

export function TotalSalesCard() {
  return (
    <Card className="rounded-3xl">
      <CardHeader className="pb-2">
        <CardTitle>Total Sales</CardTitle>
      </CardHeader>

      <CardContent className="pt-2">
        {/* Donut */}
        <div className="mx-auto w-[180px] h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                cursor={false}
                content={<BadgeTooltip />}
                wrapperStyle={{ outline: "none" }}
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={80}
                paddingAngle={4}
                cornerRadius={8}
              >
                {data.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

     
        <div className="mt-2 space-y-3">
          {data.map((d) => (
            <div key={d.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block size-2.5 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                <span className="text-sm text-foreground/80">{d.name}</span>
              </div>
              <span className="text-sm font-medium tabular-nums">
                ${d.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
