import React from "react";

export default function Home() {
  return (
    <div className=" bg-gradient-to-l from-[#cfc85a]  bg-cover bg-center w-full h-screen">
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center h-full px-4">
        <div className="text-right max-w-2xl">
          <h1 className="text-gray-700 text-4xl md:text-6xl font-bold leading-tight mb-6">
            مرحبًا بكم في موقعنا الإلكتروني
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            اكتشف منتجاتنا المميزة واستمتع بتجربة تسوق لا مثيل لها.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-400 hover:bg-[#cfc85a] text-gray-700 py-3 px-6 rounded-lg text-lg font-semibold">
              ابدأ الآن
            </button>
            <button className="bg-amber-300 hover:bg-[#cfc85a] text-gray-700 py-3 px-6 rounded-lg text-lg font-semibold">
              المزيد من المعلومات
            </button>
          </div>
        </div>
      </div>
  
    </div>
  );
}
