import Link from "next/link";
import { services } from "../../lib/servicesContent";
import Image from "next/image";
import TeamImage from "../../../public/images/team.jpg";
import TeamFullImage from "../../../public/images/teamFull.jpeg";
import { Code, FlaskConical, ServerCog, Megaphone, ArrowUpRight, Palette, Users } from "lucide-react";
import django from "../../../public/TechStackIcons/material-icon-theme_django.png";
import reactjs from "../../../public/TechStackIcons/skill-icons_react-dark.png";
import figma from "../../../public/TechStackIcons/material-icon-theme_figma.png";
import mongodb from "../../../public/TechStackIcons/logos_mongodb.png";
import ai from "../../../public/TechStackIcons/devicon_illustrator.png";
import cloud from "../../../public/TechStackIcons/devicon_googlecloud.png";
import angular from "../../../public/TechStackIcons/skill-icons_angular-light.png";
import azure from "../../../public/TechStackIcons/devicon_azure-wordmark.png";
import photoshop from "../../../public/TechStackIcons/devicon_photoshop.png";
import rubyrails from "../../../public/TechStackIcons/logos_rails.png";
import googleads from "../../../public/TechStackIcons/logos_google-ads.png";
import nextjs from "../../../public/TechStackIcons/devicon_nextjs-wordmark.png";
import adobe from "../../../public/TechStackIcons/logos_adobe.png";
import meta from "../../../public/TechStackIcons/logos_meta.png";
import postgresql from "../../../public/TechStackIcons/devicon_postgresql-wordmark.png";
import pytorch from "../../../public/TechStackIcons/skill-icons_pytorch-light.png";
import firebase from "../../../public/TechStackIcons/devicon_firebase.png";
import flask from "../../../public/TechStackIcons/logos_flask.png";
import aws from "../../../public/TechStackIcons/logos_aws.png";
import docker from "../../../public/TechStackIcons/skill-icons_docker.png";
import kubernetes from "../../../public/TechStackIcons/devicon_kubernetes.png";
import tenserflow from "../../../public/TechStackIcons/devicon_tensorflow-wordmark.png";
import teblueicon from "../../../public/TechStackIcons/logos_tableau-icon.png";
import mysql from "../../../public/TechStackIcons/devicon_mysql-wordmark.png";
import terraform from "../../../public/TechStackIcons/devicon_terraform.png";
import powerbi from "../../../public/TechStackIcons/logos_microsoft-power-bi.png";
import nodejs from "../../../public/TechStackIcons/la_node.png";

const roles = [
    {
        title: "Developers",
        description: "Build high-performance web applications using technologies like React, Node.js, Flask, and Django, ensuring seamless user experiences.",
        icon: "Code"
    },
    {
        title: "Designers",
        description: "Design intuitive, user-centric interfaces that blend creativity with functionality for engaging digital experiences.",
        icon: "Palette"
    },
    {
        title: "Project Managers",
        description: "Manage end-to-end project delivery, ensuring timelines, goals, and team coordination align with business objectives.",
        icon: "Users"
    },
    {
        title: "Data Scientists",
        description: "Transform data into insights using AI and analytics to drive automation and smarter decision-making.",
        icon: "FlaskConical"
    },
    {
        title: "DevOps Engineers",
        description: "Streamline development with optimized CI/CD pipelines and ensure stable, efficient deployments.",
        icon: "ServerCog"
    },
    {
        title: "Marketing Experts",
        description: "Execute ROI-focused strategies across SEO, ads, and social media to enhance customer acquisition and retention.",
        icon: "Megaphone"
    }
];  

const getIcon = (iconName) => {
    switch (iconName) {
        case "Code": return <Code size={24} className="text-white" />;
        case "Palette": return <Palette size={24} className="text-white" />;
        case "Users": return <Users size={24} className="text-white" />;
        case "FlaskConical": return <FlaskConical size={24} className="text-white" />;
        case "ServerCog": return <ServerCog size={24} className="text-white" />;
        case "Megaphone": return <Megaphone size={24} className="text-white" />;
        default: return null;
    }
};

