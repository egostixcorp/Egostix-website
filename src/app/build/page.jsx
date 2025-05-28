import React from "react";

const BuildPage = () => {
  return (
    <main className="mt-28 flex font-inter w-full flex-col items-center px-4 py-16 tablet:px-8 desktop:px-16">
      {/* Hero Section */}
      <section className="mb-20 max-w-5xl text-center">
        <h1 className="text-3xl font-extrabold text-EgostixBlue tablet:text-5xl desktop:text-6xl">
          We Don&apos;t Just Build Products
          <br />
          We Engineer Possibility.
        </h1>
        <p className="mt-4 px-52 text-base text-gray-700 tablet:text-lg">
          At Egostix, we design and develop technology that solves real problems
          and advances human potential — responsibly, creatively, and at scale.
        </p>
      </section>

      {/* Philosophy */}
      <section className="mb-16 max-w-3xl text-center tablet:text-left">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          Our Build Philosophy
        </h2>
        <p className="text-base text-gray-700 tablet:text-lg">
          We believe the best products emerge at the intersection of ambition,
          empathy, and engineering excellence. Every solution we craft is
          purpose-built, scalable, and deeply informed by the people it serves.
          <br />
          <br />
          We prioritize clarity over complexity, ethical design over shortcuts,
          and long-term value over trends.
        </p>
      </section>

      {/* How We Build */}
      <section className="mb-16 w-full max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          How We Build
        </h2>
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2">
          {[
            {
              title: "Discover & Define",
              desc: "We deeply explore the challenge space to align user needs with opportunity.",
            },
            {
              title: "Prototype & Iterate",
              desc: "Our agile teams rapidly test and refine ideas using real-world feedback.",
            },
            {
              title: "Engineer & Deploy",
              desc: "Built with reliability, scale, and future-proof architecture in mind.",
            },
            {
              title: "Maintain & Evolve",
              desc: "We invest in continuous improvement — adapting with user needs and system growth.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-EgostixBlue">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      {/* <section className="mb-16 max-w-4xl text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          What We&apos;re Great At
        </h2>
        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2">
          {[
            "Full-Stack Product Development (Next.js, React, Supabase)",
            "Scalable Infrastructure & API Design",
            "Human-Centered UX/UI",
            "Real-time Systems & Collaboration Tools",
            "Mobile Experiences (React Native, Expo)",
            "Healthcare & Compliance-Sensitive Systems",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-50 p-4 text-gray-700 shadow-sm transition hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </section> */}

      {/* Tech Stack */}
      {/* <section className="mb-16 max-w-4xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          We Build on a Modern Stack
        </h2>
        <p className="mb-6 text-base text-gray-600">
          We leverage cutting-edge tools that allow us to move fast, build
          responsibly, and scale confidently.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
          {[
            "Next.js 14 (App Router)",
            "React + TailwindCSS",
            "Supabase (Auth, DB, Realtime)",
            "TypeScript",
            "Twilio (OTP & communication)",
            "Expo + React Native",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section> */}

      {/* Optional Project Teaser */}
      {/* <section className="max-w-4xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          What We&apos;re Building
        </h2>
        <p className="text-base text-gray-700">
          <strong>Exelth</strong> is our flagship platform — designed to
          transform healthcare delivery across India through connected,
          collaborative systems that prioritize access, quality, and care.
        </p>
      </section> */}
    </main>
  );
};

export default BuildPage;
