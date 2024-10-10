import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Overlay Circle */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[rgb(94,183,231)] to-[rgb(114,132,233)] transition-all duration-300 ease-in-out ${isOpen
          ? 'z-40 [clip-path:circle(150%_at_calc(100%_-_1.5rem)_1.5rem)]'
          : 'z-20 [clip-path:circle(0%_at_calc(100%_-_1.5rem)_1.5rem)]'
          }`}
      ></div>

      {/* Navigation Menu */}
      <nav
        className={`fixed inset-0 flex items-center justify-center transition-opacity ${isOpen ? 'opacity-100 z-50 duration-300' : 'opacity-0 pointer-events-none z-10 duration-100'
          }`}
      >
        <ul className="text-center space-y-6">
          <li onClick={handleLinkClick}>
            <Link
              href="/"
              className="text-white text-3xl uppercase hover:text-[rgb(102,201,255)] transition duration-200 z-60"
            >
              Home
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link
              href="/about"
              className="text-white text-3xl uppercase hover:text-[rgb(102,201,255)] transition duration-200"
            >
              About
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link
              href="/experience"
              className="text-white text-3xl uppercase hover:text-[rgb(102,201,255)] transition duration-200"
            >
              Experience
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link
              href="/projects"
              className="text-white text-3xl uppercase hover:text-[rgb(102,201,255)] transition duration-200"
            >
              Projects
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link
              href="/contact"
              className="text-white text-3xl uppercase hover:text-[rgb(102,201,255)] transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className={`fixed animate-fadeIn opacity-0 top-3 right-3 z-50 pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(102,201,255)] to-[rgb(120,139,249)] shadow-lg transition-transform duration-300 ${isOpen ? 'transform scale-110' : ''
          }`}
        style={{ animationDelay: "0.8s" }}
      >
        {/* Menu Icon */}
        <div className="relative w-6 h-6">
          <span
            className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
          ></span>
          <span
            className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''
              }`}
          ></span>
          <span
            className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
          ></span>
        </div>
      </button>
    </div>
  );
}