"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { treasures } from "@/json/TreasureList";


export default function EchelonTreasure() {
  const [selectedTreasure, setSelectedTreasure] = useState(treasures[3]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selectedTreasure.items[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Info size={20} />
            <h1 className="text-3xl font-bold">{selectedTreasure.name}</h1>
          </div>
          <p className="text-red-500 text-sm">
            No longer available for purchase
          </p>
        </div>
        <div className="text-right">
          <p className="text-amber-400">Opened: 52 Treasure(s)</p>
          <p className="text-red-500 text-sm">
            Extreme is guaranteed in 48 Treasures (recurrent)
          </p>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Treasure List */}
        <div className="w-1/4 pr-4 space-y-2">
          <div className="flex space-x-2 mb-2">
            <button className="px-4 py-1 bg-amber-800 text-amber-200 rounded">
              Current
            </button>
            <button className="px-4 py-1 bg-gray-700 text-gray-300 rounded">
              Previous
            </button>
          </div>
          {treasures.map((treasure) => (
            <div
              key={treasure.id}
              className={`relative cursor-pointer ${
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
                width={400}
                height={80}
                className="rounded"
                quality="100"
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 px-1 rounded"></div>
              {selectedTreasure.id === treasure.id && (
                <div className="absolute top-1 right-1">
                  <Eye size={20} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 relative">
          {!showDetails ? (
            <>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt={selectedTreasure.name}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                quality="100"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={selectedTreasure.fullImage}
                  alt="Golden Chest"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                onClick={() => setShowDetails(true)}
              >
                View Details
              </button>
            </>
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg h-full">
              <h2 className="text-2xl font-bold mb-4">
                {selectedTreasure.name} Contents
              </h2>
              <div className="grid grid-cols-8 gap-2 mb-4">
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
                      width={150}
                      height={150}
                      className="rounded"
                      quality="100"
                    />
                    <div
                      className={`absolute top-0 right-0 w-3 h-3 rounded-full ${getRarityColor(
                        item.rarity
                      )}`}
                    />
                    {item.owned && (
                      <div className="absolute bottom-0 right-0 bg-green-500 text-xs px-1 rounded">
                        Owned
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {selectedItem && (
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">{selectedItem.name}</h3>
                  <p className="text-sm text-gray-300">{selectedItem.type}</p>
                  <p
                    className={`text-sm ${getRarityTextColor(
                      selectedItem.rarity
                    )}`}
                  >
                    {selectedItem.rarity}
                  </p>
                </div>
              )}
              <button
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
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
        <button className="flex-1 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-lg font-semibold">
          Open x10
        </button>
        <button className="flex-1 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-lg font-semibold">
          Open x1
        </button>
      </div>
    </div>
  );
}

function getRarityColor(rarity) {
  switch (rarity) {
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
