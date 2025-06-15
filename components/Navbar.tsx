'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Home, CreditCard, Info, Mail, User, LogOut } from 'lucide-react';

// Mock authentication hook for demo purposes
const useAuth = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      // Simulate authenticated user - you can change this to null to see unauthenticated state
      setUser({ name: 'John Doe', email: 'john@example.com' });
      setIsLoading(false);
    }, 1000);
  }, []);

  const signOut = () => {
    setUser(null);
  };

  return { user, isLoading, signOut };
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isLoading, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/pay', label: 'Pay', icon: CreditCard },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-black/30 backdrop-blur-md border-b border-white/10'
      }`}>
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
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
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
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 -z-10" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right side - Auth buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {isLoading ? (
                <div className="animate-pulse flex space-x-2">
                  <div className="h-9 w-16 bg-white/10 rounded-lg"></div>
                  <div className="h-9 w-20 bg-white/10 rounded-lg"></div>
                </div>
              ) : user ? (
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-white/70">
                    Hi, <span className="text-white font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={signOut}
                    className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white border border-red-500/30 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <LogOut className="h-4 w-4 transition-transform group-hover:scale-110" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <a
                    href="/login"
                    className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-medium"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="group px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 hover:from-blue-500/40 hover:to-purple-600/40 text-white border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm font-medium shadow-lg"
                  >
                    <span className="flex items-center space-x-2">
                      <User className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span>Register</span>
                    </span>
                  </a>
                </div>
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

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="px-4 py-6 bg-white/5 backdrop-blur-xl border-t border-white/10">
            <div className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center space-x-3 p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
              
              <div className="h-px bg-white/10 my-4"></div>
              
              {isLoading ? (
                <div className="animate-pulse space-y-3">
                  <div className="h-12 bg-white/10 rounded-xl"></div>
                  <div className="h-12 bg-white/10 rounded-xl"></div>
                </div>
              ) : user ? (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-sm text-white/70">Signed in as</div>
                    <div className="text-white font-medium">{user.name}</div>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      closeMenu();
                    }}
                    className="group w-full flex items-center space-x-3 p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white border border-red-500/30 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <LogOut className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <a
                    href="/login"
                    onClick={closeMenu}
                    className="group w-full flex items-center space-x-3 p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    <User className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium">Login</span>
                  </a>
                  <a
                    href="/register"
                    onClick={closeMenu}
                    className="group w-full flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 hover:from-blue-500/40 hover:to-purple-600/40 text-white border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    <User className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium">Register Now</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;