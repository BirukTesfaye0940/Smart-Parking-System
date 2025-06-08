"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="navbar bg-base-100 shadow-md px-4 relative">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          🚗 SmartParking
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/" className="btn btn-sm btn-ghost">Home</Link>
          </li>
          <li>
            <Link href="/about" className="btn btn-sm btn-ghost">About</Link>
          </li>
          <li>
            <Link href="/contact" className="btn btn-sm btn-ghost">Contact</Link>
          </li>
          <li>
            <Link href="/logout" className="btn btn-sm btn-ghost text-error">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger for Mobile */}
      <div className="lg:hidden">
        <button
          className="btn btn-ghost"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-base-100 shadow-lg rounded-lg z-50 border border-base-300">
          <ul className="menu menu-compact gap-1 p-2">
            <li>
              <Link href="/" onClick={closeMenu} className="btn btn-sm btn-ghost w-full justify-start">Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu} className="btn btn-sm btn-ghost w-full justify-start">About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu} className="btn btn-sm btn-ghost w-full justify-start">Contact</Link>
            </li>
            <li>
              <Link href="/logout" onClick={closeMenu} className="btn btn-sm btn-ghost text-error w-full justify-start">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
