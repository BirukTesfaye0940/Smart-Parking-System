"use client"

import { Menu } from "lucide-react"
import { useRef } from "react"
import OwnerSidebar from "../../../components/dashboard-components/OwnerSidebar"

export default function AdminLayout({ children }) {
  const checkboxRef = useRef(null)

  const toggleDrawer = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked
    }
  }

  const closeDrawer = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false
    }
  }

  return (
    <div className="drawer lg:drawer-open">
      <input ref={checkboxRef} id="admin-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <button onClick={toggleDrawer} className="btn btn-ghost lg:hidden m-4 w-fit">
          <Menu className="w-6 h-6" />
        </button>

        <main className="px-4 py-6">{children}</main>
      </div>

      <OwnerSidebar closeDrawer={closeDrawer} />
    </div>
  )
}