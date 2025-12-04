"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { ExelthUrl } from "@/constant/cnst";
import Image from "next/image";

const ProductTeaserCard = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a slight delay for smoother experience
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs animate-slideIn border border-gray-200 bg-white shadow-lg transition-all">
      <div className="relative p-4">
        {/* Dismiss Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-2 top-2 rounded-full p-1 text-gray-400 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <h4 className="text-lg font-bold">Introducing Exelth</h4>
        <div className="redd h-36 w-full overflow-hidden rounded-md border border-green-600">
          <Image
            src={"/product/exelth.png"}
            width={500}
            height={500}
            alt="Exelth"
            priority
            className="size-full object-cover"
          />
        </div>
        <p className="mt-1 text-xs text-gray-600">
          Our platform transforming healthcare systems across India with
          connected, collaborative care.
        </p>

        <Link
          href={ExelthUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded bg-EgostixBlue px-4 py-1.5 text-sm font-medium text-white transition hover:bg-blue-800"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ProductTeaserCard;
