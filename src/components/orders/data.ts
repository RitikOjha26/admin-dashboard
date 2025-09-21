import type { Order } from "./types"

import profile1 from "../../assets/contactsAvatar/profile1.png"
import profile2 from "../../assets/contactsAvatar/profile2.png"
import profile3 from "../../assets/contactsAvatar/profile3.png"
import profile4 from "../../assets/contactsAvatar/profile4.png"
import profile5 from "../../assets/contactsAvatar/profile5.png"

export const orders: Order[] = [
  { id: "#CM9801", user: { name: "Natali Craig", avatar: profile1 }, project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CM9802", user: { name: "Kate Morrison", avatar: profile5 }, project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
  { id: "#CM9803", user: { name: "Drew Cano", avatar: profile2 }, project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9804", user: { name: "Orlando Diggs", avatar: profile3 }, project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9805", user: { name: "Andi Lane", avatar: profile4 }, project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },

  { id: "#CM9806", user: { name: "Marco Steele", avatar: profile2 }, project: "Billing Service", address: "Clifford Street Miami", date: "2 hours ago", status: "In Progress" },
  { id: "#CM9807", user: { name: "Ivy Patterson", avatar: profile1 }, project: "Marketing Site", address: "Elmwood Ave Detroit", date: "3 hours ago", status: "Pending" },
  { id: "#CM9808", user: { name: "Felix Norton", avatar: profile3 }, project: "iOS App", address: "Harbor Rd Seattle", date: "Yesterday", status: "Approved" },
  { id: "#CM9809", user: { name: "Rhea Kapoor", avatar: profile5 }, project: "Payments Portal", address: "Queens Blvd NYC", date: "Today, 9:40 AM", status: "In Progress" },
  { id: "#CM9810", user: { name: "Noah Finch", avatar: profile4 }, project: "Docs Platform", address: "Cedar Lane Austin", date: "Last week", status: "Complete" },

  { id: "#CM9811", user: { name: "Uma Sharma", avatar: profile1 }, project: "Auth Service", address: "Sunset Ave Phoenix", date: "Just now", status: "Pending" },
  { id: "#CM9812", user: { name: "Victor Han", avatar: profile2 }, project: "Chat Widget", address: "King Street Boston", date: "A minute ago", status: "Approved" },
  { id: "#CM9813", user: { name: "Lena Brooks", avatar: profile3 }, project: "Design System", address: "Oak Drive Denver", date: "4 hours ago", status: "Rejected" },
  { id: "#CM9814", user: { name: "Quinn Patel", avatar: profile5 }, project: "Onboarding Flow", address: "Ridge Rd Chicago", date: "Today, 8:15 AM", status: "Complete" },
  { id: "#CM9815", user: { name: "Yara Gomes", avatar: profile4 }, project: "Partner Portal", address: "Bay Street Tampa", date: "Yesterday", status: "In Progress" },

  { id: "#CM9816", user: { name: "Ethan Cole", avatar: profile2 }, project: "ETL Pipelines", address: "Hillcrest Ave Dallas", date: "2 days ago", status: "Approved" },
  { id: "#CM9817", user: { name: "Sofia Ray", avatar: profile1 }, project: "Campaign Manager", address: "Pine Street Portland", date: "3 days ago", status: "Pending" },
  { id: "#CM9818", user: { name: "Harper Singh", avatar: profile3 }, project: "Android App", address: "Magnolia Blvd LA", date: "Last month", status: "Rejected" },
  { id: "#CM9819", user: { name: "Jonah Mills", avatar: profile4 }, project: "Usage Analytics", address: "Central Ave KC", date: "Today, 10:05 AM", status: "In Progress" },
  { id: "#CM9820", user: { name: "Priya Nair", avatar: profile5 }, project: "CMS Revamp", address: "Lytton Ave Palo Alto", date: "5 hours ago", status: "Complete" },

  { id: "#CM9821", user: { name: "Caleb Brown", avatar: profile1 }, project: "Inventory App", address: "Maple Street Boise", date: "1 hour ago", status: "Approved" },
  { id: "#CM9822", user: { name: "Mira Chen", avatar: profile2 }, project: "Reporting Hub", address: "Willow Way Raleigh", date: "Yesterday", status: "In Progress" },
  { id: "#CM9823", user: { name: "Diego Alvarez", avatar: profile3 }, project: "Fraud Monitor", address: "River Rd Cincinnati", date: "Just now", status: "Pending" },
  { id: "#CM9824", user: { name: "Greta Novak", avatar: profile5 }, project: "Docs Search", address: "Broadway NYC", date: "Today, 7:55 AM", status: "Approved" },
  { id: "#CM9825", user: { name: "Ayaan Sheikh", avatar: profile4 }, project: "Admin Portal", address: "Birch Lane Madison", date: "2 hours ago", status: "Rejected" },

  { id: "#CM9826", user: { name: "Ruby Park", avatar: profile1 }, project: "Email Service", address: "Linden Ave Minneapolis", date: "A minute ago", status: "Complete" },
  { id: "#CM9827", user: { name: "Owen Walsh", avatar: profile2 }, project: "Support Desk", address: "Market St San Jose", date: "Today, 9:02 AM", status: "In Progress" },
  { id: "#CM9828", user: { name: "Bianca Rossi", avatar: profile3 }, project: "Docs Uploader", address: "Vine Street Philly", date: "Yesterday", status: "Approved" },
  { id: "#CM9829", user: { name: "Tariq Malik", avatar: profile4 }, project: "App Gateway", address: "Park Ave Newark", date: "3 hours ago", status: "Pending" },
  { id: "#CM9830", user: { name: "Hannah Wolfe", avatar: profile5 }, project: "Storefront", address: "Spruce St Pittsburgh", date: "Last week", status: "Rejected" },

  { id: "#CM9831", user: { name: "Iris Becker", avatar: profile2 }, project: "Docs Exporter", address: "Pearl St Boulder", date: "Just now", status: "In Progress" },
  { id: "#CM9832", user: { name: "Karthik Menon", avatar: profile1 }, project: "KYC Service", address: "College Ave Madison", date: "Today, 10:31 AM", status: "Approved" },
  { id: "#CM9833", user: { name: "Zoey Park", avatar: profile3 }, project: "Notifications", address: "Grove St Newark", date: "Yesterday", status: "Pending" },
  { id: "#CM9834", user: { name: "Leo Dubois", avatar: profile5 }, project: "Checkout Flow", address: "Union Sq Boston", date: "2 days ago", status: "Complete" },
  { id: "#CM9835", user: { name: "Amara Patel", avatar: profile4 }, project: "Project Tracker", address: "Ash Ave Tempe", date: "Today, 6:45 AM", status: "In Progress" },

  { id: "#CM9836", user: { name: "Mateo Ruiz", avatar: profile2 }, project: "Event Bus", address: "Mission St SF", date: "4 hours ago", status: "Approved" },
  { id: "#CM9837", user: { name: "Nina Costa", avatar: profile3 }, project: "Task Manager", address: "Baker St London", date: "Last month", status: "Rejected" },
  { id: "#CM9838", user: { name: "Ola Jensen", avatar: profile1 }, project: "Release Portal", address: "Frogner Oslo", date: "Yesterday", status: "Complete" },
  { id: "#CM9839", user: { name: "Pablo Mendez", avatar: profile4 }, project: "Price Engine", address: "Liberty Ave Havana", date: "3 hours ago", status: "Pending" },
  { id: "#CM9840", user: { name: "Rina Sato", avatar: profile5 }, project: "Data Catalog", address: "Chiyoda Tokyo", date: "A minute ago", status: "Approved" },

  { id: "#CM9841", user: { name: "Samir Qureshi", avatar: profile2 }, project: "ML Training", address: "MG Road Bengaluru", date: "Today, 11:10 AM", status: "In Progress" },
  { id: "#CM9842", user: { name: "Tessa Lloyd", avatar: profile1 }, project: "A/B Platform", address: "George St Sydney", date: "Yesterday", status: "Approved" },
  { id: "#CM9843", user: { name: "Uri Katz", avatar: profile3 }, project: "Feature Flags", address: "Allenby Tel Aviv", date: "2 hours ago", status: "Pending" },
  { id: "#CM9844", user: { name: "Vera Petrov", avatar: profile5 }, project: "SLA Monitor", address: "Tverskaya Moscow", date: "Last week", status: "Rejected" },
  { id: "#CM9845", user: { name: "Will Foster", avatar: profile4 }, project: "OKR Dashboard", address: "Queen St Toronto", date: "Just now", status: "Complete" },

  { id: "#CM9846", user: { name: "Xin Li", avatar: profile1 }, project: "API Gateway", address: "Nanjing Rd Shanghai", date: "3 hours ago", status: "Approved" },
  { id: "#CM9847", user: { name: "Yusuf Khan", avatar: profile2 }, project: "Risk Engine", address: "Khalid Rd Dubai", date: "Today, 9:22 AM", status: "In Progress" },
  { id: "#CM9848", user: { name: "Zara Ali", avatar: profile3 }, project: "HR Portal", address: "Jinnah Ave Islamabad", date: "Yesterday", status: "Pending" },
  { id: "#CM9849", user: { name: "Aiden Moore", avatar: profile4 }, project: "Courier App", address: "Queen St Auckland", date: "Last month", status: "Rejected" },
  { id: "#CM9850", user: { name: "Bella Nguyen", avatar: profile5 }, project: "Booking Engine", address: "District 1 Saigon", date: "A minute ago", status: "Complete" },

  { id: "#CM9851", user: { name: "Cyrus Lee", avatar: profile2 }, project: "Geo Services", address: "Bonifacio Taguig", date: "Just now", status: "Approved" },
  { id: "#CM9852", user: { name: "Daria Novak", avatar: profile3 }, project: "Push Service", address: "Karlovo Prague", date: "5 hours ago", status: "In Progress" },
  { id: "#CM9853", user: { name: "Eli Turner", avatar: profile1 }, project: "Billing Ledger", address: "Canal St New Orleans", date: "Yesterday", status: "Pending" },
  { id: "#CM9854", user: { name: "Farah Ahmed", avatar: profile5 }, project: "Crypto Wallet", address: "Zamalek Cairo", date: "Today, 7:05 AM", status: "Approved" },
  { id: "#CM9855", user: { name: "Gabe Ortiz", avatar: profile4 }, project: "POS System", address: "Florida Rd Durban", date: "3 hours ago", status: "Rejected" },

  { id: "#CM9856", user: { name: "Helena Park", avatar: profile1 }, project: "Audit Trail", address: "Kirkstall Leeds", date: "Last week", status: "Complete" },
  { id: "#CM9857", user: { name: "Idris Bello", avatar: profile2 }, project: "ETL Scheduler", address: "Ikeja Lagos", date: "Today, 8:41 AM", status: "In Progress" },
  { id: "#CM9858", user: { name: "Jia Wu", avatar: profile3 }, project: "Data Lake UI", address: "Yuexiu Guangzhou", date: "2 days ago", status: "Approved" },
  { id: "#CM9859", user: { name: "Kira Volkov", avatar: profile4 }, project: "Security Hub", address: "Nevsky Prospekt", date: "Yesterday", status: "Pending" },
  { id: "#CM9860", user: { name: "Luca Ferrari", avatar: profile5 }, project: "Pricing Tool", address: "Navigli Milan", date: "4 hours ago", status: "Rejected" },
]
