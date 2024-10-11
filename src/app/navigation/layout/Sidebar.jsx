"use client"

import { useState } from 'react'
import GameSidebar from './game-sidebar';
import { usePathname } from 'next/navigation'
import GameTopNav from './game-top-nav';


export default function GameSidebars({ children }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const pathname = usePathname(); 


  const handleToggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <GameSidebar isCollapsed={isSidebarCollapsed}  currentPath={pathname} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <GameTopNav onToggleSidebar={handleToggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        <main className="flex-1 overflow-y-auto p-8 bg-gray-800 text-white">
          <div className="space-y-0">{children}</div> {/* Prevents margin between children */}
        </main>
      </div>
    </div>
  )
}