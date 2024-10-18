"use client";

import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navBgClass = isHome
    ? "bg-navbar-home shadow-navbar-home"
    : "bg-navbar-not-home shadow-navbar-not-home";

  const logoSrc = isHome ? "/logo-white.webp" : "/logo-black.webp";

  return (
    <nav
      className={`fixed top-8 left-1/2 bg-[rgb(4, 4, 4)] transform -translate-x-1/2 w-[70%] p-1 rounded-lg z-[1001] backdrop-blur-md hidden md:flex justify-around items-center opacity-0 animate-fadeIn ${navBgClass} overflow-hidden`}
      style={{ animationDelay: "0.8s" }}
    >
      <NavLink href="/about" currentPath={pathname}>
        About
      </NavLink>
      <NavLink href="/experience" currentPath={pathname}>
        Experience
      </NavLink>
      <Link href="/">
        <Image
          src={logoSrc}
          alt="logo"
          width={40}
          height={40}
          className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
        />
      </Link>
      <NavLink href="/projects" currentPath={pathname}>
        Projects
      </NavLink>
      <NavLink href="/contact" currentPath={pathname}>
        Contact
      </NavLink>
    </nav>
  );
}

function NavLink({ href, children, currentPath }) {
  const isActive = currentPath === href;
  const baseClasses = `text-xl transition-all duration-300 no-underline`;
  const activeColor = "text-customBlueForText"; // Check contrast passes lighthouse
  const defaultColor = currentPath === "/" ? "text-white" : "text-black"; // Default link color based on isHome
  const hoverClasses = "hover:text-customBlue hover:-translate-y-0.5";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined} // For accessibility
      className={`${baseClasses} ${isActive ? activeColor : defaultColor
        } ${hoverClasses}`}
    >
      {children}
    </Link>
  );
}