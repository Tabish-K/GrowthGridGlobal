"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, BookmarkIcon, AlignJustify, AlignLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import Image from "next/image";

// Define TypeScript interfaces for our data structures
interface NavLink {
  label: string;
  hasDropdown: boolean;
  parentRoute: string;
  links: {
    [category: string]: string[];
  };
}

interface MobileNavItem {
  label: string;
  hasDropdown: boolean;
  page: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mainNavItems: NavLink[] = [
    {
      label: "Services",
      hasDropdown: true,
      parentRoute: "services",
      links: {
        "TECHNOLOGY & DEVELOPMENT": [
          "Website and App Development",
          "E-Commerce Optimization",
          "Data and Cloud Solutions",
        ],
        "AUTOMATION & ANALYTICS": [
          "Workflow Automation",
          "Predictive Analytics",
        ],
        "MARKETING & BRANDING": [
          "Social Media Management",
          "Paid Advertising",
          "Content Creation",
          "Market Research",
          "Engagement with AI",
        ],
      },
    },
    {
      label: "Portfolio",
      hasDropdown: true,
      parentRoute: "portfolio",
      links: {
        "CASE STUDY": ["E-Commerce Business Transformation"],
      },
    },
    {
      label: "Blogs",
      hasDropdown: true,
      parentRoute: "blogs",
      links: {
        "PRODUCT DEVELOPMENT": [
          "AI for sme digital transformation",
          "AI in product development",
          "AI in e-com customer experience",
        ],
        "SUPPLY CHAIN": ["AI driven supply chain optimization"],
        "BUSINESS OPERATIONS": [
          "Automation business workflows",
          "AI in content marketing & engagement",
        ],
      },
    },
    {
      label: "Company",
      hasDropdown: true,
      parentRoute: "company",
      links: {
        "": ["ABOUT US", "WHY US", "LEADERSHIP", "CAREERS"],
      },
    },
  ];

  const mobileNavSections: MobileNavItem[] = [
    { label: "Industries", hasDropdown: true, page: "#" },
    { label: "Services", hasDropdown: true, page: "explore" },
    { label: "Consultation Services", hasDropdown: true, page: "contact" },
    { label: "Blogs", hasDropdown: true, page: "blog" },
    { label: "Retail", hasDropdown: true, page: "retail" },
    { label: "About Us", hasDropdown: true, page: "company/about-us" },
    { label: "Careers", hasDropdown: true, page: "careers" },
  ];

  const mobileBottomSections: MobileNavItem[] = [
    { label: "Explore", hasDropdown: true, page: "explore" },
    { label: "Contact", hasDropdown: true, page: "contact" },
  ];

  // Handle dropdown hover
  const handleNavItemHover = (index: number): void => {
    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(index);
  };

  // Handle dropdown hover exit
  const handleNavItemLeave = (): void => {
    // Set a timeout before closing the dropdown
    // This gives the user time to move mouse to the dropdown
    closeTimeoutRef.current = setTimeout(() => {
      // Only close if dropdown itself is not being hovered
      if (!isDropdownHovered) {
        setActiveDropdown(null);
      }
    }, 150); // 150ms delay
  };

