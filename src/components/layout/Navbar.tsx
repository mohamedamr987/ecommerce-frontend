"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import AssetsPng from "@/constants/assetsPng";
import AssetsSvg from "../../constants/assetsSvg";

function SearchNavbarInput({ className = "" }) {
  return (
    <input
      type="text"
      placeholder="What are you looking for?"
      className={`rounded-md px-4 py-2 bg-gray-100 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-black ${className}`}
    />
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "Contact", "About", "Sign Up"];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 ">
      <div className="w-full px-4 lg:px-16 flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-black"
        >
          <Image
            src={AssetsPng.logo}
            alt="Logo"
            width={100}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden gap-12 lg:flex mx-4">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                href={`/${
                  item == "Home" ? "" : item.toLowerCase().replace(" ", "-")
                }`}
                className="text-base font-normal text-black hover:underline"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <SearchNavbarInput className="hidden md:block" />

          {/* Wishlist */}
          <button>
            <Image
              src={AssetsSvg.heart}
              alt="Wishlist"
              width={32}
              height={32}
            />
          </button>

          {/* Cart */}
          <button>
            <Image src={AssetsSvg.cart} alt="Cart" width={32} height={32} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-base text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Optional: mobile search */}
          <SearchNavbarInput className="mt-4" />
        </div>
      )}
    </nav>
  );
}
