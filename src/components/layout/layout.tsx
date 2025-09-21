import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="relative min-h-svh w-full">
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <SidebarInset className="flex-auto min-w-0 !w-[90%] overflow-hidden">
          <AppNavbar />
          <Outlet />
        </SidebarInset>
        <RightSidebar />
      </SidebarProvider>
    </div>
  )
}
