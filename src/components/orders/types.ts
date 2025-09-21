export type Order = {
  id: string
  user: { name: string; avatar: string }
  project: string
  address: string
  date: string
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected"
}
