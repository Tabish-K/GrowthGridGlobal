"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    const brandsLogo: Brand[] = [
        { id: 1, name: "Coursera", img: coursera, classes: "h-4 md:h-10 w-auto" },
        { id: 2, name: "Webflow", img: webflow, classes: "h-6 md:h-10 w-auto" },
        { id: 3, name: "Monday.com", img: monday, classes: "h-6 md:h-10 w-auto" },
        { id: 4, name: "Asana", img: asana, classes: "h-6 md:h-10 w-auto" },
        { id: 6, name: "Pipedrive", img: pipedrive, classes: "h-6 md:h-10 w-auto" },
        { id: 7, name: "Intercom", img: intercom, classes: "h-12 w-auto" },
        { id: 8, name: "Fiverr", img: fiverr, classes: "h-12 md:h-18 w-auto" },
        { id: 9, name: "Hubspot", img: hubspot, classes: "h-12 w-auto" },
        { id: 10, name: "Notion", img: notion, classes: "h-12 w-auto" },
    ];

    // Duplicate the logos for infinite scrolling effect
    const duplicatedLogos: Brand[] = [...brandsLogo, ...brandsLogo];

    return (
        <div className="overflow-hidden whitespace-nowrap bg-[#B771E5]/10 py-4 md:mb-14">
        <motion.div
            className="flex space-x-14 sm:space-x-44 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
            x: {
                duration: 60,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
            }}
        >
            {duplicatedLogos.map((logo, index) => (
            <motion.div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.5 }} // Staggered delay for smooth appearance
            >
                <div className="py-4">
                <Image src={logo.img} alt={logo.name} width={96} height={48} className={logo.classes} />
                </div>
            </motion.div>
            ))}
        </motion.div>
        </div>
    );
};

export default HorizontallyScrollableBrands;
