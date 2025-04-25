"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import aws from "../../public/aws.png";
import { 
  AlignJustify,
  Cloud, 
  Code, 
  File,
  ShieldAlert,
  X, 
  ChevronDown,
  Waypoints,
  Sparkles,
  GalleryVertical,
  ShoppingBag,
  ChartNoAxesCombined,
  ShieldHalf,
  WandSparkles,
  Package,
  Headset,
  ServerCog, 
} from "lucide-react"
import Image from "next/image"

// Define strong TypeScript interfaces
interface NavLink {
  label: string
  hasDropdown: boolean
  parentRoute: string
  links?: Record<string, string[]>
  page?: string
  content?: Array<{
    icon?: ReactNode
    text: ReactNode | string
    description?: string
    isLink?: boolean
    path?: string // Added path property for specific routing
  }>
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [isDropdownHovered, setIsDropdownHovered] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const mainNavItems: NavLink[] = [
    {
      label: "Our Services",
      hasDropdown: true,
      parentRoute: "explore-services",
      links: {
        "": [
          "Technology & Development",
          "Data & Cloud Solutions",
          "Automation & Analytics",
          "Cybersecurity Services",
          "Engagement with AI"
        ]
      },
      content: [
        {
          icon: <Code size={20} className="text-[#D77914]" />,
          text: "Technology & Development",
          description:
            "We craft scalable websites, mobile apps, and custom digital solutions that accelerate business growth.",
          path: "/services/website-and-app-development"
        },
        {
          icon: <Cloud size={20} className="text-purple-700" />,
          text: "Data & Cloud Solutions",
          description:
            "Our secure cloud infrastructure and data management systems optimize performance and ensure reliability.",
          path: "/services/data-and-cloud-solutions"
        },
        {
          icon: <Waypoints size={20} className="text-[#D77914]" />,
          text: "Workflow Automation",
          description: "Streamline your processes with intelligent automation and actionable insights powered by AI.",
          path: "/services/workflow-automation"
        },
        {
          icon: <ShieldAlert size={20} className="text-gray-700" />,
          text: "Cybersecurity Services",
          description:
            "Protect your digital assets with advanced security protocols, risk assessments, and compliance strategies.",
          path: "/services/cybersecurity-services"
        },
        {
          icon: <Sparkles size={20} className="text-[#D77914]" />,
          text: "Engagement with AI",
          description: "Enhance customer interactions and business processes using smart AI-driven solutions.",
          path: "/services/engagement-with-ai"
        },
        {
          text: (
            <Link
              href="/explore-services"
              className="text-black hover:text-[#4F1C51] transition duration-300 inline-flex items-center text-md md:text-lg font-medium font-afacad"
            >
              Explore All Services
              <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19" />
                <path d="M12 5L19 12L12 19" />
              </svg>
            </Link>
          ),
          isLink: true,
          path: "/explore-services"
        },
      ],
    },
    {
      label: "Portofolio",
      hasDropdown: true,
      parentRoute: "company/case-study",
      links: {
        "": [  // Empty category for clean list
          "UI Path - Process Automation",
          "Dynamic Yield - E-Commerce Optimization",
          "AWS - Cloud Migration Strategy",
          "Revolut - Digital Transformation",
          "Palo Alto Prisma - Security & Compliance"
        ]
      },
      content: [
        {
          icon: <GalleryVertical size={20} className="text-[#D77914]" />,
          text: "Global Tech Firm",
          description: "How a global tech firm cut manual processes by 40% through workflow automation",
          path: "/company/case-study/global-tech-firm"
        },
        {
          icon: <ShoppingBag size={20} className="text-[#4F1C51]" />,
          text: "StartUp Feature",
          description: "How a SaaS startup feature tripled revenue by 285% in 6 months",
          path: "/company/case-study/startup-feature"
        },
        {
          icon: <Image src={aws} height={100} width={100} alt="aws" className="h-full w-full"/>,
          text: "AWS - Cloud Migration Strategy",
          description: "How a French startup achieved 30% cost savings with cloud infrastructure",
          path: "/company/case-study/french-startup"
        },
        {
          icon: <ChartNoAxesCombined size={20} className="text-[#4F1C51]" />,
          text: "Revolut - Digital Transformation",
          description: "Scaled a FinTech giant using AI and cloud technologies, driving 4x revenue growth.",
          path: "/company/case-study/digital-transformation"
        },
        {
          icon: <ShieldHalf size={20} className="text-[#D77914]" />,
          text: "DTC - Brands",
          description: "Scaling a DTC brand's revenue 4X with AI-driven paid advertising",
          path: "/company/case-study/dtc-brand"
        },
        {
          text: (
            <Link
              href="/company/case-study"
              className="text-black hover:text-[#4F1C51] transition duration-300 inline-flex items-center text-md md:text-lg font-medium font-afacad"
            >
              Explore All Case Studies
              <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19" />
                <path d="M12 5L19 12L12 19" />
              </svg>
            </Link>
          ),
          isLink: true,
          path: "/company/case-study"
        },
      ],
    },
    {
      label: "Blogs",
      hasDropdown: true,
      parentRoute: "blog",
      links: {
        "": [  // Empty category for clean list
          "harness-ai",
          "ai-in-product-development",
          "ai-driven-supply-chain",
          "automating-business-workflows",
          "content-marketing",
          "future-of-e-commerce"
        ]
      },
      content: [
        {
          icon: <WandSparkles size={20} className="text-[#D77914]" />,
          text: "Harnessing AI for Digital Transformation in SMEs",
          description: "Explore how AI empowers small and medium enterprises to scale and innovate.",
          path: "/blog/harness-ai"
        },
        {
          icon: <Package size={20} className="text-[#4F1C51]" />,
          text: "AI in Product Development",
          description: "Discover how AI accelerates product design and enhances customer feedback loops.",
          path: "/blog/ai-in-product-development"
        },
        {
          icon: <Headset size={20} className="text-[#D77914]" />,
          text: "AI in E-Commerce Customer Experience",
          description: "Learn how AI-driven recommendations and personalization improve user satisfaction.",
          path: "/blog/ai-driven-supply-chain"
        },
        {
          icon: <File size={20} className="text-[#D77914]" />,
          text: "Automating Business Workflows",
          description: "See how automation streamlines operations and increases productivity.",
          path: "/blog/automating-business-workflows"
        },
        {
          icon: <ServerCog size={20} className="text-[#4F1C51]" />,
          text: "AI in Content Marketing & Engagement",
          description: "Explore how AI optimizes content strategies and improves audience engagement.",
          path: "/blog/content-marketing"
        },
        {
          text: (
            <Link
              href="/blog"
              className="text-black hover:text-[#4F1C51] transition duration-300 inline-flex items-center text-md md:text-lg font-medium font-afacad"
            >
              Read All Blog Stories
              <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19" />
                <path d="M12 5L19 12L12 19" />
              </svg>
            </Link>
          ),
          isLink: true,
          path: "/blog"
        },
      ],
    },
    {
      label: "About Us",
      hasDropdown: false,
      parentRoute: "company",
      page: "about-us",
    },
    {
      label: "Why Us",
      hasDropdown: false,
      parentRoute: "company",
      page: "why-us",
    },
    {
      label: "Careers",
      hasDropdown: false,
      parentRoute: "company",
      page: "careers",
    },
  ]

