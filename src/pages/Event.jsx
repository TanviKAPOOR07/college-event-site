import React from "react";

export default function Event() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Event Details
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About the Hackathon</h2>
        <p>
          CodeSphere 2025 is a 24-hour coding marathon where students from different colleges
          will compete to solve real-world problems using technology. The event promotes
          creativity, innovation, and collaboration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Schedule</h2>
        <ul className="list-disc pl-5">
          <li><strong>9:00 AM:</strong> Inauguration & Briefing</li>
          <li><strong>10:00 AM:</strong> Hacking Begins</li>
          <li><strong>1:00 PM:</strong> Lunch Break</li>
          <li><strong>5:00 PM:</strong> Mentoring Session</li>
          <li><strong>8:00 PM:</strong> Dinner</li>
          <li><strong>9:00 AM Next Day:</strong> Project Submission & Judging</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Rules & Guidelines</h2>
        <ul className="list-disc pl-5">
          <li>Teams can have a maximum of 4 members.</li>
          <li>All code must be written during the hackathon.</li>
          <li>Internet is allowed, but AI-generated code must be acknowledged.</li>
          <li>Respectful conduct is expected from all participants.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Prizes & Benefits</h2>
        <ul className="list-disc pl-5">
          <li>🥇 1st Prize: ₹30,000 + Internship Opportunities</li>
          <li>🥈 2nd Prize: ₹20,000 + Goodies</li>
          <li>🥉 3rd Prize: ₹10,000 + Certificates</li>
          <li>Participation Certificates for all</li>
        </ul>
      </section>
    </div>
  );
}

