import OrdersTable from "@/components/orders/table"
import { orders } from "@/components/orders/data"

export default function OrderList() {
  return <OrdersTable rows={orders} />
}
