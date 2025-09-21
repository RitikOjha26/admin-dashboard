import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

type Stat = {
  title: string
  value: string
  delta?: string
  trend?: "up" | "down"
  tint?: "blue" | "slate"
}

export function InfoCards({ items }: { items: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6">
      {items.map((s) => (
        <Card
          key={s.title}
          className={[
            "rounded-3xl border-0",
            "p-0 sm:px-8 sm:py-7",
            s.tint === "slate" ? "bg-muted/50" : "bg-blue-50 dark:bg-blue-900/20",
          ].join(" ")}
        >
          <CardHeader className="p-0">
            
            <CardTitle className="font-semibold text-[14px] leading-[20px] tracking-normal text-foreground">
              {s.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 mt-[12px] items-baseline">
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-[24px] leading-[36px] item">
                {s.value}
              </span>

              {s.delta ? (
                <div className="ml-4 mb-1 flex  gap-[10px]">
                  <span className="font-normal text-[12px] leading-[18px]">
                    {s.delta}
                  </span>
                  {s.trend === "down" ? (
                    <TrendingDown className="size-4" />
                  ) : (
                    <TrendingUp className="size-4" />
                  )}
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
