import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const navBgClass = isHome
    ? "bg-[rgba(227,227,227,0.3)] shadow-navbar-home"
    : "bg-[rgba(230,232,234,0.5)] shadow-navbar-not-home";

  const logoSrc = isHome ? "/logo-white.webp" : "/logo-black.webp";

  return (
    <nav
      className={`fixed top-8 left-[15%] w-[70%] p-1 rounded-lg z-[1001] backdrop-blur-md hidden md:flex justify-around items-center opacity-0 animate-fadeIn ${navBgClass} overflow-hidden`}
      style={{ animationDelay: "0.8s" }}
    >
      <NavLink href="/about" currentPath={router.pathname} isHome={isHome}>
        About
      </NavLink>
      <NavLink
        href="/experience"
        currentPath={router.pathname}
        isHome={isHome}
      >
        Experience
      </NavLink>
      <Link href="/">
        <img
          src={logoSrc}
          alt="logo"
          className="w-12 transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
        />
      </Link>
      <NavLink href="/projects" currentPath={router.pathname} isHome={isHome}>
        Projects
      </NavLink>
      <NavLink href="/contact" currentPath={router.pathname} isHome={isHome}>
        Contact
      </NavLink>
    </nav>
  );
}

function NavLink({ href, children, currentPath, isHome }) {
  const isActive = currentPath === href;
  const baseClasses = `text-xl transition-all duration-100 no-underline`;
  const activeColor = "text-customBlue"; // Active link color
  const defaultColor = isHome ? "text-white" : "text-black"; // Default link color based on isHome
  const hoverClasses = "hover:text-customBlue hover:-translate-y-0.5";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined} // For accessibility
      className={`${baseClasses} ${isActive ? activeColor : defaultColor} ${hoverClasses}`}
    >
      {children}
    </Link>
  );
}