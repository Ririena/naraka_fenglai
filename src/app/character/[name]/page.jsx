'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // Import useParams and useRouter from next/navigation
import Image from 'next/image';
import { Star } from 'lucide-react';
import { characterlist } from '@/json/CharacterList';

export default function CharacterSelect() {
  const { name } = useParams(); // Get the character name from the URL
  const router = useRouter(); // Use router to navigate
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Initialize as null

  useEffect(() => {
    if (name) {
      // Replace underscores with spaces for matching
      const characterName = name.replace(/_/g, ' ');
      const character = characterlist.find((char) => char.name.toLowerCase() === characterName.toLowerCase());
      setSelectedCharacter(character);
    }
  }, [name]); // Run effect when name changes

  // Handle case where character is not found
  if (!selectedCharacter) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-2xl">Character not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Character Grid */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          {/* Responsive grid with responsive gaps */}
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
            {characterlist.map((character) => (
              <button
                key={character.id}
                onClick={() => {
                  setSelectedCharacter(character);
                  router.push(`/character/${character.name.replace(/ /g, '_')}`);
                }}
                className={`relative w-16 h-16 rounded-lg overflow-hidden ${
                  selectedCharacter?.id === character.id ? 'ring-2 ring-red-500' : ''
                }`}
              >
                <Image
                  src={character.icon} // Use the icon for grid
                  alt={character.name}
                  layout="fill"
                  objectFit="cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Character Display */}
        <div className="lg:w-1/2 flex justify-center items-center my-8 lg:my-0">
          <Image
            src={selectedCharacter.image} // Use full-size image for display
            alt={selectedCharacter.name}
            width={selectedCharacter.width}
            height={selectedCharacter.height}
            objectFit="contain"
          />
        </div>

        {/* Character Info */}
        <div className="lg:w-1/4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{selectedCharacter.name}</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 px-2 py-1 rounded">Baizepedia</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Cultivation</span>
          </div>
          <p className="text-sm">{selectedCharacter.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4">
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
