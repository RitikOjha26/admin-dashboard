import React from "react"
import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(false)

  return (
    <SidebarProvider open={rightOpen} onOpenChange={setRightOpen}>
      <SidebarProvider open={leftOpen} onOpenChange={setLeftOpen}>
        <AppSidebar /> {/* left */}
        <SidebarInset>
          <AppNavbar
          />
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
      <RightSidebar /> {/* right */}
    </SidebarProvider>
  )
}
