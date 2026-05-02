import React from "react";
import Image from "next/image";

export const Support = () => {
  return (
    <div className="bg-slate-950 text-slate-100 py-5 px-4 md:px-16 border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8">
        
        {/* TEXT */}
        <div className="flex-1">
          
          <p className="mt-5 text-3xl font-bold leading-tight sm:text-5xl font-poppins">
            
            <span className="relative inline-flex">
              
              {/* Glow effect (adjusted to indigo theme) */}
              <span className="bg-gradient-to-r from-cyan-400 via-magenta-500 to-violet-600 blur-lg opacity-30 w-full h-full absolute inset-0"></span>
              
              <span className="relative text-slate-100">
                Let us know for support
              </span>

            </span>
          </p>

          <p className="text-slate-400 leading-relaxed mb-8 mt-8">
            At PrepForge, our mission is to help learners turn knowledge into real skills. We empower beginners and professionals to build practical expertise, grow their careers, and unlock better opportunities through hands-on learning.
          </p>

          <div className="flex flex-wrap gap-4">
            
            {/* Primary Button */}
            <a
              href="#"
              className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-600 transition"
            >
              Contact Us
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="border border-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              Call for Support
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
            <Image
              src="/assets/images/help.png"
              alt="Support"
              width={500}
              height={400}
              className="rounded-md object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};