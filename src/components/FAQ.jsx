import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does the company specialize in?",
      answer:
        "We specialize in manufacturing high-quality equipment, including laboratory furniture, gas purification panels, fume hoods, and more, catering to industrial and scientific needs.",
    },
    {
      question: "Where is the company located?",
      answer: "Our company is based in India and serves clients globally.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve industries such as laboratories, manufacturing plants, research facilities, and other industrial sectors requiring precision instruments.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by contacting our sales team through email or phone, or by submitting an inquiry form on our website.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we provide customized solutions tailored to your specific requirements. Contact us for a consultation.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <svg
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
