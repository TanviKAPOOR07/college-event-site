import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          CodeSphere 2025
        </h1>
        <p className="text-lg md:text-xl mt-2 font-medium text-gray-600">
          Unleash Innovation at the Ultimate College Hackathon
        </p>
      </header>

      <section className="mt-10 max-w-3xl mx-auto text-center">
        <p className="text-md md:text-lg">
          Join us for a 24-hour coding adventure where creativity meets technology!
          Compete with top minds, learn from experts, and build solutions that matter.
        </p>
        <div className="mt-6 space-y-2">
          <p><strong>Date:</strong> July 15, 2025</p>
          <p><strong>Time:</strong> 9:00 AM onwards</p>
          <p><strong>Venue:</strong> Main Auditorium, UPES</p>
        </div>
        <a
          href="/register"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Register Now
        </a>
      </section>
    </div>
  );
}
