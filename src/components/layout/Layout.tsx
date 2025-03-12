import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Services } from "../../pages/Services";
import { SuccessStories } from "../../pages/SuccessStories";
import { HowItWorks } from "../../pages/HowItWorks";
import { FAQ } from "../../pages/FAQ";
import { Careers } from "../../pages/Careers";
import { Contact } from "../../pages/Contact";
import { Success } from "../../pages/Success";
import { OrganizationTraining } from "../../pages/OrganizationTraining";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/organization-training" element={<OrganizationTraining />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}