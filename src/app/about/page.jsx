import Link from "next/link";
import React from "react";
import { ExelthUrl } from "@/constant/cnst";
const AboutPage = () => {
  return (
    <main className="mt-28 flex w-full flex-col items-center justify-start px-4 py-16 tablet:px-8 desktop:px-16">
      {/* Heading Section */}
      <section className="mb-16 max-w-4xl text-center">
        <h1 className="font-inter text-3xl font-extrabold text-EgostixBlue tablet:text-5xl desktop:text-6xl">
          Engineering Purpose.
          <br />
          Empowering Vision.
        </h1>
      </section>

      {/* Mission Section */}
      <section className="mb-12 max-w-3xl text-center tablet:text-left">
        <h2 className="mb-2 text-2xl font-bold text-EgostixBlue">
          Our Mission
        </h2>
        <p className="text-base text-gray-700 tablet:text-lg">
          To engineer bold, human-centric technologies that enhance life in
          every dimension — health, society, and the self.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12 max-w-3xl text-center tablet:text-left">
        <h2 className="mb-2 text-2xl font-bold text-EgostixBlue">Our Vision</h2>
        <p className="text-base text-gray-700 tablet:text-lg">
          To become a global catalyst for meaningful innovation by aligning
          individual ambition with collective impact.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-3xl text-center tablet:text-left">
        <h2 className="mb-2 text-2xl font-bold text-EgostixBlue">Our Story</h2>
        <p className="text-base text-gray-700 tablet:text-lg">
          Egostix Engineering was founded on a simple belief:{" "}
          <strong>
            {" "}
            the power of an individual&apos;s ego — their identity, vision, and
            will — can shape technologies that change the world.
          </strong>
          <br />
          <br />
          In a time where innovation often prioritizes speed over soul, we set
          out to build differently. We imagined a company that doesn&apos;t just
          create products, but builds tools that{" "}
          <strong>amplify human potential</strong> — responsibly, ethically, and
          ambitiously.
          <br />
          <br />
          Our first chapter began with a vision to reimagine healthcare
          accessibility and infrastructure. What started as a deep-dive into
          real-world pain points quickly evolved into the creation of
          <strong className="text-green-600">
            {" "}
            <Link target="_blank" href={ExelthUrl}>
              Exelth
            </Link>
          </strong>
          , our flagship platform for connected, collaborative health systems.
          From there, we expanded into broader societal challenges — always
          driven by curiosity, intentionality, and a refusal to compromise on
          long-term value.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
