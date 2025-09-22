Here’s a polished **README.md** for your GitHub project that follows best practices with clear structure, badges, and formatting:

***

# Admin Dashboard (React + TypeScript + Vite)

A modern, responsive **Admin Dashboard** built with **React, TypeScript, Vite**, and **Tailwind CSS**. This dashboard includes dual sidebars, a mobile-friendly Sheet experience, theme switching (light/dark/system), and modular components such as cards, charts, and tables.

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logo)

  
![React](https://img.shields.io/badge/React-20232A?logo=react&)

  
  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)

  
  
  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css&logoColor=fffFeatures)

- **Dual Sidebars**: Left navigation and right utilities with desktop/off-canvas & mobile Sheet behavior.  
- **Responsive Layouts**: Mobile-first design with fine-tuned paddings, font scales, and overflow handling.  
- **Theme System**: Light, dark, and system themes with localStorage persistence & mobile color-scheme sync.  
- **Dashboard Components**: InfoCards, revenue charts, top selling tables, and total sales cards.  
- **Accessibility**: ARIA attributes, keyboard hints, and semantic HTML for improved UX.  

***

## 🛠 Tech Stack

- **Frontend**: React + TypeScript + Vite  
- **Styling**: Tailwind CSS (`darkMode: "class"`), Lucide icons, shadcn-style UI primitives  
- **Routing**: React Router with `Outlet` for routed content  
- **State/UX**: Context providers & SidebarBus for cross-component communication  
- **Charts & Tables**: Modular, responsive, and mobile-first  

***

## 📁 Project Structure

```
src/
├─ assets/                  # Static assets like images and fonts
├─ components/              # Reusable UI components
│  ├─ ui/                   # Core UI primitives (Sidebar, Sheet, Tooltip, etc.)
│  ├─ app-sidebar/          # Left navigation content
│  ├─ right-sidebar/        # Right utilities panel
│  ├─ app-navbar/           # Sticky header with triggers & theme toggle
├─ dashboard/               # Dashboard-specific components
│  ├─ cards/                # InfoCards and metrics cards
│  ├─ charts/               # Chart components
│  └─ tables/               # Table components
├─ routes/                  # Route definitions and layout
├─ App.tsx                  # Main application component
├─ main.tsx                 # Entry point for the application
public/                     # Static public files
```

***

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/RitikOjha26/admin-dashboard.git
cd admin-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

***

## 🎨 Theming

- Supported themes: `"light"` | `"dark"` | `"system"`  
- Theme preference is **persisted in localStorage**.  
- Detects system preference via `matchMedia`.  
- Applies Tailwind's `dark` class and `document.documentElement.style.colorScheme` for proper mobile rendering.  

**Example usage:**

```tsx
import { useTheme } from './components/ui/theme-provider';

const ThemeToggle = () => {
  const { resolved, toggle } = useTheme();
  return (
    <button onClick={toggle}>
      {resolved === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};
```

***

## 🖥 Sidebar System

- **Context Triggers (Recommended):** Use `useSidebar().toggleSidebar()` inside the correct `SidebarProvider`.  
- **Bus-Bridged Triggers:** For triggers outside providers, use `SidebarBus` to synchronize desktop (open) & mobile (openMobile) states.  
- **Right Sidebar:** Supports `side="right"`, `variant="inset"`, `collapsible="offcanvas"`.  

***

## 📐 Responsive Layout Guidelines

- **Cards:** Mobile-first paddings and font sizes; scale up at `sm`/`md` breakpoints.  
- **Tables:** Rounded headers, `border-collapse: separate`, sticky headers without clipping.  
- **Grids:** Consistent paddings: `pt-3 sm:pt-6 lg:pt-[70px]`.  
- **Scrollbars:** Custom styling for Firefox & WebKit with light/dark mode support.  

***

## 🔧 Linting & Code Style

- ESLint with **typescript-eslint + React rules**  
- Vite TS template with strict type-checking  
- Prettier recommended for consistent formatting  

***

## 📦 Deployment

```bash
npm run build
npm run preview
```

Deploy static `dist/` output to **Vercel**, **Netlify**, or any static hosting service.  

***

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature"
   ```
4. Push to branch:  
   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request  

***

Would you like me to also add **preview screenshots** and a **demo link section** at the top to make the README more visually engaging for GitHub?