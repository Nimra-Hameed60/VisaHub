import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    q: "How long does the visa application process take?",
    a: "The processing time depends on the visa type and the country you’re applying to. It can range from a few weeks to several months. We provide accurate timelines during the consultation phase."
  },
  {
    q: "What documents are required for a visa application?",
    a: "Required documents vary by visa type but generally include a valid passport, proof of financial stability, and other relevant records like employment or study documents. We will guide you through the specific requirements for your application."
  },
  {
    q: "Can I apply for a visa online?",
    a: "Yes, many countries offer online visa application portals. Our team can assist you in completing and submitting your application online for convenience and accuracy."
  },
  {
    q: "What happens if my visa application is rejected?",
    a: "If your application is rejected, we will review the reasons for denial and help you reapply by addressing any issues or missing documentation."
  },
  {
    q: "Do I need an immigration lawyer for my visa application?",
    a: "While it’s not always required, having expert assistance can increase your chances of approval. We offer professional immigration consultations to ensure your application is complete and compliant."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-16">
        Frequently <span className="italic">asked</span> questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-6">

        {faqData.map((item, index) => (
          <div key={index} className="border-b pb-4 border-gray-400">

            {/* Question */}
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer group"
            >

              <h3 className="text-lg md:text-2xl font-medium relative group-hover:text-blue-600">

                {item.q}

              </h3>

              {/* Icon */}
              <div className="text-xl group-hover:text-blue-600">
                {openIndex === index ? (
                  <Minus />
                ) : (
                  <Plus />
                )}
              </div>

            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 mt-3 opacity-100"
                  : "max-h-0 opacity-0 text-xl"
              }`}
            >
              <p className="text-gray-600 text-base">
                {item.a}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}