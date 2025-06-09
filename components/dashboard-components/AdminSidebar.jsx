"use client"

import Link from "next/link"
import { LogOut, Users, Map, ParkingCircle, ClipboardList, Star, Bell, X } from "lucide-react"

export default function AdminSidebar({ closeDrawer }) {
  const navLinks = [
    { href: "/dashboard/admin", label: "Overview", icon: <ClipboardList size={18} /> },
    { href: "/dashboard/admin/users", label: "Users", icon: <Users size={18} /> },
    { href: "/dashboard/admin/owners", label: "Owners", icon: <Users size={18} /> },
    { href: "/dashboard/admin/lots", label: "Parking Lots", icon: <ParkingCircle size={18} /> },
    { href: "/dashboard/admin/bookings", label: "Bookings", icon: <ClipboardList size={18} /> },
    { href: "/dashboard/admin/reviews", label: "Reviews", icon: <Star size={18} /> },
    { href: "/dashboard/admin/notifications", label: "Notifications", icon: <Bell size={18} /> },
    { href: "/dashboard/admin/geo-insights", label: "Geo Insights", icon: <Map size={18} /> },
  ]

  return (
    <div className="drawer-side z-40">
      <label htmlFor="admin-drawer" className="drawer-overlay" onClick={closeDrawer}></label>

      <aside className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
        {/* Close button for mobile */}
        <div className="flex justify-between items-center mb-6 lg:justify-center">
          <h2 className="text-2xl font-bold text-center lg:w-full">Admin</h2>
          <button 
            onClick={closeDrawer}
            className="btn btn-ghost btn-sm lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {navLinks.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition mb-2"
            onClick={closeDrawer} // Close drawer on navigation
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </aside>
    </div>
  )
}