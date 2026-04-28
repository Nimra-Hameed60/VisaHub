import { ArrowUpRight } from "lucide-react";
import VisaImg from "../Images/visa.png";

const visaTypes = [
  "Business visa",
  "Student visa",
  "Tourist visa",
  "Family reunion visa",
  "Work visa",
  "Visitor visa"
];

export default function TypesSection() {
  return (
    <div className="grid md:grid-cols-2">

      {/* Left Image */}
      <div className="h-112.5 md:h-125">
        <img
          src={VisaImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="bg-[#d6dee8] flex flex-col justify-center px-10 md:px-16 py-16">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-[#0f172a] leading-tight">
          Types of <span className="italic font-light">visas</span> we specialize
        </h2>

        {/* List */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-16">
          {visaTypes.map((item, index) => (
            
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Text + Arrow inline */}
              <div className="flex items-center gap-2 text-xl text-[#475569]">
                
                <span className="relative">
                  {item}

                  {/* Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0f172a] transition-all duration-300 group-hover:w-full"></span>
                </span>

                {/* Arrow (text ke sath) */}
                <ArrowUpRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500"
                />

              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}