import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Plus, ArrowUpDown, Search, ListFilter } from "lucide-react"

type Props = {
    query: string
    setQuery: (v: string) => void
    visible: Record<string, boolean>
    setVisible: (key: string, v: boolean) => void
    onSortByUser: () => void
}

export default function OrdersToolbar({ query, setQuery, visible, setVisible , onSortByUser}: Props) {
    return (
        <div className="flex items-center justify-between rounded-xl py-2">
            <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost"><Plus className="size-4 text-black hover:bg-gray-700 dark:text-white" /></Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost"><ListFilter className="size-4 text-black hover:bg-gray-700 dark:text-white" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-44">
                        <DropdownMenuLabel>Columns</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {Object.keys(visible).map((k) => (
                            <DropdownMenuCheckboxItem
                                key={k}
                                checked={visible[k]}
                                onCheckedChange={(checked) => setVisible(k, Boolean(checked))}
                            >
                                {k}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button size="icon" variant="ghost" onClick={onSortByUser} title="Sort by user name">
                    <ArrowUpDown className="size-4 text-black hover:bg-gray-700 dark:text-white" />
                </Button>
            </div>

            <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="pl-8 h-8"
                />
            </div>
        </div>
    )
}
