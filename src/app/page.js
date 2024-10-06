"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GameNavbar from "./navigation/layout/HomeNavbar";
import { useRouter } from "next/navigation";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(null); // Start with null to avoid hydration mismatch

  useEffect(() => {
    // Calculate and set the timeLeft on client side
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  // Wait for timeLeft to be set before rendering
  if (!timeLeft) return null;

  return (
    <div className="flex justify-center space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-sm uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default function NarakaLanding() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/character");
  };

  return (
    <>
      <GameNavbar />

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Section 1: Fairyland Penglai */}
        <section className="relative h-screen">
          <Image
            src="/fairyland.png"
            alt="Fairyland Penglai"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Naraka: Fenglai
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl"
            >
              Embark on an epic journey through the mystical realm of Fenglai.
              Battle legendary creatures, master ancient martial arts, and
              uncover the secrets of this enchanted world.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=""
            >
              <button
                onClick={handleStart}
                className="px-8 py-3 bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Start Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Countdown and Features */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Next Update or Event Arrives In
            </h2>
            <CountdownTimer targetDate="2024-10-10T00:03:00" />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Cards */}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-8">
          <p>&copy; 2024 Naraka: Fenglai. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
