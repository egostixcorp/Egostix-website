"use client";

import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full border-t">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-12 tablet:grid-cols-2 laptop:grid-cols-4">
        {/* COMPANY */}
        <div>
          <h4 className="text-lg font-semibold">Egostix Engineering</h4>
          <p className="mt-3 max-w-xs text-sm text-black">
            Building India’s cross-sector intelligence backbone — Healthcare,
            Media, Industry, Defence, Robotics and beyond.
          </p>

          <div className="mt-4 flex gap-4">
            <Link
              href="https://instagram.com/egostixlabs"
              target="_blank"
              className="transition hover:text-blue-600"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://x.com/egostix"
              target="_blank"
              className="transition hover:text-blue-600"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/egostix/"
              target="_blank"
              className="transition hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* SITEMAP */}
        <div>
          <h4 className="text-lg font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-black">
            <li>
              <Link href="/" className="transition hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/build" className="transition hover:text-blue-600">
                Build
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* INNOVATIONS */}
        <div>
          <h4 className="text-lg font-semibold">Our Innovations</h4>
          <ul className="mt-3 space-y-2 text-sm text-black">
            <li>
              <Link
                href="https://www.exelth.com"
                target="_blank"
                className="transition hover:text-blue-600"
              >
                Exelth
              </Link>
            </li>
            <li>
              <Link
                href="https://media.egostix.com"
                target="_blank"
                className="transition hover:text-blue-600"
              >
                Egostix Media
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-black">
            <li>
              <Link href="/contact" className="transition hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="mailto:contact@egostix.com"
                className="transition hover:text-blue-600"
              >
                contact@egostix.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-neutral-500">
        © {year} Egostix Engineering Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
