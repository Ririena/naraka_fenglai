import React from "react";
import AllNavigation from "./navigation/AllNavigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const PatchImage = ({ src, date, objectPosition = "object-cover" }) => (
  <div className="relative w-full h-[160px] flex flex-col items-center">
    <div className="w-full h-full relative">
      <Image src={src} alt={date} layout="fill"className={`rounded object-cover ${objectPosition}`} />
      <div className="absolute inset-0 bg-black opacity-30 rounded" />
    </div>
    <p className="mt-2 text-sm text-white">{date}</p>
  </div>
);

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
            <div className="block md:hidden relative">
              <img
                src="/patch/Patch-1.jpg"
                className="object-cover object-top w-full h-[126px] rounded"
                alt="Patch 1"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded" />
              <p className="absolute bottom-2 left-2 text-sm text-white">26-Sept-2024</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* Patch Images with Fade Effect for Desktop */}
              <div className="hidden md:block">
                <PatchImage src="/patch/Patch-1.jpg" date="26-Sept-2024" objectPosition="object-top" />
              </div>
              <div className="hidden md:block">
                <PatchImage src="/patch/Patch-2.png" date="07-Aug-2024" objectPosition="object-center" />
              </div>
              <div className="hidden md:block">
                <PatchImage src="/patch/Patch-3.png" date="14-July-2024" objectPosition="object-center" />
              </div>
              <div className="hidden md:block">
                <PatchImage src="/patch/Patch-4.jpg" date="21-Jun-2024" objectPosition="object-top" />
              </div>
            </div>
          </div>
        </section>
      </AllNavigation>
    </>
  );
}
