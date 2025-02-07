import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Explore() {
    const services = [
        "Social Media Management",
        "Paid Advertising",
        "Content Creation",
        "Website and App Development",
        "E-Commerce Optimization",
        "Workflow Automation",
        "Predictive Analytics",
        "Data and Cloud Solutions",
        "Custom Tech Solutions"
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div 
                className="min-h-[22rem] md:h-[24rem] bg-cover bg-center flex items-center px-4 lg:px-16"
                style={{
                    backgroundImage: `url(${'https://images.unsplash.com/photo-1625685554528-2a0b517e094c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
                }}
            >
                <div className="max-w-xl lg:max-w-4xl mt-12 text-white">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Solutions Designed to Solve Your Challenges
                    </h1>
                    <p className="tracking-wide mt-4 lg:mt-6 text-base lg:text-lg">
                        Our tailored services deliver transformative results. Explore the solutions that align with your business needs.
                    </p>
                </div>
            </div>

            {/* Services Grid Section */}
            <div className="px-4 md:px-8 lg:px-20 py-8 lg:py-12">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 lg:mb-8">
                    Explore Our Services
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-gray-800">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="border bg-gray-50 p-6 md:p-8 lg:px-10 lg:py-16 relative"
                        >
                            <h1 className="text-base lg:text-lg font-semibold mb-8">
                                {service}
                            </h1>
                            <Link href="/inside">
                            <div className="absolute bottom-4 left-6 md:left-8 lg:left-10 w-full flex items-center space-x-1 group cursor-pointer">
                                <span className="text-[#CC0000] font-semibold text-sm">
                                    More
                                </span>
                                <ChevronRight 
                                    className="text-[#CC0000] transition-transform group-hover:translate-x-1" 
                                    size={20}
                                />
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
