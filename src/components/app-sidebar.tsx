"use client"

import * as React from "react"
import {
  BookOpen,
  Briefcase,
  FileText,
  FolderOpen,
  MessageCircle,
  PieChart,
  ShoppingBag,
  User,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import PinnedQuickAccess from "./ui/pinned-quick-access"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: PieChart,
      plan: "Enterprise",
    },
  ],
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <PinnedQuickAccess/>
        <NavMain items={data.dashboards} heading="Dashboards" />
        <NavMain items={data.pages} heading="Pages" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
