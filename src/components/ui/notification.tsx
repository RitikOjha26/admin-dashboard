import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Bug, UserRound, Radio } from "lucide-react"

export type NotificationKind = "bug" | "user" | "broadcast"

export type NotificationData = {
  id: string
  kind: NotificationKind
  title: string
  time: string
}

const kindIcon: Record<NotificationKind, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  bug: Bug,
  user: UserRound,
  broadcast: Radio,
}

export function Notifications({ items }: { items: NotificationData[] }) {
  return (
    <SidebarMenu className="space-y-1">
      {items.map((notification) => {
        const Icon = kindIcon[notification.kind]
        return (
          <SidebarMenuItem key={notification.id}>
            <SidebarMenuButton className="h-auto py-2 pr-2 gap-2 rounded-lg hover:bg-muted/50">
              <Icon className="size-4 text-foreground/70" />
              <div className="min-w-0">
                <div className="text-sm text-foreground truncate">{notification.title}</div>
                <div className="text-[12px] text-[rgba(28,28,28,0.4)] ">{notification.time}</div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}
