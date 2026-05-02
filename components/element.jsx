import React from "react";
import Image from "next/image";

export const Element = () => {
  return (
    <div className="bg-slate-950 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* TEXT */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-wide">
            Smooth your learning journey
          </h3>

          <h2 className="text-slate-100 font-bold text-3xl md:text-5xl leading-tight">
            Learn By Doing
          </h2>

          <p className="text-slate-400 max-w-md mx-auto md:mx-0">
            Learn real skills through practice. Start small, improve daily, and
            grow into mastery with consistent effort.
          </p>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
            <Image
              src="/assets/images/transform.png"
              alt="Learning transformation"
              width={400}
              height={400}
              className="rounded-md object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-950 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
            <Image
              src="/assets/images/crafty.png"
              alt="Put Your Learning"
              width={500}
              height={400}
              className="rounded-md object-contain"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-indigo-400 font-semibold text-lg mb-2">
            Step-by-step lessons
          </h3>

          <h2 className="text-slate-100 font-bold text-5xl mb-4">
            Put Your Learning <br /> Into Practice
          </h2>

          <p className="text-slate-400">
            Apply your learning with real-world projects and learn everything
            you need to take your career to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};
