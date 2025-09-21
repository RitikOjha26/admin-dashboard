import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

import profile1 from "../../assets/contactsAvatar/profile1.png"
import profile2 from "../../assets/contactsAvatar/profile2.png"
import profile3 from "../../assets/contactsAvatar/profile3.png"
import profile4 from "../../assets/contactsAvatar/profile4.png"
import profile5 from "../../assets/contactsAvatar/profile5.png"
import profile6 from "../../assets/contactsAvatar/profile6.png"

export type ContactData = {
  name: string
  src: string
}

const contacts: ContactData[] = [
  { name: "Natali Craig", src: profile1 },
  { name: "Drew Cano", src: profile2 },
  { name: "Orlando Diggs", src: profile3 },
  { name: "Andi Lane", src: profile4 },
  { name: "Kate Morrison", src: profile5 },
  { name: "Koray Okumus", src: profile6 },
]

function ContactRow({ name, src }: ContactData) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton className="h-auto py-0 pr-2 gap-3 rounded-lg hover:bg-muted/50">
        <img
          src={src}
          alt=""
          width={28}
          height={28}
          className="rounded-full object-cover"
        />
        <span className="text-[14px] leading-5 text-foreground truncate">
          {name}
        </span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export default function ContactList() {
  return (
    <SidebarMenu className="space-y-3">
      {contacts.map((contacts) => (
        <ContactRow key={contacts.name} {...contacts} />
      ))}
    </SidebarMenu>
  )
}
