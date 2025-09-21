import { Button } from "@/components/ui/button"
import { useSidebarBus , useSidebar } from "@/components/ui/sidebar"
import { PanelLeftIcon } from "lucide-react"

type Props = React.ComponentProps<typeof Button> & {
  targetId: string
  iconOnly?: boolean
}

export function SidebarTrigger({
  targetId,
  className = "",
  iconOnly = false,
  onClick,
  children,
  ...props
}: Props) {
  const bus = useSidebarBus()
  
   const {state } = useSidebar()
  const isOpen = state === "expanded"


  return (
    <Button
      variant="ghost"
      size="icon"
      className={`size-7 ${className}`}
      onClick={(e) => {
        onClick?.(e)
        bus.toggle(targetId)
        
      }}
      aria-controls={`sidebar-${targetId}`}
      aria-expanded={isOpen}
      aria-label={isOpen ? `Close ${targetId} sidebar` : `Open ${targetId} sidebar`}
      title={isOpen ? "Close panel" : "Open panel"}
      {...props}
    >
      {children ?? <PanelLeftIcon />}
      {!iconOnly && <span className="sr-only">Toggle {targetId} sidebar</span>}
    </Button>
  )
}
