import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";

const serviceData = [
    {
        title: "Technology & Development",
        image: "/images/2.png",
        subcategories: [
            "Website Development",
            "App Development",
            "E-Commerce Optimization",
            "Data and Cloud Solutions",
        ],
    },
    {
        title: "Automation & Analytics",
        image: "/images/5.png",
        subcategories: [
            "Workflow Automation",
            "Predictive Analytics"
        ],
    },
    {
        title: "Marketing & Branding",
        image: "/images/6.png",
        subcategories: [
            "Social Media Management",
            "Paid Advertising",
            "Content Creation",
            "Market Research",
            "Engagement with AI"
        ],
    },
];

function Services() {
    const [activeService, setActiveService] = useState(serviceData[0]);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
            setIsTablet(width >= 640 && width < 1024);
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleCategory = (service) => {
        setActiveService(service);
        setExpandedCategory(expandedCategory === service.title ? null : service.title);
    };

    // Simplified animation variants with faster transitions
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.2 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 }
        },
    };

    const headingVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
    };

    // Fast subcategory animations
    const subcategoryVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.2 }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.15 }
        }
    };

    return (
        <div id="services" className="py-8 md:py-16 relative z-20">
            <section className="bg-[#CC0012] w-full flex items-center justify-center py-16 md:py-20 px-4 md:px-0">
                <motion.div
                    className="w-full max-w-7xl mx-auto px-4 md:px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >

                    <div className={`grid grid-cols-1 ${!isMobile && !isTablet ? "lg:grid-cols-2" : ""} gap-10 md:gap-20 items-end py-10`}>
                        {/* Services List */}
                        <div className="text-white space-y-6 md:space-y-12 w-full flex flex-col">
                            
                    <motion.div 
                        className="text-center lg:text-left relative"
                        variants={headingVariants}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            <span className="block text-white font-medium">
                                Our
                            </span>
                            <span className="block font-bold bg-gradient-to-r from-white via-[#ffb121] to-[#ffb121] text-transparent bg-clip-text">
                                Services
                            </span>
                        </h2>
                    </motion.div>
                            {serviceData.map((service, index) => (
                                <div
                                    key={service.title}
                                    className="w-full"
                                >
                                    <div
                                        className={`flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer transition-all duration-150 text-xl sm:text-2xl tracking-wide font-medium w-full ${
                                            activeService?.title === service.title
                                                ? "text-white font-bold"
                                                : "text-gray-200 hover:text-white"
                                        }`}
                                        onClick={() => toggleCategory(service)}
                                    >
                                        <span>{service.title}</span>
                                        <motion.span
                                            className="ml-4 text-2xl"
                                            initial={false}
                                            animate={{
                                                rotate: expandedCategory === service.title ? 90 : 0
                                            }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <MoveRight/>
                                        </motion.span>
                                    </div>
                                    
                                    {/* Simplified subcategories animation */}
                                    <AnimatePresence>
                                        {expandedCategory === service.title && (
                                            <motion.div
                                                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full overflow-hidden"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={subcategoryVariants}
                                            >
                                                {service.subcategories.map((sub, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="border px-3 py-2 rounded-lg text-xs sm:text-sm text-red-500 bg-white text-center hover:bg-gray-50 transition-colors duration-150"
                                                    >
                                                        {sub}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Image Section */}
                        <motion.div
                            className="flex flex-col items-center relative"
                            variants={imageVariants}
                        >
                            <AnimatePresence mode="wait">
                                {!activeService || activeService.title === "Technology & Development" ? (
                                    <motion.div
                                        className="relative max-w-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        key="tech-dev"
                                    >
                                        <img
                                            src="/images/2.png"
                                            alt="Laptop mockup"
                                            className="max-h-[24rem] w-full max-w-xs sm:max-w-md mx-auto drop-shadow-2xl"
                                        />
                                        <motion.img
                                            src="/images/1.png"
                                            alt="Phone mockup"
                                            className="absolute top-14 sm:top-28 right-0 sm:right-10 h-20 sm:h-28 md:h-36"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.img
                                        src={activeService.image}
                                        alt={activeService.title}
                                        className="w-full mx-auto rounded-2xl drop-shadow-xl"
                                        key={activeService.title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </AnimatePresence>
                            
                            {/* Dots Navigation */}
                            <div className="flex space-x-2 sm:space-x-3 mt-6 justify-center w-full">
                                {serviceData.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-150 cursor-pointer ${
                                            activeService?.title === service.title
                                                ? "bg-white"
                                                : "bg-gray-300 hover:bg-gray-100"
                                        }`}
                                        onClick={() => setActiveService(service)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default Services;