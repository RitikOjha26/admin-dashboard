import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useSidebar, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

export default function PinnedQuickAccess() {
  const { open } = useSidebar()
  const navigate = useNavigate()

  if (open === false) return null

  return (
    <SidebarGroup>
      <Tabs defaultValue="favorites" className="w-full">
        <TabsList className="h-8">
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="recent">Recently</TabsTrigger>
        </TabsList>

        <TabsContent value="favorites">
          <SidebarMenu className="mt-2">
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/")}>
                <span>Overview</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/orders")}>
                <span>Order List</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </TabsContent>

        <TabsContent value="recent">
          <SidebarMenu className="mt-2">
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/orders")}>
                <span>Order List</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/")}>
                <span>Documents</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </TabsContent>
      </Tabs>
    </SidebarGroup>
  )
}
