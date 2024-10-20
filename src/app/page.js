"use client";
import React from "react";
import AllNavigation from "./navigation/AllNavigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const PatchImage = ({ src, date, objectPosition = "object-cover" }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
    className="relative w-full h-[160px] flex flex-col items-center cursor-pointer"
  >
    <div className="w-full h-full relative">
      <Image
        src={src}
        alt={date}
        layout="fill"
        className={`rounded object-cover ${objectPosition}`}
      />
      <div className="absolute inset-0 bg-black opacity-30 rounded" />
    </div>
    <p className="mt-2 text-sm text-white">{date}</p>
  </motion.div>
);

const ShortcutCard = ({ src, alt, text }) => {
  return (
    <div className="bg-gray-900  rounded-md flex items-center">
      <div className="w-24 h-24 relative">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </div>
      <div className="flex-1 flex justify-start ml-8">
        <p className="text-white text-center">{text}</p>
      </div>
    </div>
  );
};

const CommunityCard = ({ title, description, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`relative p-4 rounded-md overflow-hidden cursor-pointer`}
      style={{
        background: `linear-gradient(135deg, ${color}, rgba(255, 255, 255, 0))`,
      }}
    >
      {/* Blur Effect */}
      <div
        className={`absolute inset-0 rounded-md blur-lg`}
        style={{
          background: `linear-gradient(135deg, ${color}, transparent)`,
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <p className="text-white mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Page() {
  return (
    <>
      <AllNavigation>
        <div className="relative w-full h-[350px] md:h-[500px]">
          <Image
            src="/fairyland.png"
            alt="Fairyland"
            fill
            className="object-cover opacity-40"
            style={{ objectFit: "cover" }}
          />

          {/* Introduction Section */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Naraka Fenglai</h1>
            <p className="text-sm md:text-lg px-4 md:px-0 max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
              Naraka.Fenglai is a Naraka: Bladepoint wiki and news-site that
              contains guides and information about characters, weapons,
              souljades, achievements, and more.
            </p>
          </div>
        </div>

        {/* Patch Notes Section */}
        <section>
          <div className="flex justify-between mt-8">
            <h4>Patch Notes</h4>
            <h4>View More</h4>
          </div>
          <Separator className="border border-gray-700" />

          <div className="mt-4">
            {/* Mobile Full Width Image with Fade Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="block md:hidden relative cursor-pointer"
            >
              <img
                src="/patch/Patch-1.jpg"
                className="object-cover object-top w-full h-[126px] rounded"
                alt="Patch 1"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded" />
              <p className="absolute bottom-2 left-2 text-sm text-white">
                26-Sept-2024
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="hidden md:block">
                <PatchImage
                  src="/patch/Patch-1.jpg"
                  date="26-Sept-2024"
                  objectPosition="object-top"
                />
              </div>
              <div className="hidden md:block">
                <PatchImage
                  src="/patch/Patch-2.png"
                  date="07-Aug-2024"
                  objectPosition="object-center"
                />
              </div>
              <div className="hidden md:block">
                <PatchImage
                  src="/patch/Patch-3.png"
                  date="14-July-2024"
                  objectPosition="object-center"
                />
              </div>
              <div className="hidden md:block">
                <PatchImage
                  src="/patch/Patch-4.jpg"
                  date="21-Jun-2024"
                  objectPosition="object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Shortcut */}
        <section className="pt-12">
          <p className="">Shortcut</p>
          <Separator className="mb-4 border border-gray-700" />

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-3 gap-4">
            <ShortcutCard
              src="/logo-naraka.png"
              alt="Naraka Logo"
              text="Introduction To The Game"
            />
            <ShortcutCard
              src="/logo-naraka.png"
              alt="Naraka Logo"
              text="Introduction To The Game"
            />
            <ShortcutCard
              src="/logo-naraka.png"
              alt="Naraka Logo"
              text="Introduction To The Game"
            />
            <ShortcutCard
              src="/logo-naraka.png"
              alt="Naraka Logo"
              text="Introduction To The Game"
            />
            <ShortcutCard
              src="/logo-naraka.png"
              alt="Naraka Logo"
              text="Introduction To The Game"
            />
            <ShortcutCard
              src="/logo-naraka.png"
              alt="Naraka Logo"
              text="Introduction To The Game"
            />
          </div>
        </section>

        <section className="pt-12">
          <p>Community</p>
          <Separator className="mb-4 border border-gray-700" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CommunityCard
              title="Join the Forum"
              description="Engage with other players."
              color="rgba(0, 0, 255, 0.5)" // blue
            />
            <CommunityCard
              title="Participate in Tournaments"
              description="Compete and showcase your skills."
              color="rgba(255, 0, 0, 0.5)" // red
            />
            <CommunityCard
              title="Follow Us on Social Media"
              description="Stay updated with the latest news."
              color="rgba(0, 255, 255, 0.5)" // cyan
            />
          </div>
        </section>
      </AllNavigation>
    </>
  );
}
