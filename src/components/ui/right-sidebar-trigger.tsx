
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { PanelLeftIcon } from "lucide-react"

export function RightSidebarTrigger({targetId = "right" ,className="",
  iconOnly = false }: {targetId:string, className?: string; iconOnly?: boolean }) {
  const { id, toggleSidebar, state, isMobile, openMobile } = useSidebar()
  const isOpen = isMobile ? openMobile : state === "expanded"
  if (id === targetId) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`size-7 ${className}`}
      onClick={() => {
        // For the right sidebar instance, provider context is separate
        toggleSidebar()
      }}
      aria-label={isOpen ? "Close right sidebar" : "Open right sidebar"}
      title={isOpen ? "Close panel" : "Open panel"}
    >
      <PanelLeftIcon/>
    </Button>
  )
}
