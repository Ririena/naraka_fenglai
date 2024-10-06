"use client"

import { useState, useEffect } from 'react';
import GameSidebar from './game-sidebar';
import GameTopNav from './game-top-nav';

export default function GameLayout({ children }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);



  const handleToggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <GameSidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <GameTopNav onToggleSidebar={handleToggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        <main className="flex-1 overflow-y-auto p-8 bg-gray-800 text-white">
          <div className="flex flex-col">{children}</div> {/* Remove space-y-0 */}
        </main>
      </div>
    </div>
  );
}
