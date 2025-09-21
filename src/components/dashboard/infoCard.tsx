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
    <div
      className="
        grid grid-cols-1 gap-3
        sm:grid-cols-2 sm:gap-4
        md:grid-cols-2 md:gap-6
      "
    >
      {items.map((s) => ( 
        <Card
          key={s.title}
          className={[
            "rounded-2xl border-0",
            // compact base padding; scale up at sm+
            "p-3 sm:px-6 sm:py-5 md:px-8 md:py-7",
            s.tint === "slate"
              ? "bg-muted/50 dark:bg-[#ffffff0d]"
              : "bg-blue-50 dark:bg-[#e3f5ff] dark:text-black",
          ].join(" ")}
        >
          <CardHeader className="p-0">
            <CardTitle
              className="
                font-medium
                text-[12px] leading-[16px]
                sm:text-[13px] sm:leading-[18px]
                md:text-[14px] md:leading-[20px]
                text-foreground
                line-clamp-1
              "
              title={s.title}
            >
              {s.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 mt-2 sm:mt-3 md:mt-[12px]">
            <div className="flex items-center justify-between gap-2 min-w-0">
              <span
                className="
                  font-semibold
                  text-[20px] leading-[28px]
                  sm:text-[22px] sm:leading-[32px]
                  md:text-[24px] md:leading-[36px]
                  truncate
                "
                title={s.value}
              >
                {s.value}
              </span>

              {s.delta ? (
                <div
                  className="
                    ml-2 flex items-center gap-1 sm:gap-2 shrink-0
                    text-muted-foreground
                  "
                >
                  <span
                    className="
                      font-normal
                      text-[11px] leading-[16px]
                      sm:text-[12px] sm:leading-[18px]
                    "
                  >
                    {s.delta}
                  </span>
                  {s.trend === "down" ? (
                    <TrendingDown className="size-3.5 sm:size-4" />
                  ) : (
                    <TrendingUp className="size-3.5 sm:size-4" />
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
