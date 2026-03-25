import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          About Us
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Welcome to our website! We create meaningful digital experiences that
          are easy to use, visually engaging, and genuinely helpful.
        </p>

        {/* Who We Are */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Who We Are
          </h2>
          <p className="text-gray-600">
            We are a passionate team of developers, designers, and creators who
            believe in the power of technology to simplify lives.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            What We Do
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Clean and user-friendly interfaces</li>
            <li>Reliable and efficient performance</li>
            <li>Solutions that solve real-world problems</li>
          </ul>
        </div>

        {/* Mission */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To deliver high-quality digital solutions that empower users and
            make everyday tasks easier.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To build a future where technology feels effortless and intuitive.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;