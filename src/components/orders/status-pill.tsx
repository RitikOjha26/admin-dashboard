export default function StatusPill({ value }: { value: string }) {
  const map: Record<string, { dot: string; text: string; bg: string }> = {
    "In Progress": { dot: "bg-sky-400", text: "text-sky-700", bg: "bg-sky-50" },
    Complete: { dot: "bg-emerald-400", text: "text-emerald-700", bg: "bg-emerald-50" },
    Pending: { dot: "bg-sky-300", text: "text-sky-700", bg: "bg-sky-50" },
    Approved: { dot: "bg-amber-400", text: "text-amber-800", bg: "bg-amber-50" },
    Rejected: { dot: "bg-neutral-400", text: "text-neutral-700", bg: "bg-neutral-100" },
  }
  const s = map[value] || { dot: "bg-neutral-300", text: "text-neutral-700", bg: "bg-neutral-100" }

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs ${s.bg} ${s.text}`}>
      <span className={`size-1.5 rounded-full ${s.dot}`} />
      {value}
    </span>
  )
}