const techStack = [
        { name: 'Django', icon: django, alt: 'Django icon' },
        { name: 'ReactJs', icon: reactjs, alt: 'ReactJs icon' },
        { name: 'Figma', icon: figma, alt: 'Figma icon' },
        { name: 'MongoDB', icon: mongodb, alt: 'MongoDB icon' },
        { name: 'AI', icon: ai, alt: 'AI icon' },
        { name: 'Cloud', icon: cloud, alt: 'Cloud icon' },
        { name: 'Angular', icon: angular, alt: 'Angular icon' },
        { name: 'Azure', icon: azure, alt: 'Azure icon' },
        { name: 'Photoshop', icon: photoshop, alt: 'Photoshop icon' },
        { name: 'RubyRails', icon: rubyrails, alt: 'RubyRails icon' },
        { name: 'GoogleAds', icon: googleads, alt: 'GoogleAds icon' },
        { name: 'NextJs', icon: nextjs, alt: 'NextJs icon' },
        { name: 'Adobe', icon: adobe, alt: 'Adobe icon' },
        { name: 'Meta', icon: meta, alt: 'Meta icon' },
        { name: 'PostgreSql', icon: postgresql, alt: 'PostgreSql icon' },
        { name: 'Pytorch', icon: pytorch, alt: 'Pytorch icon' },
        { name: 'Firebase', icon: firebase, alt: 'Firebase icon' },
        { name: 'Flask', icon: flask, alt: 'Flask icon' },
        { name: 'AWS', icon: aws, alt: 'AWS icon' },
        { name: 'Docker', icon: docker, alt: 'Docker icon' },
        { name: 'Kubernetes', icon: kubernetes, alt: 'Kubernetes icon' },
        { name: 'Tenserflow', icon: tenserflow, alt: 'Tenserflow icon' },
        { name: 'TeblueIcon', icon: teblueicon, alt: 'TeblueIcon icon' },
        { name: 'MySql', icon: mysql, alt: 'MySql icon' },
        { name: 'TerraForm', icon: terraform, alt: 'TerraForm icon' },
        { name: 'PowerBi', icon: powerbi, alt: 'PowerBi icon' },
        { name: 'NodeJs', icon: nodejs, alt: 'NodeJs icon' },
    ];

