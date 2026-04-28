import React, { useEffect, useRef } from "react";

const countries = [
  { name: "Spain", flag: "https://flagcdn.com/w80/es.png" },
  { name: "Germany", flag: "https://flagcdn.com/w80/de.png" },
  { name: "Thailand", flag: "https://flagcdn.com/w80/th.png" },
  { name: "Australia", flag: "https://flagcdn.com/w80/au.png" },
  { name: "Switzerland", flag: "https://flagcdn.com/w80/ch.png" },
  { name: "United States", flag: "https://flagcdn.com/w80/us.png" },
  { name: "South Africa", flag: "https://flagcdn.com/w80/za.png" },
  { name: "Canada", flag: "https://flagcdn.com/w80/ca.png" },
];

export default function GlobalReach() {
  const col1 = useRef(null);
  const col2 = useRef(null);
  const col3 = useRef(null);

  useEffect(() => {
    let s1 = 0,
      s2 = 0,
      s3 = 0;

    let animationFrame;

    const animate = () => {
      // LEFT ↓
      if (col1.current) {
        s1 += 0.6;
        col1.current.scrollTop = s1;
        if (s1 >= col1.current.scrollHeight / 2) s1 = 0;
      }

      // CENTER ↑
      if (col2.current) {
        s2 -= 0.8;
        col2.current.scrollTop = col2.current.scrollHeight / 2 + s2;
        if (Math.abs(s2) >= col2.current.scrollHeight / 2) s2 = 0;
      }

      // RIGHT ↓
      if (col3.current) {
        s3 += 0.5;
        col3.current.scrollTop = s3;
        if (s3 >= col3.current.scrollHeight / 2) s3 = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const Column = ({ innerRef, data }) => (
    <div
      ref={innerRef}
      className="h-100 overflow-hidden flex flex-col gap-5"
    >
      {[...data, ...data].map((country, index) => (
        <div
          key={index}
          className="bg-[#13263a] rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition"
        >
          <img
            src={country.flag}
            alt={country.name}
            className="w-10 h-10 rounded-full object-cover mb-2"
          />
          <p className="text-sm font-medium">{country.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="bg-[#0b1b2b] text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-10 overflow-hidden relative mx-4 md:mx-10"
    >
      {/* Gradient Mask */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-linear-to-b from-[#0b1b2b] to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-[#0b1b2b] to-transparent z-10" />

      {/* Left Content */}
      <div className="flex-1 relative z-20">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Global reach - <span className="italic font-light">countries</span>
          <br /> we serve
        </h2>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition">
          Explore all
        </button>

        <div className="mt-10">
          <h3 className="text-5xl font-bold">
            15<span className="text-blue-500">+</span>
          </h3>
          <p className="text-gray-300 mt-2 max-w-sm">
            Visa services for major global destinations.
          </p>
        </div>
      </div>

      {/* Right Columns */}
      <div className="flex-1 grid grid-cols-3 gap-5 relative z-20">
        <Column innerRef={col1} data={countries} />
        <Column innerRef={col2} data={[...countries].reverse()} />
        <Column innerRef={col3} data={countries.slice(2)} />
      </div>
    </div>
  );
}