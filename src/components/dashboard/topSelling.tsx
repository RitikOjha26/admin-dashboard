import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTheme } from "../ui/theme-provider";

type Product = { name: string; price: string; qty: number | string; amount: string }

export function TopSellingTable({ rows }: { rows: Product[] }) {

  const { resolved } = useTheme();

  return (
    <Card className="rounded-3xl p-6 dark:bg-[#ffffff0d] " >
      <CardHeader className="p-0 pb-2">
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-hidden rounded-b-3xl">
          <Table className="w-full">
            <TableHeader>
              <TableRow
                className="border-b"
                style={{
                  color: resolved === "light" ? "rgba(28,28,28,0.4)" : "rgba(255, 255, 255, 0.4)",
                  borderColor: resolved === "light" ? "rgba(28,28,28,0.2)" : "rgba(255, 255, 255, 0.4)",
                }}
              >
                <TableHead className="w-[45%] pl-0">Name</TableHead>
                <TableHead className="w-[15%] text-right pr-0">Price</TableHead>
                <TableHead className="w-[15%] text-right pr-0">Quantity</TableHead>
                <TableHead className="w-[25%] text-right pr-0">Amount</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="[&>tr]:border-0">
              {rows.map((r) => (
                <TableRow key={r.name} className="border-0">
                  <TableCell className="pl-0 py-4">
                    <span className="text-sm text-foreground">{r.name}</span>
                  </TableCell>
                  <TableCell className="py-4 pr-0 text-right tabular-nums">
                    <span className="text-sm text-foreground">{r.price}</span>
                  </TableCell>
                  <TableCell className="py-4 pr-0 text-right tabular-nums">
                    <span className="text-sm text-foreground">{r.qty}</span>
                  </TableCell>
                  <TableCell className="py-4 pr-0 text-right tabular-nums">
                    <span className="text-sm text-foreground">{r.amount}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
