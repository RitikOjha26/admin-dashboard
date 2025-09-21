import { ChevronRight, Minus, PieChart, type LucideIcon } from "lucide-react"
import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  heading,
}: {
  heading: string
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: { title: string; url: string }[]
  }[]
}) {
  // local state for the static button
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const { open, isMobile} = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{heading}</SidebarGroupLabel>
      <SidebarMenu>
        {heading !== 'Pages' && <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Default"
            onClick={() => setDefaultOpen((v) => !v)}
          >
            { isMobile===false && <Minus
              className={`transition-[transform,stroke-width] duration-200 ${defaultOpen ? "rotate-90 [stroke-width:3.5]" : "[stroke-width:1.5]"}`}
            />}
            <PieChart />
            <span>Default</span>
          </SidebarMenuButton>
        </SidebarMenuItem>}

        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>

                  { open=== true && <ChevronRight
                    className="
                      transition-transform duration-200
                      group-data-[state=open]/collapsible:rotate-90
                      group-data-[collapsible=icon]/sidebar-wrapper:hidden"
                  />}
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
