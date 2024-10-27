import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What types of businesses does Data Sparta work with?",
        answer: "We specialize in working with small and medium-sized businesses (SMBs) with annual revenues between AUD 2 million and AUD 10 million across various industries, including retail, manufacturing, e-commerce, and more. Our solutions are tailored to address the unique challenges and opportunities faced by SMBs."
      },
      {
        question: "What makes Data Sparta different from other data solution providers?",
        answer: "Data Sparta specializes in providing tailored solutions specifically for SMBs. Unlike one-size-fits-all approaches, we customize our services to meet your unique needs, offer affordable managed services, provide end-to-end support and training, and focus on delivering rapid implementation and ROI. Our flexible engagement models and commitment to client success set us apart."
      },
      {
        question: "Do you offer international services?",
        answer: "Yes, while we are based in Australia, we serve clients globally. Our virtual consultation and delivery capabilities allow us to support businesses around the world effectively."
      }
    ]
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "How much does the Fully Managed Data Platform cost?",
        answer: "Pricing for our Fully Managed Data Platform is customized based on your specific needs, such as the number of data sources, complexity of data integration, and required features. We offer competitive pricing designed to be affordable for SMBs. Please contact us for a personalized quote."
      },
      {
        question: "Can I choose my preferred analytics tools?",
        answer: "Absolutely! We believe in flexibility and empower our clients to select the analytics tools that best fit their needs. We support a range of platforms including Power BI, Tableau, Looker, and can integrate others based on your preference. Our team can also provide recommendations if you need guidance."
      },
      {
        question: "Is there a long-term contract required for your services?",
        answer: "We offer flexible engagement models to suit your business needs. While some services may benefit from longer-term commitments to maximize value, we do not require long-term contracts. We believe in earning your business through consistent results and excellent service."
      }
    ]
  },
  {
    category: "Implementation & Support",
    questions: [
      {
        question: "What kind of support do you offer after implementing a solution?",
        answer: "We provide comprehensive ongoing support, including regular updates, troubleshooting, and scalability options as your business grows. Our team is available to assist with any questions or issues that may arise, ensuring you continue to get the most value from our solutions."
      },
      {
        question: "How quickly can we expect to see results from your services?",
        answer: "Our rapid implementation approach is designed to deliver value quickly. For the Fully Managed Data Platform, you can start seeing benefits within weeks, depending on the complexity of your project. Analytics as a Service projects have varying timelines based on scope but are executed efficiently to provide timely insights."
      },
      {
        question: "Can you integrate data from legacy systems?",
        answer: "Yes, we have experience integrating data from a wide range of systems, including legacy platforms. Our team will assess your existing systems and develop a strategy to incorporate your legacy data into the new unified platform."
      }
    ]
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "How does Data Sparta ensure data security and compliance?",
        answer: "Data security is a top priority for us. We implement robust security measures to protect your data, including encryption, secure data storage, and access controls. We also ensure compliance with relevant regulations such as GDPR and work closely with you to meet any industry-specific compliance requirements."
      },
      {
        question: "How does Data Sparta handle data privacy?",
        answer: "We take data privacy very seriously. We adhere to strict confidentiality agreements and implement best practices to ensure your data is protected. Access to your data is limited to authorized personnel, and we comply with all relevant data protection laws and regulations."
      }
    ]
  },
  {
    category: "Training & Development",
    questions: [
      {
        question: "Can the training programs be customized for our industry?",
        answer: "Yes, our Organization Training programs are tailored to your specific industry, business challenges, and technology stack. We develop custom curricula that address the skills your team needs to effectively leverage data in your operations."
      },
      {
        question: "What is the duration of your training programs?",
        answer: "The duration of our training programs varies based on the content and delivery method. For Organization Training, we work with you to schedule sessions that fit your team's availability, ranging from half-day workshops to multi-week courses. Individual Training courses at Data Profession Academy can be self-paced or structured over several weeks, depending on the program."
      },
      {
        question: "How do you stay current with the latest data technologies and trends?",
        answer: "Our team is committed to continuous learning and professional development. We stay up-to-date with the latest technologies, tools, and best practices through ongoing training, certifications, and participation in industry events. This ensures we provide cutting-edge solutions to our clients."
      }
    ]
  }
];

export function FAQ() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Find answers to common questions about our services and how we can help your business.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-500">
            We understand that choosing the right data solutions partner is a significant decision. To help you make an informed choice, we've compiled answers to some of the most frequently asked questions about our services, processes, and how we work with clients.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, index) => (
            <div key={category.category} className={index > 0 ? "mt-12" : ""}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <Accordion variant="bordered">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    aria-label={faq.question}
                    title={
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    }
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Didn't Find the Answer You Were Looking For?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our team is here to help. Reach out to us with your questions or to schedule a free consultation.
          </p>
          <div className="mt-8">
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-primary text-white"
                endContent={<ArrowRight className="h-5 w-5" />}
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}