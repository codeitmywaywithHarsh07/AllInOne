"use client";

import React, { useState, useEffect } from "react";
import Features from "./Features";
import Caraousel from "./Caraousel";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["AllInOne!", "Your Search Companion!", "Explore More!"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = isDeleting ? 50 : 100;
  const router = useRouter();

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 text-white py-48">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                Welcome to <span className="inline-block">{text}</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                Your one-stop destination to search across platforms like Google, YouTube, Reddit, and more!
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform" onClick={()=>{ router.push('/search') }}>
                Get Started
            </button>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Carousel Section */}
      <Caraousel />

      {/* Testimonials Section */}
      <Testimonial />

      {/* FAQ Section */}
      <Faq />

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-24 border">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Ready to Dive In?</h2>
          <p className="text-lg md:text-xl mb-6 text-gray-600">
            Start your search across platforms with AllInOne and make your life easier.
          </p>
          <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
