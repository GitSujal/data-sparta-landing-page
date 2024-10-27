import React from 'react';
import { Star, Heart, Lightbulb, Shield, Users } from 'lucide-react';

const values = [
  {
    name: 'Client-Centric Approach',
    description: 'Your success is our success. We prioritize building strong relationships and delivering solutions that truly meet your needs.',
    icon: Heart,
  },
  {
    name: 'Innovation',
    description: 'We continuously adopt the latest technologies and methodologies to provide cutting-edge solutions.',
    icon: Lightbulb,
  },
  {
    name: 'Integrity',
    description: 'Honesty and transparency guide everything we do, from our pricing to our project management.',
    icon: Shield,
  },
  {
    name: 'Collaboration',
    description: 'We work closely with our clients, valuing their input and fostering a collaborative environment.',
    icon: Users,
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in every project, ensuring high-quality outcomes that exceed expectations.',
    icon: Star,
  },
];

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Empowering SMBs Through Data-Driven Solutions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Discover how Data Sparta helps businesses like yours unlock the power of data.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                <p className="mt-4 text-lg text-gray-500">
                  At Data Sparta, our mission is to empower small and medium-sized businesses with tailored data solutions that drive insights, streamline operations, and enhance decision-making.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                <p className="mt-4 text-lg text-gray-500">
                  We envision a world where businesses of all sizes have equal access to the power of data, enabling them to compete and thrive in an increasingly data-driven economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Journey Begins</h2>
              <div className="mt-6 text-lg text-gray-500 space-y-6">
                <p>
                  Founded in August 2023 by <strong>Sujal Dhungana</strong>, Data Sparta was born out of a passion for helping businesses unlock their true potential through data. With years of experience in data engineering and a deep understanding of the challenges faced by SMBs, Sujal recognized a gap in the market: small and medium-sized businesses lacked access to affordable, customized data solutions that could help them compete with larger enterprises.
                </p>
                <p>
                  Determined to bridge this gap, Sujal set out to create a company that offers tailored data platforms, analytics services, and training programs specifically designed for the unique needs of SMBs. Data Sparta combines cutting-edge technology with personalized service to empower businesses to make data-driven decisions with confidence.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
                  alt="Sujal Dhungana, Founder of Data Sparta"
                />
                <blockquote className="mt-6">
                  <p className="text-lg font-medium text-gray-900">
                    "I believe that every business, regardless of size, should have the opportunity to harness the power of data. Data Sparta is dedicated to making this a reality."
                  </p>
                  <footer className="mt-3">
                    <p className="text-base font-semibold text-gray-900">Sujal Dhungana</p>
                    <p className="text-base text-gray-500">Founder & Lead Data Engineer</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet the Data Sparta Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              Our dedicated team of experts is committed to your success
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
                  alt="Sujal Dhungana"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Sujal Dhungana</h3>
                  <p className="text-sm text-primary font-medium">Founder & Lead Data Engineer</p>
                  <p className="mt-4 text-base text-gray-500">
                    With a Master's degree in Predictive Analytics and a background in Electronics and Communications Engineering, Sujal brings a wealth of knowledge and experience to Data Sparta.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-primary hover:text-primary/90 font-medium"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                  {value.name}
                </h3>
                <p className="mt-2 text-gray-500 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Empower Your Business with Data?</h2>
          <p className="mt-4 text-xl text-white">
            Discover how our tailored solutions can drive your business forward.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}