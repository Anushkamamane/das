
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          About Seva Sahayog
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Seva Sahayog is a forward-thinking initiative that sparks meaningful
          change through innovation, education, and collaboration. We believe
          that small actions can create big transformations, and our mission is
          to empower individuals and communities to unlock their full potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mission</h2>
            <p>
              To ignite potential and create lasting impact by fostering learning,
              innovation, and collaboration.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Vision</h2>
            <p>
              A world where every individual has the confidence, tools, and
              opportunities to make a difference.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          What We Focus On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">🚀 Innovation</h3>
            <p>Building tools and products that solve real-world challenges.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">🌍 Community</h3>
            <p>Driving initiatives that strengthen communities.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
            <p>Providing education and training for future-ready skills.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">🤝 Collaboration</h3>
            <p>Partnering with changemakers and organizations to scale impact.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
