import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What is your service about?",
            a: "We provide fast and reliable digital solutions tailored to your business needs."
        },
        {
            q: "How long does it take to complete a project?",
            a: "Most projects are completed within 3–7 days depending on complexity."
        },
        {
            q: "Do you offer support after delivery?",
            a: "Yes, we provide full post-delivery support to ensure everything works perfectly."
        },
        {
            q: "Can I request changes later?",
            a: "Yes, revisions are included based on your selected package."
        }
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">

            {/* Heading */}
            <div className="text-center mb-10">

                <h2 className="font-semibold text-3xl md:text-5xl text-(--primary-color)">
                    Frequently Asked Questions
                </h2>

            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {faqs.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 bg-white shadow-sm hover:shadow-md ${isOpen ? "border-(--secondary-color)" : "border-gray-200"
                                }`}
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold text-gray-800">
                                        {item.q}
                                    </span>
                                </div>

                                <ChevronDown
                                    className={`transition-transform duration-300 text-gray-500 ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-5 overflow-hidden transition-all duration-300 text-gray-600 ${isOpen
                                    ? "max-h-40 opacity-100 pb-5"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                {item.a}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}