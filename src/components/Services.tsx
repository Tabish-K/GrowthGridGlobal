"use client";

import Image from "next/image";

const services = [
    {
        title: "Data & Cloud Solutions",
        description:
        "Simplify data management and scale your operations with secure cloud-based solutions.",
        image: "/dts.jpg",
    },
    {
        title: "Engagement with AI",
        description:
        "Enhance customer interaction with AI-driven engagement strategies that personalize experiences.",
        image: "/E-AI.jpg",
    },
    {
        title: "Custom Tech Solutions",
        description:
        "Develop tailored software and systems to solve your unique business challenges.",
        image: "/cts.jpg",
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-4 md:py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center md:text-start font-poppins">
            Explore our key <span className="text-[#D77914]">Solutions</span>
            </h2>
            <p className="mt-4 text-black text-xl md:text-2xl font-afacad text-center">
            {`A glimpse of our top services like Cloud, AI Engagement, and Custom Tech Solutions with much more to offer.`}
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, index) => (
                <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                <div className="relative h-56 md:h-64 w-full">
                    <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority
                    />
                </div>
                <div className="p-6 bg-black text-white">
                    <h3 className="text-2xl font-semibold font-poppins text-start">{service.title}</h3>
                    <p className="mt-2 leading-tight text-gray-300 font-afacad text-lg md:text-xl text-start">{service.description}</p>
                    <button className="mt-4 w-full bg-[#4F1C51] text-white py-2 rounded-full font-medium text-2xl tracking-wide shadow-md transition-all font-afacad">
                    Learn more
                    </button>
                </div>
                </div>
            ))}
            </div>
            
            <div className="mt-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-56 md:h-64 w-full">
                <Image
                    src={services[2].image}
                    alt={services[2].title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                </div>
                <div className="p-6 bg-black text-white">
                <h3 className="text-2xl md:text-4xl font-semibold font-poppins text-start">{services[2].title}</h3>
                <p className="mt-2 leading-tight text-gray-300 font-afacad text-md md:text-xl text-justify">{services[2].description}</p>
                <button className="mt-4 w-full bg-[#4F1C51] text-white py-2 rounded-full font-medium text-2xl md:text-2xl tracking-wide shadow-md transition-all font-afacad">
                    Learn more
                </button>
                </div>
            </div>
            </div>
            
            <button className="mt-10 w-[300px] px-6 py-2 bg-[#D77914] text-white text-lg md:text-2xl rounded-full shadow-xl hover:bg-[#B47216] transition-all tracking-wide font-afacad">
            Explore all services
            </button>
        </div>
        <div className="bg-black h-[2px] w-[80dvw] mx-auto mt-10 md:mt-20"/>
        </section>
    );
}