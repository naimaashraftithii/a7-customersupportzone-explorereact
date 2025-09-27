import React from "react";
import vector1 from "../src/assets/vector1.png";
import vector2 from "../src/assets/vector1.png";

export default function Banner({ stats }) {
  return (
    <section className="bg-gray-50 py-8">
      {/* SAME CONTAINER as Navbar */}
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In-Progress */}
          <div className="relative h-40 sm:h-44 md:h-48 rounded-xl text-white shadow-lg overflow-hidden
                          bg-gradient-to-r from-[#8A42F6] to-[#4F67FF]">
            <img
              src={vector1}
              alt=""
              className="pointer-events-none select-none absolute -left-20 -top-16 h-[170%] w-auto
                         object-cover opacity-25 -rotate-12"
            />
            <img
              src={vector1}
              alt=""
              className="pointer-events-none select-none absolute -right-20 -top-16 h-[170%] w-auto
                         object-cover opacity-25 rotate-12"
            />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <h3 className="text-base sm:text-lg font-medium">In-Progress</h3>
              <p className="mt-1 text-4xl sm:text-5xl font-extrabold">
                {stats?.inProgress ?? 0}
              </p>
            </div>
          </div>

          {/* Resolved */}
          <div className="relative h-40 sm:h-44 md:h-48 rounded-xl text-white shadow-lg overflow-hidden
                          bg-gradient-to-r from-[#10D780] to-[#098B6F]">
            <img
              src={vector2}
              alt=""
              className="pointer-events-none select-none absolute -left-20 -top-16 h-[170%] w-auto
                         object-cover opacity-25 -rotate-12"
            />
            <img
              src={vector2}
              alt=""
              className="pointer-events-none select-none absolute -right-20 -top-16 h-[170%] w-auto
                         object-cover opacity-25 rotate-12"
            />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <h3 className="text-base sm:text-lg font-medium">Resolved</h3>
              <p className="mt-1 text-4xl sm:text-5xl font-extrabold">
                {stats?.resolved ?? 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}