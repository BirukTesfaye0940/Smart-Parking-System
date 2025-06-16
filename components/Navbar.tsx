'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, Car, Home, CreditCard, Info, Mail, User, LogOut, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoading = status === 'loading';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileDropdown = () => setIsMobileDropdownOpen((prev) => !prev);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/pay', label: 'Pay', icon: CreditCard },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-xl border-b border-white/20 shadow-2xl'
            : 'bg-black/30 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20">
                <Car className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-200 to-purple-300 bg-clip-text text-transparent">
                Smart Parking
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-xl text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Right side Auth/Actions */}
            <div className="hidden lg:flex items-center space-x-3 relative">
              {isLoading ? (
                <div className="animate-pulse flex space-x-2">
                  <div className="h-9 w-16 bg-white/10 rounded-lg"></div>
                  <div className="h-9 w-20 bg-white/10 rounded-lg"></div>
                </div>
              ) : user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-white/70 text-sm">Hi, <span className="text-white font-medium">{user.name}</span></span>
                  <button
                    onClick={() => signOut()}
                    className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white border border-red-500/30 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  {/* Login Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="group flex items-center space-x-2 px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      <User className="h-4 w-4" />
                      <span>Login</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-black/70 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg z-50">
                        <a href="/login" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-t-xl">User Login</a>
                        <a href="/login/admin" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10">Admin Login</a>
                        <a href="/login/owner" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-b-xl">Owner Login</a>
                      </div>
                    )}
                  </div>
                  <a
                    href="/register"
                    className="group px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 hover:from-blue-500/40 hover:to-purple-600/40 text-white border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm font-medium shadow-lg"
                  >
                    <span className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Register</span>
                    </span>
                  </a>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 bg-white/5 backdrop-blur-xl border-t border-white/10 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center space-x-3 p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="h-px bg-white/10 my-4" />

            {isLoading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-12 bg-white/10 rounded-xl"></div>
                <div className="h-12 bg-white/10 rounded-xl"></div>
              </div>
            ) : user ? (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-sm text-white/70">Signed in as</div>
                  <div className="text-white font-medium">{user.email}</div>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                  className="group w-full flex items-center space-x-3 p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white border border-red-500/30 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={toggleMobileDropdown}
                  className="group w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isMobileDropdownOpen && (
                  <div className="ml-6 space-y-1">
                    <a href="/login" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl">User Login</a>
                    <a href="/login/admin" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl">Admin Login</a>
                    <a href="/login/owner" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl">Owner Login</a>
                  </div>
                )}
                <a
                  href="/register"
                  onClick={closeMenu}
                  className="group w-full flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 hover:from-blue-500/40 hover:to-purple-600/40 text-white border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <User className="h-5 w-5" />
                  <span>Register Now</span>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
