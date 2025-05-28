import Link from "next/link";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ExelthUrl } from "@/constant/cnst";
import { Team } from "@/data/team";
import Image from "next/image";
// import Icon from "@/components/Global/Icon";
const AboutPage = () => {
  return (
    <main className="mt-28 flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 font-inter tablet:px-8 desktop:px-16">
      {/* Heading Section */}
      <div className="redd container flex flex-col items-center justify-center">
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
          <h2 className="mb-2 text-2xl font-bold text-EgostixBlue">
            Our Vision
          </h2>
          <p className="text-base text-gray-700 tablet:text-lg">
            To become a global catalyst for meaningful innovation by aligning
            individual ambition with collective impact.
          </p>
        </section>

        {/* Story Section */}
        <section className="max-w-3xl text-center tablet:text-left">
          <h2 className="mb-2 text-2xl font-bold text-EgostixBlue">
            Our Story
          </h2>
          <p className="text-base text-gray-700 tablet:text-lg">
            Egostix Engineering was founded on a simple belief:{" "}
            <strong>
              {" "}
              the power of an individual&apos;s ego — their identity, vision,
              and will — can shape technologies that change the world.
            </strong>
            <br />
            <br />
            In a time where innovation often prioritizes speed over soul, we set
            out to build differently. We imagined a company that doesn&apos;t
            just create products, but builds tools that{" "}
            <strong>amplify human potential</strong> — responsibly, ethically,
            and ambitiously.
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
        {/* Team Section */}
        <div className="redd my-2 w-full text-center tablet:text-left desktop:px-64">
          <h2 className="redd mb-2 text-2xl font-bold text-EgostixBlue">
            The team behind it
          </h2>
          <div className="redd flex w-full items-center justify-center gap-10">
            {Team.map((p, i) => {
              return (
                <div
                  key={i}
                  className="flex h-64 w-48 flex-col items-center justify-between rounded-md border p-2"
                >
                  <div className="w-full">
                    <div className="redd h-36 w-full overflow-hidden rounded-md border">
                      <Image
                        src={p.photo}
                        alt={p.name}
                        width={800}
                        height={500}
                        className="size-full object-cover"
                      />
                    </div>
                    <h1 className="font-medium">{p.name}</h1>
                    <p className="text-sm">{p.designation}</p>
                  </div>
                  <div className="w-full text-left">
                    <Link href={p.twitter} target="_blank">
                      <FaSquareXTwitter className="size-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
