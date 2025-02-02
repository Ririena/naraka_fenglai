'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { characterlist } from '../../json/CharacterList';

export default function CharacterSelect() {
  const [selectedCharacter, setSelectedCharacter] = useState(characterlist[12]); // Default to Justina Gu (with skills)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Character Grid */}
        <div className="lg:w-1/4">
          <div className="grid grid-cols-5 gap-2">
            {characterlist.map((character) => (
              <button
                key={character.id}
                onClick={() => setSelectedCharacter(character)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden ${
                  selectedCharacter.id === character.id ? 'ring-2 ring-red-500' : ''
                }`}
              >
                <Image
                  src={character.icon} // Use the icon for grid
                  alt={character.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 flex items-center justify-center">
                  <Star size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Character Display */}
        <div className="lg:w-1/2 flex justify-center items-center my-8 lg:my-0">
          <Image
            src={selectedCharacter.image} // Use full-size image for display
            alt={selectedCharacter.name}
            width={400}
            height={600}
            objectFit="contain"
          />
        </div>

        {/* Character Info */}
        <div className="lg:w-1/4 space-y-4">
          <h2 className="text-4xl font-bold">{selectedCharacter.name}</h2>
          <div className="flex space-x-2">
            <span className="bg-gray-700 px-2 py-1 rounded">Baizepedia</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Cultivation</span>
          </div>
          <p className="text-sm">{selectedCharacter.description}</p>

          {/* Skills */}
          <div className="flex space-x-4">
            {selectedCharacter.skills ? ( // Check if skills exist
              selectedCharacter.skills.map((skill) => (
                <div key={skill.id} className="relative w-12 h-12 bg-gray-700 rounded-lg overflow-hidden">
                  <Image src={skill.icon} alt={skill.name} layout="fill" objectFit="cover" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-900 flex items-center justify-center rounded-tl-lg">
                    {skill.id === 2 && <span className="text-xs font-bold">F</span>}
                    {skill.id === 3 && <span className="text-xs font-bold">V</span>}
                  </div>
                </div>
              ))
            ) : (
              <p>No skills available.</p> // Handle the case where skills are not available
            )}
          </div>

          {/* Difficulty */}
          <div>
            <h3 className="text-lg font-semibold">Difficulty</h3>
            <div className="flex space-x-1">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} size={20} fill="currentColor" className="text-yellow-500" />
              ))}
              <Star size={20} className="text-gray-600" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}