function Explore() {

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div 
                className="min-h-[22rem] md:h-[24rem] bg-cover bg-center flex items-center px-4 lg:px-16 relative"
                style={{
                    backgroundImage: `url(${'https://images.unsplash.com/photo-1625685554528-2a0b517e094c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
                }}
            >
                {/* Add overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Hero content */}
                <div className="max-w-xl lg:max-w-4xl mt-12 text-white relative z-10">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins">
                        Solutions Designed to Solve Your Challenges
                    </h1>
                    <p className="tracking-wide mt-4 lg:mt-6 text-lg lg:text-xl font-afacad">
                        Our tailored services deliver transformative results. Explore the solutions that align with your business needs.
                    </p>
                </div>
            </div>

            {/* Services Grid Section */}
            <div className="px-4 max-w-7xl mx-auto relative">
                <div className="relativ flex flex-col justify-center items-center my-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 font-poppins">
                        Explore Our <span className="text-[#D77914]">Services</span>
                    </h1>
                    <p className="text-md text-center md:text-3xl font-medium font-poppins">
                        {`Empowering Solutions for Your Business Challenges`}
                    </p>
                    <p className="font-afacad text-md md:text-2xl text-center text-gray-700 mt-2">
                        {`We design customized services that drive real results.`}
                        <br/>
                        {`Discover the solutions crafted to meet your unique goals.`}
                    </p>
                    <div className="bg-[#4F1C51] h-[2px] min-w-[70dvw] mt-8"/>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-black">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border-2 border-gray-300 hover:border-b-[6px] transition-all hover:border-[#4F1C51] bg-gray-50 p-2 md:p-4 relative rounded-2xl duration-300"
                        >
                            <div className="bg-[#4F1C51] w-max text-white py-4 px-3 rounded-lg mb-4">
                                {service.icon}
                            </div>
                            <h1 className="text-[10px] md:text-lg font-semibold font-poppins">
                                {service.title}
                            </h1>

                            <p className="font-afacad text-[9px] md:text-[16px] font-semibold text-gray-400 mt-1">
                                {service.description}
                            </p>
                            <Link href={`/services/${service.slug}`}>
                                <div className="font-poppins mt-4 w-full flex items-center space-x-1 group cursor-pointer">
                                    <span className="text-black font-semibold text-[10px] md:text-sm">
                                        Learn More
                                    </span>
                                    <ArrowUpRight 
                                        className="text-black h-[18px] md:h-[24px] transition-transform group-hover:translate-x-1"
                                        // size={20}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Specialists and Advantage */}
            <div className="bg-[#4F1C51] p-4 md:py-10 md:px-10 my-12 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Heading - always visible, but positioned differently on mobile vs desktop */}
                        <h2 className="text-2xl md:text-4xl tracking-wide font-bold mb-6 font-poppins">
                        Our Specialists,<br />
                        Your Advantage!
                        </h2>

                        {/* Call to Action */}
                        <div className="flex font-afacad">
                        <button className="bg-[#D77914] h-max hover:bg-[#D77914]/90 transition-all text-xs md:text-sm text-white py-1.5 px-5 rounded-full">
                            Get a quote
                        </button>
                        </div>
                    </div>

                    {/* Desktop: Image left, Content right */}
                    <div className="hidden md:flex gap-6 md:gap-12 mb-8">
                    {/* Team Image - Left side on desktop */}
                    <div className="w-2/5">
                        <Image
                        src={TeamFullImage} 
                        height={900}
                        width={500}
                        alt="Team working together" 
                        className="rounded-lg w-full h-full object-cover" 
                        />
                    </div>

                    {/* Roles Grid - Right side on desktop */}
                    <div className="w-3/5 grid grid-cols-2 gap-4 md:gap-8">
                        {roles.map((role, index) => (
                        <div key={index} className="flex flex-col items-start gap-3 font-afacad">
                            <div className="mt-1 flex-shrink-0">
                            {getIcon(role.icon)}
                            </div>
                            <div>
                            <h3 className="font-semibold text-xl tracking-wide">{role.title}</h3>
                            <p className="text-lg text-white/70">{role.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Mobile: Vertical stack - Image then Content */}
                    <div className="flex flex-col md:hidden gap-4 mb-8">
                    {/* Team Image - After heading on mobile */}
                    <div>
                        <Image
                        src={TeamImage} 
                        alt="Team working together" 
                        className="rounded-2xl w-full object-cover" 
                        />
                    </div>

                    {/* Roles Grid - Below image on mobile */}
                    <div className="grid grid-cols-2 gap-6 px-4">
                        {roles.map((role, index) => (
                        <div key={index} className="flex flex-col items-start gap-3 font-afacad tracking-wide">
                            <div className="mt-1 flex-shrink-0">
                            {getIcon(role.icon)}
                            </div>
                            <div>
                            <h3 className="font-semibold text-md">{role.title}</h3>
                            <p className="text-xs text-purple-100">{role.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Company Description */}
                    <div className="text-center max-w-3xl mx-auto mt-6 font-afacad">
                    <p className="mb-2 text-xs md:text-lg">
                        {`At Growth Grid, we align technology, strategy, and creativity to drive business success. Our expert team empowers businesses to optimize processes, enhance digital capabilities,
                        and unlock scalable growth with tailored solutions.`}
                    </p>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-10 md:gap-16 md:12 md:mb-20 justify-center items-center max-w-6xl mx-auto">
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-afacad font-bold text-center">
                    The {" "} 
                    <span className="text-[#D77914]">
                    tech stack
                    {" "}
                    </span>
                    that drives maximum business impact.
                </h1>

                {/* Icons */}
                <div className="grid grid-cols-3 gap-16 md:gap-x-36 md:gap-y-20">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="flex gap-8 justify-center items-center">
                                    <div className="w-7 h-7 md:h-12 md:w-12 flex items-center justify-center">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.alt}
                                        width={48}
                                        height={48}
                                        className="max-w-full max-h-full"
                                    />
                                    </div>
                                </div>
                            ))}
                        </div>

                {/* Footer Text Content */}
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl mb-2 font-afacad font-bold">
                        {`Think this is all we offer? `}
                    </h1>
                    <p className="text-lg md:text-2xl font-afacad max-w-3xl px-4">
                        {`We're just getting started! Our expertise extends beyond these technologies, ensuring we can adapt to your unique business needs and deliver the best possible solutions.`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Explore;