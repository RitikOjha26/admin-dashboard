import * as React from "react"
import { useEffect } from "react"
import {
  BookOpen,
  Briefcase,
  FileText,
  FolderOpen,
  MessageCircle,
  ShoppingBag,
  User,
  Users,
} from "lucide-react"
import ProfileCard from "@/components/ui/profile-card"
import avatar from "@/assets/contactsAvatar/profile2.png"
import { useSidebarBus, useSidebar } from "@/components/ui/sidebar"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import PinnedQuickAccess from "./ui/pinned-quick-access"

const data = {
  dashboards: [
    {
      title: "eCommerce",
      url: "#",
      icon: ShoppingBag,
      items: [
        { title: "Orders", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Summary", url: "#" },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
      ],
    },
    {
      title: "Online Courses",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Management", url: "#" },
        { title: "Development", url: "#" },
        { title: "AI/ML", url: "#" },
      ],
    },
  ],
  pages: [
    {
      title: "User Profile",
      url: "#",
      icon: User,
      items: [
        { title: "Overview", url: "#" },
        { title: "Projects", url: "#" },
        { title: "Campaigns", url: "#" },
        { title: "Documents", url: "#" },
        { title: "Followers", url: "#" },
      ],
    },
    {
      title: "Account",
      url: "#",
      icon: FileText,
      items: [
        { title: "Profile", url: "#" },
        { title: "Security", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Notifications", url: "#" },
        { title: "Sessions", url: "#" },
        { title: "Connected apps", url: "#" },
      ],
    },
    {
      title: "Corporate",
      url: "#",
      icon: Users,
      items: [
        { title: "Directory", url: "#" },
        { title: "Departments", url: "#" },
        { title: "Policies", url: "#" },
        { title: "Compliance", url: "#" },
        { title: "Assets", url: "#" },
        { title: "Audit logs", url: "#" },
      ],
    },
    {
      title: "Blog",
      url: "#",
      icon: Briefcase,
      items: [
        { title: "Posts", url: "#" },
        { title: "Drafts", url: "#" },
        { title: "Categories", url: "#" },
        { title: "Tags", url: "#" },
        { title: "Comments", url: "#" },
        { title: "Analytics", url: "#" },
      ],
    },
    {
      title: "Social",
      url: "#",
      icon: MessageCircle,
      items: [
        { title: "Inbox", url: "#" },
        { title: "Mentions", url: "#" },
        { title: "Scheduled", url: "#" },
        { title: "Audience", url: "#" },
        { title: "Campaigns", url: "#" },
        { title: "Insights", url: "#" },
      ],
    }
  ],
}

type Props = React.ComponentProps<typeof Sidebar> & {
  sidebarId?: string
}

export function AppSidebar({ sidebarId = "left", ...props }: Props) {

  const bus = useSidebarBus()
  const { open, setOpen } = useSidebar()

  // Bus -> provider
  useEffect(() => {
  const unsubscribe = bus.subscribe(sidebarId, setOpen)
  return () => {
    unsubscribe() // call it, but ignore its boolean
  }
}, [bus, sidebarId, setOpen])



 useEffect(() => {
    bus.set(sidebarId, open)
  }, [bus, sidebarId ,open])

  return (
    <Sidebar side="left" collapsible="icon" {...props}>
      <SidebarHeader>
        <ProfileCard name="ByeWind" avatarSrc={avatar} />
      </SidebarHeader>
      <SidebarContent>
        <PinnedQuickAccess />
        <NavMain items={data.dashboards} heading="Dashboards" />
        <NavMain items={data.pages} heading="Pages" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
