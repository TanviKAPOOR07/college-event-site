import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Event Coordinator</h2>
          <p><strong>Name:</strong> Tanvi Kapoor</p>
          <p><strong>Phone:</strong> +91-9999900000</p>
          <p><strong>Email:</strong> codesphere@upes.ac.in</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Venue</h2>
          <p>Main Auditorium, UPES Campus, Dehradun, Uttarakhand</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <ul className="list-disc pl-5">
            <li>
              <a
                href="https://instagram.com/upes.official"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/school/upesindia/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
