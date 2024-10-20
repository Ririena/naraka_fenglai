"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navItems = [
  { label: 'GAME', href: '/game' },
  { label: 'COMMUNITY', href: '/community' },
  { label: 'ESPORT', href: '/esport' },
  { label: 'GUIDE', href: '/guide' },
  { label: 'EXPLORE', href: '/explore' },
]

export default function GameNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">Naraka</span>
              <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 21h22L12 2zm0 3.83L19.13 19H4.87L12 5.83z" />
              </svg>
            </Link>
            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    relative px-3 py-2 rounded-md text-sm font-medium
                    uppercase tracking-wider
                    hover:text-red-500 transition-colors duration-300
                    ${activeItem === item.label ? 'text-red-500' : ''}
                  `}
                  onMouseEnter={() => setActiveItem(item.label)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {item.label}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5 bg-red-500
                      transition-all duration-300 ease-in-out
                      ${activeItem === item.label ? 'scale-x-100' : 'scale-x-0'}
                    `}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="bg-red-600 text-white border-none hover:bg-red-700">
              LOG IN
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <Button variant="outline" className="w-full bg-red-600 text-white border-none hover:bg-red-700">
                LOG IN
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}