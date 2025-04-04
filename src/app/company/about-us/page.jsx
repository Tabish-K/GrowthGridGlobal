"use client";

// import ScrollNavbar from "@/components/PreNav";
import { Award, ChartNoAxesCombined, CircleDollarSign, Earth, Eye, Factory, GraduationCap, Handshake, HeartHandshake, LucideLinkedin, Target, UserRoundSearch } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
    {
        icon: <Factory size={48} className="text-white" />,
        value: "10+",
        label: "Years Of Experience In The Industry",
    },
    {
        icon: <Earth size={48} className="text-white" />,
        value: "100+",
        label: "Businesses Empowered Globally",
    },
    {
        icon: <ChartNoAxesCombined size={48} className="text-white" />,
        value: "40%",
        label: "Average Operational Efficiency",
    },
    {
        icon: <CircleDollarSign size={48} className="text-white" />,
        value: "$2M+",
        label: "Saved Annually Across Workflows",
    },
];

const coreValues = [
    {
        icon: <Handshake size={48} />,
        title: "Respect",
        subtitle: "Valuing Every Perspective",
    },
    {
        icon: <Award size={48} />,
        title: "Excellence",
        subtitle: "Striving For Perfection",
    },
    {
        icon: <HeartHandshake size={48} />,
        title: "Collaboration",
        subtitle: "Working Better Together",
    },
    {
        icon: <GraduationCap size={48} />,
        title: "Learning",
        subtitle: "Growing Every Day",
    },
    {
        icon: <UserRoundSearch size={48} />,
        title: "Transparency",
        subtitle: "Open And Honest",
    },
    {
        icon: <Eye size={48} />,
        title: "Creativity",
        subtitle: "Innovating With Purpose",
    },
];  

