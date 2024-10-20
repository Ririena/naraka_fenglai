import { ChevronLeft, Menu,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { AiFillHome } from "react-icons/ai";

export default function GameTopNav({
  onToggleSidebar,
  isSidebarCollapsed,
  isMobile,
}) {
  return (
    <nav className="bg-gray-900 text-white border border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Hamburger menu for mobile view */}
            <div className="block sm:hidden">
              <Sheet className="">
                <SheetTrigger asChild>
                  <Menu className="hover:cursor-pointer" />
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="bg-gray-900 border-r border-t border-b border-gray-700 text-white"
                >
                  <SheetHeader className="text-white">
                    <div className="flex justify-center items-start">
                      <Image src="/naraka-logo.webp" width={250} height={200} />
                    </div>
                    <div className="">
                      <ul className="py-4 border-t border-gray-700">
                        <li>
                          <Link
                            href="/"
                            className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200` }
                          >
                            <AiFillHome size={"20px"} />
                          
                              <span className="text-lg">Home</span>
                         
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            {/* Sidebar toggle for desktop view */}
            <div className="hidden md:block">
              <button
                onClick={onToggleSidebar}
                className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {isSidebarCollapsed ? (
                  <ChevronLeft className="h-6 w-6" />
                ) : (
                  <ChevronLeft className="h-6 w-6 rotate-180" />
                )}
              </button>

            </div>
          </div>
          <div className="block sm:hidden">
            <div className="ml-4 flex items-center space-x-4"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
