Admin Dashboard (React + TypeScript + Vite)

A modern, responsive admin dashboard built with React, TypeScript, Vite, and Tailwind CSS. This dashboard features dual sidebars, a mobile-friendly Sheet experience, theme switching (light/dark/system), and modular components like cards, charts, and tables.

🚀 Features

Dual Sidebars: Left navigation and right utilities with desktop/off-canvas and mobile Sheet behavior.

Responsive Layouts: Mobile-first design with fine-tuned paddings, font scales, and overflow handling.

Theme System: Light, dark, and system themes with localStorage persistence and mobile color-scheme sync.

Dashboard Components: InfoCards, Revenue charts, Top Selling tables, Total Sales cards.

Accessibility: ARIA attributes, keyboard hints, and semantic HTML for better UX.

🛠 Tech Stack

Frontend: React + TypeScript + Vite

Styling: Tailwind CSS (darkMode: "class"), Lucide icons, shadcn-style UI primitives

Routing: React Router (Outlet for routed content)

State/UX: Context providers & SidebarBus for cross-component communication

Charts & Tables: Modular, responsive, and mobile-first

📁 Project Structure
src/
├─ assets/                  # Static assets like images and fonts
├─ components/              # Reusable UI components
│  ├─ ui/                   # Core UI primitives (e.g., Sidebar, Sheet, Tooltip)
│  ├─ app-sidebar/          # Left navigation content
│  ├─ right-sidebar/        # Right utilities panel
│  ├─ app-navbar/           # Sticky header with triggers & theme toggle
├─ dashboard/               # Dashboard-specific components
│  ├─ cards/                # InfoCards and other card components
│  ├─ charts/               # Chart components
│  └─ tables/               # Table components
├─ routes/                  # Route definitions and layout
├─ App.tsx                  # Main application component
├─ main.tsx                 # Entry point for the application
public/
├─ index.html               # Main HTML file
├─ vite.svg                 # Vite logo
.gitignore                  # Git ignore rules
.eslint.config.js           # ESLint configuration
.eslint.config.ts           # TypeScript ESLint configuration
package.json                # Project metadata and dependencies
tailwind.config.ts          # Tailwind CSS configuration
tsconfig.app.json           # TypeScript app configuration
tsconfig.json               # TypeScript base configuration
tsconfig.node.json          # TypeScript node configuration
vite.config.ts              # Vite configuration
vercel.json                 # Vercel deployment configuration
components.json             # Component metadata for Storybook or documentation

⚡ Quick Start
# Clone the repository
git clone https://github.com/RitikOjha26/admin-dashboard.git
cd admin-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

🎨 Theming

Supported themes: "light" | "dark" | "system"

Theme preference is persisted in localStorage

Detects system preference via matchMedia

Applies html.classList.toggle("dark", isDark) and sets document.documentElement.style.colorScheme for correct mobile rendering.

Example usage:

import { useTheme } from './components/ui/theme-provider';

const ThemeToggle = () => {
  const { resolved, toggle } = useTheme();
  return (
    <button onClick={toggle}>
      {resolved === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

🖥 Sidebar System
Context Triggers (Recommended)

Place the trigger inside the correct SidebarProvider.

Use useSidebar().toggleSidebar() to update both desktop and mobile states.

Bus-Bridged Triggers

For triggers outside providers, use SidebarBus.

Synchronizes desktop (open) and mobile (openMobile) states.

Right sidebar: side="right", variant="inset", collapsible="offcanvas".

📐 Responsive Layout Guidelines

Cards: Mobile-first paddings and font sizes; scale up at sm/md breakpoints.

Tables: Use border-collapse: separate, rounded headers, sticky headers without clipping.

Grids: Consistent top paddings; pt-3 sm:pt-6 lg:pt-[70px].

Scrollbars: Custom styling with Firefox & WebKit support, respects light/dark modes.

🔧 Linting & Code Style

ESLint with typescript-eslint + React rules

Vite TS template ready for strict type-checking and style enforcement

Prettier recommended for consistent formatting

📦 Deployment

Build: npm run build

Preview: npm run preview

Deploy static output to Vercel, Netlify, or any static host.

🤝 Contributing

Fork the repo

Create your feature branch (git checkout -b feature/my-feature)

Commit changes (git commit -m 'Add feature')

Push (git push origin feature/my-feature)

Open a Pull Request