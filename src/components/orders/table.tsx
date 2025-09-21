import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import StatusPill from "./status-pill"
import OrdersToolbar from "./toolbar"
import type { Order } from "./types"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

type Props = { rows: Order[] }

function useVisibleColumns(initial: string[]) {
    const [visible, setVisible] = React.useState<Record<string, boolean>>(
        Object.fromEntries(initial.map((k) => [k, true]))
    )
    const toggle = (key: string, v: boolean) => setVisible((s) => ({ ...s, [key]: v }))
    return { visible, toggle }
}

const PAGE_SIZE = 10

export default function OrdersTable({ rows }: Props) {
    const [query, setQuery] = React.useState("")
    const [page, setPage] = React.useState(1)
    const [data, setData] = React.useState(rows)
    const { visible, toggle } = useVisibleColumns(["Order ID", "User", "Project", "Address", "Date", "Status", "Actions"])

    // filtering
    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return data

        return data.filter((r) => {
            const fields = [
                r.id,             
                r.user.name,      
                r.project,
                r.status          
            ]
            return fields.some((v) => String(v).toLowerCase().includes(q))
        })
    }, [data, query])

    const updateStatus = (id: string, status: Order["status"]) => {
        setData((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
    }

    const [sortKey, setSortKey] = React.useState<"userName" | keyof Order>("date")
    const [asc, setAsc] = React.useState(false)

    const sorted = React.useMemo(() => {
        const copy = [...filtered]
        copy.sort((a, b) => {
            const av = sortKey === "userName" ? a.user.name.toLowerCase() : String(a[sortKey]).toLowerCase()
            const bv = sortKey === "userName" ? b.user.name.toLowerCase() : String(b[sortKey]).toLowerCase()
            return asc ? av.localeCompare(bv) : bv.localeCompare(av)
        })
        return copy
    }, [filtered, sortKey, asc])

    const onSortByUser = () => {
        if (sortKey !== "userName") {
            setSortKey("userName")
            setAsc(true)
        } else {
            setAsc((v) => !v)
        }
    }


    // pagination
    const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
    const pageRows = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    React.useEffect(() => setPage(1), [query])

    return (
        <div className="space-y-3 px-6">
            <div className="text-lg font-medium mt-2">Order List</div>

            <OrdersToolbar
                query={query}
                setQuery={setQuery}
                visible={visible}
                setVisible={toggle}
                onSortByUser={onSortByUser}
            />

            <div className="rounded-xl overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow
                            className="border-b "
                            style={{ borderColor: "rgba(28,28,28,0.2)" }}
                        >
                            <TableHead className="w-10">
                                <Checkbox aria-label="Select all" />
                            </TableHead>
                            {visible["Order ID"] && <TableHead className="w-28">Order ID</TableHead>}
                            {visible["User"] && (
                                <TableHead className="cursor-pointer select-none" onClick={onSortByUser}>
                                    User
                                </TableHead>
                            )}
                            {visible["Project"] && (
                                <TableHead className="cursor-pointer select-none" onClick={() => { setSortKey("project"); setAsc((v) => !v) }}>
                                    Project
                                </TableHead>
                            )}
                            {visible["Address"] && <TableHead>Address</TableHead>}
                            {visible["Date"] && (
                                <TableHead className="cursor-pointer select-none" onClick={() => { setSortKey("date"); setAsc((v) => !v) }}>
                                    Date
                                </TableHead>
                            )}
                            {visible["Status"] && <TableHead>Status</TableHead>}
                            {visible["Actions"] && <TableHead className="w-10"></TableHead>}
                        </TableRow>
                    </TableHeader>


                    <TableBody>
                        {pageRows.map((r) => (
                            <TableRow key={r.id} className="hover:bg-muted/40 text-[12px] border-0 text-black dark:text-white">
                                <TableCell className="w-10 ">
                                    <Checkbox className="text-[12px]" aria-label={`Select ${r.id}`} />
                                </TableCell>

                                {visible["Order ID"] && <TableCell className="font-medium">{r.id}</TableCell>}

                                {visible["User"] && (
                                    <TableCell>
                                        <div className="flex items-center gap-2 ]">
                                            <img src={r.user.avatar} alt="" className="size-6 rounded-full object-cover" />
                                            <span className="text-[12px]">{r.user.name}</span>
                                        </div>
                                    </TableCell>
                                )}

                                {visible["Project"] && <TableCell className="text-[12px] text-foreground/80">{r.project}</TableCell>}

                                {visible["Address"] && <TableCell className="text-[12px] text-foreground/80">{r.address}</TableCell>}

                                {visible["Date"] && <TableCell className="text-[12px] text-foreground/80 flex items-center mt-2">
                                    <Calendar className="size-[14px] mr-1" />
                                    {r.date}
                                </TableCell>}

                                {visible["Status"] && (
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <button className="inline-flex items-center gap-1">
                                                    <StatusPill value={r.status} />
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start" className="w-40">
                                                <DropdownMenuRadioGroup
                                                    value={r.status}
                                                    onValueChange={(val) =>
                                                        updateStatus(r.id, val as Order["status"])
                                                    }
                                                >
                                                    {(["In Progress", "Complete", "Pending", "Approved", "Rejected"] as Order["status"][]).map((s) => (
                                                        <DropdownMenuRadioItem key={s} value={s}>
                                                            {s}
                                                        </DropdownMenuRadioItem>
                                                    ))}
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                )}

                                {visible["Actions"] && (
                                    <TableCell className="text-right">
                                        <Button size="icon" variant="ghost"><DotsHorizontalIcon /></Button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>


            <div className="flex items-center justify-end gap-2">
                <Button variant="ghost" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                    <ChevronLeft />
                </Button>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <Button key={i} size="sm" variant={page === i + 1 ? "default" : "ghost"} onClick={() => setPage(i + 1)}>
                        {i + 1}
                    </Button>
                ))}
                <Button variant="ghost" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}
