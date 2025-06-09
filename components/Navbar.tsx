"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-16 right-4 w-48 bg-base-100 shadow-lg rounded-lg z-50 border border-base-300">
              <ul className="menu menu-compact gap-1 p-2">
                <li>
                  <Link href="/" onClick={closeMenu} className="btn btn-sm btn-ghost w-full justify-start">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={closeMenu} className="btn btn-sm btn-ghost w-full justify-start">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={closeMenu} className="btn btn-sm btn-ghost w-full justify-start">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/register" onClick={closeMenu} className="btn btn-sm btn-primary w-full justify-start">
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="btn btn-sm btn-ghost text-error w-full justify-start"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl font-serif">
        🚗 Smart Parking System
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link href="/" className="btn btn-sm btn-ghost">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="btn btn-sm btn-ghost">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn btn-sm btn-ghost">
                Contact
              </Link>
            </li>
            {/* <li>
              <Link href="/register" className="btn btn-sm btn-primary">
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" className="btn btn-sm btn-ghost text-error">
                Login
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-end gap-1">
        <Link href="/login" className="btn btn-sm btn-ghost text-blue-600">
                Login
        </Link>
        <Link href={"/register"} className="btn">Register Now</Link>
      </div>
    </div>
  )
}