  // Handle dropdown hover
  const handleDropdownHover = (): void => {
    setIsDropdownHovered(true);
    // Clear any pending close timers
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Handle dropdown exit
  const handleDropdownLeave = (): void => {
    setIsDropdownHovered(false);
    // Set a timeout to close the dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setHasScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      // Clear any pending timeouts when component unmounts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleNavLinkClick = (): void => {
    setIsOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="fixed w-full z-40" ref={navRef}>
        <div
          className={`transition-all duration-300 ${
            hasScrolled || isHovered || isSearchOpen
              ? "bg-white"
              : "bg-transparent"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2">
            <div className="flex items-center justify-between w-full h-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 z-50 ${
                    isSearchOpen
                      ? "hidden"
                      : hasScrolled || isHovered
                      ? "text-gray-600 md:hover:text-gray-500" // Hover effect only on medium+ screens
                      : "text-white"
                  }`}
                >
                  {isOpen ? (
                    <AlignLeft size={24} />
                  ) : (
                    <AlignJustify size={24} />
                  )}
                </button>

                <Link
                  href="/"
                  className={`${isSearchOpen ? "hidden md:block" : "block"}`}
                  onClick={handleNavLinkClick}
                >
                  {hasScrolled || isHovered || isSearchOpen ? (
                    <Image
                      src="/blackLogo1.png"
                      width={100}
                      height={56}
                      className="h-14 w-auto"
                      alt="Logo"
                    />
                  ) : (
                    <Image
                      src="/whiteLogo1.png"
                      width={100}
                      height={48}
                      className="h-12 w-auto"
                      alt="Logo"
                    />
                  )}
                </Link>

                {!isSearchOpen && (
                  <div className="hidden lg:flex items-center space-x-8 ml-8">
                    {mainNavItems.map((item, index) => (
                      <div
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() => handleNavItemHover(index)}
                        onMouseLeave={() => handleNavItemLeave()}
                      >
                        <button
                          className={`text-[14px] uppercase tracking-wider flex items-center space-x-1 transition-colors ${
                            activeDropdown === index
                              ? "text-gray-600 hover:text-[#CC0012]"
                              : `${
                                  hasScrolled || isHovered
                                    ? "text-gray-600"
                                    : "text-white"
                                } hover:text-gray-300`
                          }`}
                        >
                          {item.label}
                        </button>

                        {item.hasDropdown && activeDropdown === index && (
                          <div
                            className="absolute left-0 mt-2 w-max bg-white shadow-lg border rounded-lg py-4 px-6 grid grid-cols-2 gap-4"
                            onMouseEnter={handleDropdownHover}
                            onMouseLeave={handleDropdownLeave}
                          >
                            {Object.entries(item.links).map(
                              ([category, links], i) => (
                                <div key={i}>
                                  {category && (
                                    <h4 className="text-[#CC0012] tracking-wide font-bold text-sm mb-2">
                                      {category}
                                    </h4>
                                  )}
                                  {links.map((link, j) => (
                                    <Link
                                      href={`/${item.parentRoute}/${link
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      key={j}
                                      className="block tracking-wide text-gray-700 hover:text-[#CC0000] uppercase text-xs py-1"
                                    >
                                      {link}
                                    </Link>
                                  ))}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                    <Link href="/contact">
                      <button className="uppercase bg-[#CC0012] text-white text-xs px-5 py-3 rounded-[4px] shadow-md">
                        Contact us
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              <div
                className={`flex items-center space-x-4 relative ${
                  isSearchOpen ? "w-full md:w-[35rem]" : "justify-end"
                }`}
              >
                <SearchBar
                  isSearchOpen={isSearchOpen}
                  setIsSearchOpen={setIsSearchOpen}
                  hasScrolled={hasScrolled}
                  isHovered={isHovered}
                />

                {!isSearchOpen && (
                  <>
                    <Link
                      href="/explore"
                      onClick={handleNavLinkClick}
                      className={`hidden lg:block text-sm tracking-wider uppercase transition-colors ${
                        hasScrolled || isHovered || isSearchOpen
                          ? "text-gray-500 hover:text-[#CC0012]"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      Explore
                    </Link>

                    <button className="hidden lg:block">
                      <BookmarkIcon
                        size={24}
                        className={`transition-colors ${
                          hasScrolled || isHovered || isSearchOpen
                            ? "text-gray-500 hover:text-[#CC0012]"
                            : "text-white hover:text-gray-300"
                        }`}
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed z-50 inset-0 bg-white shadow-lg border-r-[8px] border-[#CC0012] w-[18rem] h-[34rem]"
              style={{ top: "80px" }}
            >
              <div className="flex flex-col h-full overflow-y-auto relative px-6">
                <div className="py-6 space-y-6 border-b-2 border-gray-200">
                  {mobileNavSections.map((item) => (
                    <Link
                      href={`/${item.page}`}
                      key={item.label}
                      onClick={handleNavLinkClick}
                    >
                      <div>
                        <button className="flex items-center justify-between w-full py-3 text-left text-gray-800 hover:text-[#CC0012] transition-all">
                          <span className="text-xs sm:text-sm uppercase tracking-wider">
                            {item.label}
                          </span>
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute w-full bottom-4 space-y-4 px-4">
                <div>
                  {mobileBottomSections.map((item) => (
                    <Link
                      href={`/${item.page}`}
                      key={item.label}
                      onClick={handleNavLinkClick}
                    >
                      <div>
                        <button className="flex items-center justify-between w-full py-3 text-left text-gray-800">
                          <span className="text-xs sm:text-sm uppercase font-semibold hover:underline decoration-[#CC0012]">
                            {item.label}
                          </span>
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="relative right-0 left-0 m-auto w-max">
                  <Link href="/">
                    <Image
                      src="/blackLogo1.png"
                      width={100}
                      height={56}
                      className="h-14 w-auto"
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute bg-[#CC0012] top-0 -right-12 p-3 text-[#CC0012]"
              >
                <X size={20} className="text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsSearchOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
