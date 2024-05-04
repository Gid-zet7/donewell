"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [hamburgerBtn, setHamburgerBtn] = useState<HTMLElement | null>(null);
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    setHamburgerBtn(hamburgerBtn);
    const mobileMenu = document.getElementById("mobile-menu");
    setMobileMenu(mobileMenu);
  }, []);

  const toggleMenu = () => {
    mobileMenu?.classList.toggle("hidden");
    mobileMenu?.classList.toggle("flex");
    hamburgerBtn?.classList.toggle("toggle-btn");
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-[#1b1a1a]">
        <section>
          <div className="flex justify-between py-5 px-8 border-b-4 gap-4 md:hidden border-red-500">
            <h1 className="text-xl lg:text-3xl md:hidden text-white">
              <Link href="/">Donewell Agent</Link>
            </h1>
            <button
              id="hamburger-button"
              className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
              onClick={toggleMenu}
            >
              <div className="absolute top-4 -mt-0.5 h-0.5 w-5 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-8 before:-translate-x-4 before:-translate-y-2 before:rounded before:bg-white dark:before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-8 after:-translate-x-4 after:translate-y-2 after:rounded after:bg-white dark:after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            </button>
          </div>
          <nav
            aria-label="main"
            className="py-5 px-8 border-b-4 gap-4 sticky top-0 z-10 border-red-600 hidden space-x-8 text-xl md:block"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between text-white">
              <h1 className="text-xl lg:text-3xl">
                <Link href="/">Donewell Life Agent</Link>
              </h1>

              <ul className="flex gap-4 cursor-pointer">
                <a href="/">
                  <li>Home</li>
                </a>

                <a href="/products">
                  <li>Products</li>
                </a>
                {/* <li>Principles</li> */}
                <li className="text-red-400">Dashboard</li>
              </ul>
            </div>
          </nav>
        </section>

        <section
          id="mobile-menu"
          className="top-68 justify-center absolute hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl"
        >
          <nav
            className="flex min-h-screen flex-col items-center py-8 text-gray-300"
            aria-label="mobile"
          >
            <a href="/" className="w-full py-6 text-center hover:opacity-90">
              Home
            </a>
            <a
              href="/products"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Products
            </a>
            {/* <a
              href="#principles"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Principles
            </a> */}
            <a
              href="#dashboard"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Dashboard
            </a>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Navbar;
