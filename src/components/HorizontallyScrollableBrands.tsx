"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import Brands Pngs
import coursera from "../../public/BrandsPng/logos_coursera.png";
import webflow from "../../public/BrandsPng/logos_webflow.png";
import monday from "../../public/BrandsPng/logos_monday.png";
import asana from "../../public/BrandsPng/logos_asana.png";
import pipedrive from "../../public/BrandsPng/logos_pipedrive.png";
import intercom from "../../public/BrandsPng/logos_intercom.png";
import fiverr from "../../public/BrandsPng/simple-icons_fiverr.png";
import hubspot from "../../public/BrandsPng/logos_hubspot.png";
import notion from "../../public/BrandsPng/logos_notion.png";

// Define the type for each brand logo
interface Brand {
    id: number;
    name: string;
    img: any;
    classes: string;
}

const HorizontallyScrollableBrands: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        
        window.addEventListener("resize", checkMobile);
        
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const brandsLogo: Brand[] = [
        { id: 1, name: "Coursera", img: coursera, classes: "h-3 md:h-5 w-auto" },
        { id: 2, name: "Webflow", img: webflow, classes: "h-5 md:h-8 w-auto" },
        { id: 3, name: "Monday.com", img: monday, classes: "h-6 md:h-8 w-auto" },
        { id: 4, name: "Fiverr", img: fiverr, classes: "h-6 md:h-8 w-auto" },
        { id: 5, name: "Asana", img: asana, classes: "h-5 md:h-8 w-auto" },
        { id: 6, name: "Pipedrive", img: pipedrive, classes: "h-6 md:h-8 w-auto" },
        { id: 7, name: "Intercom", img: intercom, classes: "h-7 md:h-8 w-auto" },
        { id: 8, name: "Hubspot", img: hubspot, classes: "h-6 md:h-8 w-auto" },
        { id: 9, name: "Notion", img: notion, classes: "h-8 w-auto" },
    ];

    // Duplicate the logos to ensure continuous scrolling
    const allLogos = [...brandsLogo, ...brandsLogo];

    return (
        <div className="relative overflow-hidden bg-[#B771E5]/10 py-4 md:py-6">
        {/* First carousel */}
        <motion.div
            className="flex space-x-12 md:space-x-24 items-center"
            animate={{
            x: [0, -1920], // Approximate full width of duplicated content
            }}
            transition={{
            x: {
                duration: isMobile ? 30 : 45,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
            }}
        >
            {allLogos.map((logo, index) => (
            <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
            >
                <div className="py-3 px-2">
                <Image
                    src={logo.img}
                    alt={logo.name}
                    width={96}
                    height={48}
                    className={logo.classes}
                    priority={index < 9}
                />
                </div>
            </div>
            ))}
        </motion.div>
        </div>
    );
};

export default HorizontallyScrollableBrands;