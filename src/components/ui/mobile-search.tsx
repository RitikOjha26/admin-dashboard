import { useState,useEffect } from "react"
import { CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { CommandDialog as KbdDialog } from "@/components/ui/command"

export function MobileSearch() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") setOpen(true)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      
      <Button
        variant="ghost"
        size="icon"
        className="size-8 md:hidden"
        aria-label="Search"
        title="Search"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
      </Button>

      {/* Mobile Search : Todo  */}
      <KbdDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => setOpen(false)}>Recent pages</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Notifications</CommandItem>
          </CommandGroup>
        </CommandList>
      </KbdDialog>
    </>
  )
}
