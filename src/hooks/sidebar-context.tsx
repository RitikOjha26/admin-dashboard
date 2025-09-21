import {
  SidebarProvider as BaseProvider,
  useSidebar as baseUseSidebar,
} from "@/components/ui/sidebar"

export const LeftSidebarProvider = BaseProvider
export const RightSidebarProvider = BaseProvider

export const useLeftSidebar = baseUseSidebar
export const useRightSidebar = baseUseSidebar