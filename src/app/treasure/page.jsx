"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, Eye, ChevronLeft, ChevronRight } from "lucide-react";

// Assuming the treasures data is imported from a JSON file
import { treasures } from "@/json/TreasureList";
import { Separator } from "@/components/ui/separator";

export default function TreasureList() {
  const [selectedTreasure, setSelectedTreasure] = useState(treasures[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selectedTreasure.items[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-4 space-y-2 md:space-y-0">
        <div>
          <div className="flex items-center space-x-2">
            <Info size={20} />
            <h1 className="text-2xl md:text-3xl font-bold">
              {selectedTreasure.name}
            </h1>
          </div>
          <p className="text-red-500 text-sm">
            {selectedTreasure.quantity === 0
              ? "No longer available for purchase"
              : `Available: ${selectedTreasure.quantity}`}
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-amber-400">
            Opened: {selectedTreasure.quantity} Treasure(s)
          </p>
          <p className="text-red-500 text-sm">
            Legendary is guaranteed in 100 Treasures (recurrent)
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Treasure List */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-4 space-y-2">
          <div className="flex space-x-2 mb-2">
            <button className="px-4 py-1 bg-amber-800 text-amber-200 rounded text-sm">
              Current
            </button>
            <button className="px-4 py-1 bg-gray-700 text-gray-300 rounded text-sm">
              Previous
            </button>
          </div>
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible space-x-2 md:space-x-0 md:space-y-2">
            {treasures.map((treasure) => (
              <div
                key={treasure.id}
                className={`relative cursor-pointer flex-shrink-0 md:flex-shrink ${
                  selectedTreasure.id === treasure.id
                    ? "ring-2 ring-amber-500"
                    : ""
                }`}
                onClick={() => {
                  setSelectedTreasure(treasure);
                  setSelectedItem(treasure.items[0]);
                  setShowDetails(false);
                }}
              >
                <Image
                  src={treasure.image}
                  alt={treasure.name}
                  width={200}
                  height={40}
                  className="rounded w-40 md:w-full h-auto"
                />
                {/* <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 px-1 rounded text-xs">
                  {treasure.quantity}
                </div> */}
                {selectedTreasure.id === treasure.id && (
                  <div className="absolute top-1 right-1">
                    <Eye size={20} className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="flex-1 relative">
          {!showDetails ? (
            <>
              <Image
                src={selectedTreasure.fullImage}
                alt={selectedTreasure.name}
                width={800}
                height={600}
                className="w-full h-64 md:h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={selectedTreasure.image}
                  alt={selectedTreasure.name}
                  width={150}
                  height={150}
                  className="object-contain md:w-[300px] md:h-[300px]"
                />
              </div>
              <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-sm md:text-base"
                onClick={() => setShowDetails(true)}
              >
                View Details
              </button>
            </>
          ) : (
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg h-full overflow-y-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {selectedTreasure.name} Contents
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-4">
                {selectedTreasure.items.map((item) => (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer ${
                      selectedItem.id === item.id ? "ring-2 ring-amber-500" : ""
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={75}
                      height={75}
                      className="rounded w-full h-auto"
                    />
                    {/* <div className={`absolute top-0 right-0 w-3 h-3 rounded-full ${getRarityColor(item.rarity)}`} /> */}
                    {/* {item.owned && (
                      <div className="absolute bottom-0 right-0 bg-green-500 text-xs px-1 rounded">
                        Owned
                      </div>
                    )} */}
                  </div>
                ))}
              </div>
              {selectedItem && (
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {selectedItem.name}
                  </h3>
                    <p className="text-sm text-gray-300">Type: {selectedItem.type}</p>
                    <p className="text-sm text-gray-300">Exclusive: {selectedItem.exclusiveTo}</p>
                  <p
                    className={`text-sm ${getRarityTextColor(
                      selectedItem.rarity
                    )}`}
                  >
                    {selectedItem.rarity}
                  </p>
                  <Separator className="border-b border-gray-800" />
                  <div className="mt-1"></div>
                  <p className="text-sm text-gray-300">
                    {selectedItem.description}
                  </p>
                </div>
              )}
              <button
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base"
                onClick={() => setShowDetails(false)}
              >
                Back to Treasure
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex space-x-4 mt-4">
        <button className="flex-1 py-2 md:py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-base md:text-lg font-semibold">
          Open x10
        </button>
        <button className="flex-1 py-2 md:py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-base md:text-lg font-semibold">
          Open x1
        </button>
      </div>
    </div>
  );
}

function getRarityColor(rarity) {
  switch (rarity) {
    case "Extreme":
      return "bg-red-500";
    case "Legendary":
      return "bg-yellow-500";
    case "Epic":
      return "bg-purple-500";
    case "Rare":
      return "bg-blue-500";
    case "Uncommon":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
}

function getRarityTextColor(rarity) {
  switch (rarity) {
    case "Extreme":
      return "text-red-500";
    case "Legendary":
      return "text-yellow-500";
    case "Epic":
      return "text-purple-500";
    case "Rare":
      return "text-blue-500";
    case "Uncommon":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
}
