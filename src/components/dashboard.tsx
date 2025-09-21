import {
  LeftSidebarProvider,
  RightSidebarProvider,
} from "@/hooks/sidebar-context"
import { AppSidebar } from "@/components/app-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import {LeftSidebarTrigger , RightSidebarTrigger} from "@/components/ui/button"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-svh w-full">
      <LeftSidebarProvider defaultOpen>
        <AppSidebar />
        <LeftSidebarTrigger />
      </LeftSidebarProvider>

      <RightSidebarProvider>
        <RightSidebar />
        <RightSidebarTrigger />
      </RightSidebarProvider>

      <div className="flex-auto min-w-0 overflow-hidden">
        <AppNavbar />
        {children}
      </div>
    </div>
  )
}

