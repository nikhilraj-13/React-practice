import React from "react";

export default function AboutHero() {
  return (
    <section className="bg-[#f5f1e6] py-20 px-6 text-center my-35">
      
      {/* Badge */}
      <div className="inline-block bg-orange-400 text-yellow-200 text-xl font-semibold px-4 py-1 rounded-full mb-6">
        WHO WE ARE
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Built for the{" "}
        <span className="text-yellow-500">Next Generation</span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
        Gen-Z is a creative-tech agency helping brands grow with bold strategy,
        cutting-edge design, and powerful technology. We don’t just build
        products — we build experiences.
      </p>

    </section>
  );
}