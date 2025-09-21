import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Layout from "./components/layout/layout"
import MainContent from "./components/mainContent"
import OrderList from "./components/order-list"
import "leaflet/dist/leaflet.css"
import "./App.css"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}
