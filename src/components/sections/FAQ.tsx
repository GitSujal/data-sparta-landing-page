import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does the fully managed data platform cost?',
    answer: 'Pricing is customized based on your specific needs, including the number of data sources and required features. Contact us for a detailed quote.',
  },
  {
    question: 'What analytics platforms do you support?',
    answer: 'We support a range of platforms including Power BI, Tableau, Looker, and can integrate others based on your preference.',
  },
  {
    question: 'Do you offer support for data security and compliance?',
    answer: 'Yes, we prioritize data security and ensure compliance with relevant regulations like GDPR.',
  },
  {
    question: 'Can training be customized for our industry?',
    answer: 'Absolutely, we tailor our training programs to align with your industry and specific business challenges.',
  },
  {
    question: 'How quickly can we see results?',
    answer: 'Our rapid implementation approach means you can start seeing value within weeks, depending on the complexity of your project.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-b border-gray-200 pb-6"
              >
                <dt>
                  <button
                    className="flex w-full items-start justify-between text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <Minus className="h-6 w-6 text-primary" />
                      ) : (
                        <Plus className="h-6 w-6 text-primary" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-500">
            Still have questions?{' '}
            <a href="#contact" className="font-medium text-primary hover:text-primary/90">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}