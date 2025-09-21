import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
} from "@/components/ui/sidebar"
import ActivitiesSection from "@/components/ui/activity"
import { Notifications, type NotificationData } from "@/components/ui/notification"
import ContactList from "@/components/ui/contactList"

const notificationItems: NotificationData[] = [
    { id: "n1", kind: "bug", title: "You have a bug that needs…", time: "Just now" },
    { id: "n2", kind: "user", title: "New user registered", time: "59 minutes ago" },
    { id: "n3", kind: "bug", title: "You have a bug that needs…", time: "12 hours ago" },
    { id: "n4", kind: "broadcast", title: "New user registered", time: "Today, 11:59 AM" },
]

export function RightSidebar() {
    return (
        <Sidebar
            side="right"
            variant="inset"
            collapsible="offcanvas"
            className="
        w-[17rem]
        bg-card
        [&_[data-slot=sidebar-gap]]:group-data-[collapsible=offcanvas]:!w-0
        [&_[data-slot=sidebar-container]]:group-data-[collapsible=offcanvas]:right-[-9999px]
        [&_[data-slot=sidebar-inner]]:group-data-[collapsible=offcanvas]:hidden
      "
        >
            <SidebarContent className="px-2">
                <SidebarGroup className="space-y-2">
                    <SidebarGroupLabel className="px-1 text-[11px] uppercase tracking-wide text-foreground/60">
                        Notifications
                    </SidebarGroupLabel>
                    <Notifications items={notificationItems} />
                </SidebarGroup>

                <SidebarGroup className=" space-y-2">
                    <SidebarGroupLabel className="px-1 text-[11px] uppercase tracking-wide text-foreground/60">
                        Activities
                    </SidebarGroupLabel>
                    <ActivitiesSection />
                </SidebarGroup>

                <SidebarGroup className="mt-4 space-y-2">
                    <SidebarGroupLabel className="px-1 text-[11px] uppercase tracking-wide text-foreground/60">
                        Contacts
                    </SidebarGroupLabel>
                    <ContactList />
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