const Page = () => {
    // const aboutUsNavLinks = [
    //     { id: "about-us", label: "About Us" },
    //     { id: "team", label: "Team" },
    //     { id: "value", label: "Value" },
    //     { id: "life-style", label: "Life Style" },
    // ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <main className="w-full bg-white">
        {/* Hero Section */}
        <div 
            id="hero"
            className="min-h-[20rem] w-full md:h-[22rem] bg-cover bg-center flex justify-start items-center relative"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1689443111025-e3093c108915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
            }}
        >
            <div className="absolute inset-0 bg-black/80" />
            <div className="max-w-7xl relative mt-12 right-0 left-0 mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-6 font-bold bg-gradient-to-r from-white drop-shadow-2xl to-transparent text-transparent bg-clip-text">We're Not Just Another Agency—We're Your Strategic Growth Catalyst</h1>
            </div>
        </div>

        {/* <ScrollNavbar navLinks={aboutUsNavLinks} heroId="hero"/> */}

        {/* Hero Section */}
        <section id="about-us" className="bg-white max-w-7xl right-0 left-0 lg:mx-auto relative mx-4 md:mx-6">
            {/* Header Section */}
            <div className="text-left py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl relative font-medium text-black leading-tight">
                We Envision Your Business Like A
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[#D77914]">
                Growth {" "}
                <span className="bg-gradient-to-r from-[#D77914] to-[#D77914]/40 text-transparent bg-clip-text">
                Partner
                </span>
            
            </h1>
            </div>

            {/* Missiom Section */}
            <div className="grid md:grid-cols-2 gap-20">
            {[
                {
                title: "Our Mission",
                description:
                    "To revolutionize businesses by delivering data-driven solutions powered by AI and automation.",
                icon: <Target size={48} className="text-[#4F1C51]" />,
                },
                {
                title: "Our Vision",
                description:
                    "A future where businesses harness the power of technology to innovate and thrive in a competitive landscape.",
                icon: <Eye size={48} className="text-[#4F1C51]" />,
                },
            ].map((item, index) => (
                <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 text-center flex flex-col items-start"
                >
                <div className="flex items-center justify-center w-28 h-28 rounded-full bg-[#4F1C51]/20">
                    {item.icon}
                </div>
                <h2 className="text-3xl font-bold mt-6 text-black font-poppins">{item.title}</h2>
                <p className="text-black text-justify mt-3 text-xl md:text-2xl font-afacad">{item.description}</p>
                </div>
            ))}
            </div>

            {/* Stats Section */}
            <div className="grid sm:grid-cols-2 gap-x-20 gap-y-12 my-16 font-afacad">
            {stats.map((stat, index) => (
                <div
                key={index}
                className="bg-[#4F1C51] p-6 rounded-xl text-white flex flex-col justify-between shadow-md"
                >
                <div className="flex items-center justify-between">
                    <div className="bg-white bg-opacity-20 p-3 rounded-md w-20 h-20 flex items-center justify-center">
                    {stat.icon}
                    </div>
                    <h3 className="text-5xl font-bold">{stat.value}</h3>
                </div>
                <p className="text-lg mt-3">{stat.label}</p>
                </div>
            ))}
            </div>

            {/* Story Section */}
            <div className="my-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black font-poppins">
                The{" "}
                <span className="bg-gradient-to-r from-[#D77914] to-[#D77914]/40 text-transparent bg-clip-text">
                Story
                </span>
            </h2>

            <p className="text-2xl font-afacad mb-12 md:text-3xl font-semibold relative text-gray-900 mt-3">
                Driving Innovation Through Smart Solutions
            </p>
            <div className="flex flex-col md:flex-row justify-between w-full items-center">
                <div className="max-w-2xl flex flex-col justify-between md:h-[34rem]">
                    <p className="text-xl md:text-2xl font-afacad capitalize text-gray-900 leading-relaxed text-justify">
                        Tabish Khan founded{" "}
                        <span className="text-[#4F1C51] font-semibold">Growth Grid</span>{" "}
                        with a vision to help businesses harness the power of technology and automation to accelerate growth.
                    </p>
                    <p className="italic capitalize font-afacad text-[#4F1C51] mt-6 text-[20px] md:text-[24px] leading-relaxed text-justify">
                    {`“Having worked extensively with enterprises and startups, I realized that many companies struggled to balance innovation, efficiency, and scalability. They needed more than just technology, they needed a partner who understood their business goals and could build solutions that drive measurable results.”`}
                    </p>
                    <p className="text-xl font-afacad md:text-2xl capitalize text-black mt-4 leading-relaxed text-justify">
                        {`Tabish identified a market gap for a company that blends
                        technology, automation, and business strategy. This inspired the
                        creation of`}{" "}
                        <span className="text-[#4F1C51] font-semibold">Growth Grid</span>,
                        {`a consulting and development firm dedicated to delivering
                        tailored solutions that drive digital transformation and
                        sustainable growth. Today, Growth Grid empowers enterprises and
                        scale-ups with innovative technology and data-driven insights to
                        achieve measurable success.`}
                    </p>
                </div>
                <div className="relative flex flex-col items-center md:w-[26rem] md:h-[34rem] py-6 md:py-0">
                    <img
                    src="/images/Tabish-Picture.png"
                    alt="Tabish Khan"
                    className="rounded-lg w-full h-full object-cover border border-[#D77914]"
                    />
                    <div className="mt-4 font-afacad flex justify-between w-full items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-black">
                                Tabish Khan
                            </h3>
                            <p className="text-black text-medium">
                                Founder & CEO @GrowthGrid
                            </p>
                        </div>
                        <LucideLinkedin size={44} className="text-black text-[16px] cursor-pointer border-[4px] border-gray-900 p-[5px] rounded-lg" />
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* Team */}
        <section id="team" className="bg-[#D77914]">
            <div className="max-w-7xl h-full flex flex-col md:flex-row justify-between leading-normal py-12 md:py-20 relative right-0 left-0 md:mx-auto mx-4">
                <div className="max-w-[32rem] flex flex-col justify-between items-center gap-6 md:gap-0 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl text-justify text-white font-medium font-poppins">Our Expert <span className="font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">Team</span></h1>
                    <p className="text-lg md:text-xl w-full text-white capitalize leading-2 text-justify font-afacad mx-auto">
                    {`Our team specializes in IT consulting services, AI automation solutions, and business process automation, blending technical expertise with creative vision to drive business transformation. Our developers, designers, marketers, and strategists work collaboratively to align business goals with cutting-edge solutions. From crafting intuitive websites to optimizing processes through automation and analytics, we ensure every project drives meaningful digital transformation and growth.`}
                    </p>
                    <button className="bg-[#4F1C51] font-afacad text-xl md:text-2xl text-[#FFFFFF] py-4 px-7 rounded-full font-semibold">
                        Join Our Team
                    </button>
                </div>

                <div className="md:w-[38rem] md:h-[25rem] bg-white rounded-xl p-6 shadow-xl">
                    <img
                        src="/images/team.jpg"
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Value */}
        <section id="value" className="bg-white">
            <div className="max-w-7xl py-20 right-0 left-0 md:mx-auto relative mx-4">
                <div className="flex flex-col justify-center items-center gap-3 py-3 w-full">
                    <h1 className="text-4xl md:text-5xl font-poppins">Our <span className="font-bold bg-gradient-to-r from-[#D77914] to-[#D77914]/50 bg-clip-text text-transparent">Core Values</span></h1>
                    <p className="capitalize text-black text-xl font-afacad md:text-2xl text-center max-w-[42rem]">{`Our values shape everything we do, driving innovation, excellence. and lasting impact.`}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 mt-10">
                    {coreValues.map((value, index) => (  
                    <div
                        key={index}
                        className="bg-[#4F1C51] font-afacad text-white p-6 rounded-xl flex flex-col items-start shadow-lg"
                    >
                        <div className="mb-4">{value.icon}</div>
                        <h3 className="text-4xl">{value.title}</h3>
                        <p className="mt-2 text-lg mb-4">{value.subtitle}</p>
                    </div>
                    ))}
                </div>

            </div>
        </section>

        {/* Life Style */}
        <section id="life-style">
            <div className="max-w-7xl relative right-0 left-0 md:mx-auto mx-4 md:py-20">
            <div className="mb-10 md:mb-20">
                <h1 className="text-3xl md:text-5xl font-semibold text-[#D77914] font-poppins">{`Work, Grow, Enjoy!`}</h1>
                <p className="text-xl md:text-2xl text-black text-justify mt-6 leading-relaxed font-afacad">
                    {`We Prioritize Our People. Our Team Is Our Greatest Strength, And We Are Committed To
                    Creating An Environment Where Everyone  Valued And Empowered. Through
                    Competitive Compensation, Comprehensive Healthcare, Flexible Work Options, Continuous
                    Growth Opportunities, Mental Health Support, And Engaging Team Activities, We Ensure
                    That Our Team Thrives Both Personally And Professionally.`}
                </p>
            </div>  

            <div className="">
                {/* Grid Container */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* Top row */}
                    <motion.div
                    className="md:col-span-1 overflow-hidden h-64 md:h-96"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    >
                    <Image
                        src="/images/screen-code.avif"
                        alt="Laptop showing data graph"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    </motion.div>

                    <motion.div
                    className="md:col-span-2 overflow-hidden h-64 md:h-96"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    >
                    <Image
                        src="/images/dev-code-screen.avif"
                        alt="Screen showing code"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    </motion.div>

                    {/* Bottom row */}
                    <motion.div
                    className="md:col-span-2 overflow-hidden h-64 md:h-96"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    >
                    <Image
                        src="/images/dev-in-office.avif"
                        alt="Developers in an office"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    </motion.div>

                    <motion.div
                    className="md:col-span-1 overflow-hidden h-64 md:h-96"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    >
                    <Image
                        src="/images/dev-mug.avif"
                        alt="Developer mug"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                </motion.div>

                {/* CTA Button */}
                <div className="flex justify-end my-12">
                    <motion.button
                    className="bg-[#4F1C51] text-white px-6 py-3 font-bold rounded-full font-afacad text-lg md:text-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    Learn Why Clients Choose Us
                    </motion.button>
                </div>
                </div>
                </div>
        </section>
        </main>
    );
};

export default Page;