import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is AllInOne?",
      answer: "AllInOne is a platform that allows you to search across various platforms from one place.",
    },
    {
      question: "Is AllInOne free to use?",
      answer: "Yes, AllInOne is completely free to use for everyone.",
    },
    {
      question: "Can I customize my searches?",
      answer: "Absolutely! You can tailor your searches to include only the platforms you want.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleAnswer(index)}
            >
                <h3 className="font-semibold text-gray-700 flex justify-between items-center">
                    {faq.question}
                    <span className={`text-gray-500 transition-transform ${activeIndex === index ? "rotate-180" : ""}`}>
                        ▼
                    </span>
                </h3>
                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "max-h-32" : "max-h-0"
                    }`}
                >
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
