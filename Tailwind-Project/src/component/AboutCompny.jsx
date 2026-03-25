import React from 'react'

export default function AboutCompny() {
  return (
    <div className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="team"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Team
        </h1>
        <p className="text-gray-600 mb-4">
          We are a passionate team of developers, designers, and innovators
          focused on building modern applications.
        </p>
        <p className="text-gray-600">
          Our goal is to create scalable, efficient, and beautiful digital
          products.
        </p>
      </div>

    </div>
  )
}