  const mobileNavSections = mainNavItems;

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const handleNavItemHover = (index: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(index)
  }

  const handleNavItemLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      if (!isDropdownHovered) {
        setActiveDropdown(null)
      }
    }, 150)
  }

  const handleDropdownHover = () => {
    setIsDropdownHovered(true)
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const handleDropdownLeave = () => {
    setIsDropdownHovered(false)
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleNavLinkClick = () => {
    setIsOpen(false)
    setIsSearchOpen(false)
  }

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  // Generate class strings dynamically to avoid redundancy
  const getNavLinkClass = (isActive: boolean = false) => {
    return `text-[14px] uppercase tracking-wider flex items-center space-x-1 transition-colors font-afacad ${
      isActive
        ? "text-gray-600 hover:text-[#4F1C51]"
        : `${hasScrolled || isHovered ? "text-gray-600" : "text-white"} hover:text-gray-300`
    }`
  }

  const getIconClass = () => {
    return `transition-colors ${
      hasScrolled || isHovered || isSearchOpen
        ? "text-gray-500 hover:text-[#4F1C51]"
        : "text-white hover:text-gray-300"
    }`
  }

  return (
    <>
      <div className="fixed w-full z-40" ref={navRef}>
        <div
          className={`transition-all duration-300 ${
            hasScrolled || isHovered || isSearchOpen ? "bg-white" : "bg-transparent"
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
                        ? "text-gray-600 md:hover:text-gray-500"
                        : "text-white"
                  }`}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
                </button>

                <Link href="/" className={`${isSearchOpen ? "hidden md:block" : "block"}`} onClick={handleNavLinkClick}>
                  {/* Logo image based on scroll/hover state */}
                  <Image 
                    src={hasScrolled || isHovered || isSearchOpen ? "/blackLogo1.png" : "/whiteLogo1.png"} 
                    className="h-full" 
                    height={100}
                    width={100}
                    alt="Growth Grid" 
                  />
                </Link>

                {!isSearchOpen && (
                  <div className="hidden lg:flex items-center space-x-8 ml-8">
                    {mainNavItems.slice(0, 3).map((item, index) => (
                      <div
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() => handleNavItemHover(index)}
                        onMouseLeave={() => handleNavItemLeave()}
                      >
                        <button
                          className={getNavLinkClass(activeDropdown === index)}
                          aria-expanded={activeDropdown === index}
                        >
                          {item.label} {item.hasDropdown && <ChevronDown size={14} className={activeDropdown === index ? "ml-1 rotate-180" : "ml-1"} />}
                        </button>

                        {item.hasDropdown && activeDropdown === index && item.content && (
                          <div
                            className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded-lg py-6 px-6"
                            onMouseEnter={handleDropdownHover}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="space-y-4">
                              {item.content.map((subItem, subIndex) => (
                                <div
                                  key={subIndex}
                                  className={`flex items-start space-x-3 ${subItem.isLink ? "pt-2" : ""}`}
                                >
                                  {/* For regular navigation items with links */}
                                  {!subItem.isLink && (
                                    <Link href={subItem.path || `/${item.parentRoute}`} onClick={handleNavLinkClick}>
                                      <div className="flex items-start space-x-3">
                                        {subItem.icon && (
                                          <span className="text-lg mt-1 min-w-[20px]">{subItem.icon}</span>
                                        )}
                                        <div>
                                          <span className="font-medium text-sm font-poppins">{subItem.text}</span>
                                          {subItem.description && (
                                            <p className="text-gray-500 text-sm mt-1 font-afacad">
                                              {subItem.description}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    </Link>
                                  )}
                                  
                                  {/* For "Explore All" type links */}
                                  {subItem.isLink && (
                                    <div>{subItem.text}</div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden lg:flex items-center space-x-6">
                {!isSearchOpen && mainNavItems.slice(3).map((item, index) => (
                  <Link 
                    key={item.label}
                    href={`/${item.parentRoute}/${item.page}`}
                    onClick={handleNavLinkClick}
                    className={getNavLinkClass()}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <Link href="/contact">
                  <button className="uppercase bg-[#4F1C51] text-white border-[2px] text-xs px-5 py-3 rounded-full shadow-md font-afacad">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div
                className={`flex items-center space-x-4 relative ${
                  isSearchOpen ? "w-full md:w-[35rem]" : "justify-end"
                }`}
              >
                {/* Search functionality removed as in original */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - with AnimatePresence for smooth transitions */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-white shadow-lg z-50 w-full max-w-md h-full overflow-y-auto px-3"
            >
              <div className="flex flex-col h-full p-4 space-y-2">
                <div className="flex justify-between items-center py-2">
                  <Image src="/blackLogo1.png" alt="Growth Grid" className="h-full" height={100} width={100} />
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className=""
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-0">
                  {mobileNavSections.map((item, index) => (
                    <div key={item.label} className="border-b border-gray-200">
                      {item.hasDropdown ? (
                        <>
                          <button
                            className="w-full text-left font-medium text-lg md:text-xl flex justify-between items-center py-4 font-afacad"
                            onClick={() => toggleDropdown(index)}
                            aria-expanded={openDropdown === index}
                          >
                            {item.label}
                            {item.hasDropdown && (
                              <ChevronDown
                                className={`text-gray-500 transition-transform ${
                                  openDropdown === index ? "rotate-180" : ""
                                }`}
                              />
                            )}
                          </button>

                          {item.hasDropdown && openDropdown === index && item.content && (
                            <div className="py-2 space-y-6">
                              {item.content.filter(item => !item.isLink).map((subItem, subIndex) => (
                                <Link 
                                  href={subItem.path || `/${item.parentRoute}`} 
                                  key={subIndex}
                                  onClick={handleNavLinkClick}
                                >
                                  <div className="flex items-start space-x-3">
                                    {subItem.icon && (
                                      <span className="mt-1 min-w-[20px]">{subItem.icon}</span>
                                    )}
                                    <div>
                                      <span className="text-xs md:text-sm font-[550] tracking-wide font-poppins">{subItem.text}</span>
                                      {subItem.description && (
                                        <p className="text-gray-500 text-sm mb-2 font-afacad">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              {item.content.find(item => item.isLink) && (
                                <div className="pt-2 pb-4 border-t border-gray-200 mt-4 font-afacad">
                                  {item.content.find(item => item.isLink)?.text}
                                </div>
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={`/${item.parentRoute}/${item.page}`}
                          className="block w-full text-left font-medium text-lg md:text-xl py-4 hover:text-[#4F1C51] transition-colors font-afacad"
                          onClick={handleNavLinkClick}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto pt-6 pb-4">
                  <div className="flex justify-center">
                    <Link href="/contact">
                      <button className="bg-[#4F1C51] text-white py-3 px-8 rounded-full shadow-md uppercase font-medium text-sm w-full max-w-xs font-afacad">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop for search */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsSearchOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar