import React from "react";

const HeroSection = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center px-4">
      <div className="max-w-3xl space-y-4 text-center">
        <h1 className="font-ego text-3xl font-extrabold text-EgostixBlue tablet:text-5xl desktop:text-7xl">
          Egostix Engineering
        </h1>
        <p className="text-base text-gray-700 tablet:text-lg desktop:text-xl">
          We are a product innovation company committed to building bold,
          impactful technologies for the future of health, human life, and
          society.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
