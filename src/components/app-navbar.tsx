import { SidebarTrigger } from "@/components/ui/sidebar"
import { RightSidebarTrigger } from "@/components/ui/right-sidebar-trigger"
import { Input } from "@/components/ui/input"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Star, History, Bell, Sun, Search, Moon } from "lucide-react"
import { MobileSearch } from "./ui/mobile-search"
import { useTheme } from "./ui/theme-provider"

export function AppNavbar() {

   const { resolved, toggle } = useTheme()

  return (
    <div className="sticky top-0 z-20 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full items-center justify-between gap-4 px-4">
        
        <div className="flex items-center gap-2 rounded-md border border-transparent px-2 py-1 [outline:1px_dashed_#cfe3ff]/10">
          <SidebarTrigger className="-ml-1" />

         
          <Button
            variant="ghost"
            size="icon"
            className="size-8 hidden md:inline-flex"
            aria-label="Favorite"
            title="Favorite"
          >
            <Star className="size-4" />
          </Button>

          
          <Breadcrumb className=" sm:block">
            <BreadcrumbList className="text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-muted-foreground">
                  Dashboards
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">Default</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        
        <div className="flex items-center gap-3 rounded-md border border-transparent px-2 py-1 [outline:1px_dashed_#cfe3ff]/10">
          
          <div className="relative hidden sm:flex items-center">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="h-9 w-[320px] rounded-full pl-9 pr-14 text-sm"
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 select-none rounded-md border bg-muted px-2 text-[11px] leading-5 text-muted-foreground">
              ⌘/
            </kbd>
          </div>

          
          <MobileSearch />
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Theme"
            title="Toggle theme"
            onClick={toggle}
          >
            {resolved === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="size-8 hidden md:inline-flex" aria-label="Recent" title="Recent">
            <History className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" className="size-8 hidden md:inline-flex" aria-label="Notifications" title="Notifications">
            <Bell className="size-4" />
          </Button>
          
          <RightSidebarTrigger targetId="right" className=" md:inline-flex" />
          
        </div>
      </div>
    </div>
  )
}

