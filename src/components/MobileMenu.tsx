import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "../data/config";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-xs tracking-widest hover:underline"
        aria-label="Open menu"
      >
        Menu
      </button>

      {/* Full Page Overlay - Portal to body to escape mix-blend-difference */}
      {mounted &&
        isOpen &&
        createPortal(
          <div className="fixed inset-0 z-100 bg-black text-white flex flex-col" onClick={() => setIsOpen(false)}>
            {/* Top decorative elements and close */}
            <div className="flex justify-between items-start p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
              <span className="text-xl opacity-50">+</span>
              <div className="flex items-center gap-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-widest hover:underline"
                  aria-label="Close menu"
                >
                  CLOSE
                </button>
                <span className="text-xl opacity-50">—</span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16" onClick={(e) => e.stopPropagation()}>
              <div className="border-t border-white border-opacity-20"></div>

              <a
                href="/"
                className="flex justify-between items-center py-6 md:py-8 border-b border-white border-opacity-20 hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-4xl md:text-6xl font-black tracking-tight">HOME</span>
                <span className="text-xs md:text-sm opacity-50">01</span>
              </a>

              <a
                href="/releases"
                className="flex justify-between items-center py-6 md:py-8 border-b border-white border-opacity-20 hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-4xl md:text-6xl font-black tracking-tight">RELEASES</span>
                <span className="text-xs md:text-sm opacity-50">02</span>
              </a>

              <a
                href="/artists"
                className="flex justify-between items-center py-6 md:py-8 border-b border-white border-opacity-20 hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-4xl md:text-6xl font-black tracking-tight">ARTISTS</span>
                <span className="text-xs md:text-sm opacity-50">03</span>
              </a>

              <a
                href="/#events"
                className="flex justify-between items-center py-6 md:py-8 border-b border-white border-opacity-20 hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-4xl md:text-6xl font-black tracking-tight">EVENTS</span>
                <span className="text-xs md:text-sm opacity-50">04</span>
              </a>

              <a
                href="/#contact"
                className="flex justify-between items-center py-6 md:py-8 border-b border-white border-opacity-20 hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-4xl md:text-6xl font-black tracking-tight">CONTACT</span>
                <span className="text-xs md:text-sm opacity-50">05</span>
              </a>
            </div>

            {/* Social Links */}
            <div
              className="grid grid-cols-2 gap-4 p-8 md:p-16 text-xs md:text-sm tracking-widest"
              onClick={(e) => e.stopPropagation()}
            >
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  + {social.name.toUpperCase()}
                </a>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
