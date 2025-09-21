type Props = { value: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected" }

const darkMap: Record<Props["value"], { dot: string; text: string }> = {
  "In Progress": { dot: "bg-[rgb(172,168,255)]", text: "text-[rgb(172,168,255)]" }, // lavender
  "Complete":    { dot: "bg-[rgb(154, 230, 180)]", text: "text-[rgb(88, 201, 151)]" }, // mint/teal
  "Pending":     { dot: "bg-[rgb(185, 215, 255)]", text: "text-[rgb(87, 170, 230)]" }, // sky
  "Approved":    { dot: "bg-[rgb(255, 224, 130)]", text: "text-[rgb(251, 191, 36)]" }, // amber
  "Rejected":    { dot: "bg-[rgb(209, 213, 219)]", text: "text-[rgb(209, 213, 219)]" }, // optional
}

const lightMap: Record<Props["value"], { dot: string; text: string }> = {
  "In Progress": { dot: "bg-sky-400", text: "text-sky-700" },
  "Complete":    { dot: "bg-emerald-400", text: "text-emerald-700" },
  "Pending":     { dot: "bg-sky-300", text: "text-sky-700" },
  "Approved":    { dot: "bg-amber-400", text: "text-amber-700" },
  "Rejected":    { dot: "bg-neutral-400", text: "text-neutral-700" },
}

export default function StatusPill({ value }: Props) {
  const d = darkMap[value]
  const l = lightMap[value]

  return (
    <span className="
      inline-flex items-center gap-3
      text-[12px] leading-6
      text-foreground
      dark:text-inherit
    ">
      {/* colored dot */}
      <span className={`size-1.5 rounded-full ${l.dot} dark:${d.dot}`} />
      {/* colored label */}
      <span className={`${l.text} dark:${d.text}`}>
        {value}
      </span>
    </span>
  )
}
