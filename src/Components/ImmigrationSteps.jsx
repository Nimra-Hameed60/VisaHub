import React from "react";

export default function ImmigrationSteps() {
  return (
    <div className="bg-gray-50 py-24 px-4 md:px-12 overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-800">
        Immigration <span className="italic font-light">journey</span> in 3 simple steps
      </h2>

      <div className="relative mt-28">

        {/* PERFECT CURVED LINE */}
        <svg
          className="absolute top-4 left-0 w-full hidden md:block"
          viewBox="0 0 1200 200"
          fill="none"
        >
          <path
            d="M0,80 
               C150,20 350,140 600,80 
               C850,20 1050,120 1200,80"
            stroke="#bfdbfe"
            strokeWidth="2"
            strokeDasharray="6 10"
            strokeLinecap="round"
          />
        </svg>

        {/* PERFECT PLANE POSITION */}
        <div className="hidden md:block absolute right-0 top-18.75 text-4xl rotate-18">
          ✈️
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-20 relative z-10">

          {/* Step 1 */}
          <div className="text-center max-w-xs">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold shadow-md">
              01
            </div>
            <h3 className="mt-5 text-lg font-semibold text-gray-800">Consultation</h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Start with a personalized consultation where we assess your visa or
              immigration needs and the best approach for your case.
            </p>
          </div>

          {/* Step 2 (Perfect Down Position) */}
          <div className="text-center max-w-xs md:mt-24">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 text-white text-lg font-bold shadow-md">
              02
            </div>
            <h3 className="mt-5 text-lg font-semibold text-gray-800">Document preparation</h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Our experts will guide you through gathering and organizing all required
              documents to ensure your application is accurate and complete.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center max-w-xs">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold shadow-md">
              03
            </div>
            <h3 className="mt-5 text-lg font-semibold text-gray-800">Application submission</h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              We submit your application to the appropriate authorities and monitor its
              progress.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}