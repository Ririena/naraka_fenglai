import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { Book, Trophy, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GiLockedChest } from "react-icons/gi";
export default function GameSidebar({ isCollapsed, currentPath }) {
  return (
    <>
      <section className="hidden md:block lg:block xl:block">
        <div
          className={`flex flex-col h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-16" : "w-64"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-r border-b border-gray-700">
            <Link
              href="/"
              className={`flex items-center space-x-2 ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <Image src="/naraka-white.png" height={100} width={250} />
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto border-r border-t border-b border-gray-700">
            <ul className="py-4 border-t border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200 ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } ${currentPath === "/" ? "bg-red-800" : ""}`}
                >
                  <AiFillHome size={"20px"} />
                  {!isCollapsed && <span className="text-lg">Home</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/character/Viper_Ning"
                  className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200 ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } ${currentPath === "/character" ? "bg-red-800" : ""}`}
                >
                  <FaUsers size={"20px"} />
                  {!isCollapsed && <span className="text-lg">Characters</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/weapons"
                  className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200 ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } ${currentPath === "/weapons" ? "bg-red-800" : ""}`}
                >
                  <LuBox size={"20px"} />
                  {!isCollapsed && <span className="text-lg">Weapons</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/souljade"
                  className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200 ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } ${currentPath === "/souljades" ? "bg-red-800" : ""}`}
                >
                  <Image
                    src="/souljade_selected.BF5ff2a2.avif"
                    height={20}
                    width={20}
                  />
                  {!isCollapsed && <span className="text-lg">SoulJades</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/talents"
                  className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200 ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } ${currentPath === "/talents" ? "bg-red-800" : ""}`}
                >
                  <Book size={"20px"} />
                  {!isCollapsed && <span className="text-lg">Talents</span>}
                </Link>
              </li>
             
              <li>
                <Link
                  href="/treasure"
                  className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200 ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } ${currentPath === "/treasure" ? "bg-red-800" : ""}`}
                >
                  <GiLockedChest size={"20px"} />
                  {!isCollapsed && <span className="text-lg">Treasure</span>}
                </Link>
              </li>
              <Separator className="bg-gray-700 my-4" />
              <li>
                <Link
                  href="/lore"
                  className={`flex items-center px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-200 ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } ${currentPath === "/lore" ? "bg-red-800" : ""}`}
                >
                  <Book size={"20px"} />
                  {!isCollapsed && <span className="text-lg">Lore</span>}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-r border-b border-gray-700">
            <button className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
              {isCollapsed ? "-" : "Play Now"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
