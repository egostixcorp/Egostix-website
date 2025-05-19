"use client";

import React from "react";

const ContactPage = () => {
  return (
    <main className="mt-28 flex w-full flex-col items-center px-4 py-16 tablet:px-8 desktop:px-16">
      {/* Hero Section */}
      <section className="mb-12 max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold text-EgostixBlue tablet:text-5xl">
          Let&apos;s Connect & Build Something Impactful
        </h1>
        <p className="mt-4 px-10 text-base text-gray-700 tablet:text-lg">
          Whether you&apos;re a collaborator, investor, healthcare provider, or
          curious mind <br />
          we&apos;d love to hear from you.
        </p>
      </section>
      <div className="flex w-full items-start justify-center gap-10">
        {/* Contact Form */}
        <section className="mb-20 w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Handle submit via API / email service
              alert("Message sent!");
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-EgostixBlue focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-EgostixBlue focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-EgostixBlue focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded-md bg-EgostixBlue px-6 py-2 font-semibold text-white transition hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Company Info */}
        <section className="flex flex-col mt-20 items-start justify-center text-center text-sm text-gray-600">
          <p className="mb-1">Egostix Engineering Private Limited</p>
          <p className="mb-1">
            Registered in India · CIN and GST details available on request
          </p>
          <p className="mb-1">
            Email:{" "}
            <a href="mailto:hello@egostix.com" className="text-EgostixBlue">
              hello@egostix.com
            </a>
          </p>
          <p className="mb-1">
            Phone: +91 12345 67890 (Business inquiries only)
          </p>
          <p className="mt-4 text-xs text-gray-400">
            © {new Date().getFullYear()} Egostix Engineering. All rights
            reserved.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
