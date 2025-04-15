import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "./data";

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen">
        {/* Hero Section - Keeping your header image container */}
        <div
            id="hero"
            className="min-h-[20rem] w-full md:h-[22rem] bg-cover bg-center flex justify-start items-center relative"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1689443111025-e3093c108915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="absolute inset-0 bg-black/40" />
            <div className="max-w-7xl relative mt-12 right-0 left-0 mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-6 font-bold bg-gradient-to-r from-white drop-shadow-2xl to-transparent text-transparent bg-clip-text font-poppins">
            Real Problems. Smart Solutions.
            </h1>
            <p className="font-afacad text-white text-md md:text-lg mt-2 mx-4 md:mx-6 ">
                {`Dive into our case studies to see how we turned challenges into success stories. Each project showcases our problem-solving approach, the strategies we implemented, and the impact we created.`}
            </p>
            </div>
        </div>
        {/* Header */}
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold text-center font-poppins">
            Our <span className="text-[#D77914]">Case studies</span>
            </h1>
            <p className="text-center font-afacad text-xl md:text-2xl mt-2">
            Growth grid in action
            </p>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
            {caseStudies.map((study) => (
                <div
                key={study.id}
                className="bg-white rounded-lg shadow-md overflow-hidden p-6 border-2 border-gray-300 hover:shadow-lg transition-shadow"
                >
                <div
                    className={`p-6 bg-[#D77914]/10 rounded-md flex justify-center items-center h-48`}
                >
                    <div
                    className={`absolute ${study.bgColor} rounded-full h-[8rem] w-[8rem] m-8 overflow-hidden`}
                    ></div>
                    <Image
                    src={study.image}
                    alt={study.title}
                    height={300}
                    width={300}
                    className="object-contain relative h-full w-full drop-shadow-xl"
                    />
                </div>
                <div className="mt-6 flex flex-col justify-evenly gap-4">
                    <div className="flex gap-2 text-xs mb-2 font-afacad">
                    <span className="border border-[#4F1C51] px-2 py-1 rounded">
                        {study.tag1}
                    </span>
                    <span className="border border-[#4F1C51] px-2 py-1 rounded">
                        {study.tag2}
                    </span>
                    <span className="border border-[#4F1C51] px-2 py-1 rounded">
                        {study.tag3}
                    </span>
                    </div>
                    <div className="">
                    <h3 className="font-bold text-lg font-poppins">
                        {study.title}
                    </h3>
                    <p className="font-afacad text-sm md:text-md text-gray-500 font-semibold">
                        {study.subtitle}
                    </p>
                    </div>
                    <Link
                    href={`/company/case-study`}
                    className="inline-block bg-[#4F1C51] w-max relative right-0 left-0 mx-auto font-afacad text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4F1C51]/90 transition-all"
                    >
                    View Project
                    </Link>
                </div>
                </div>
            ))}
            {/* CTA Section */}
            <div className="mt-16 rounded-lg p-8 flex flex-col items-center justify-evenly">
                <div>
                <h2 className="text-2xl md:text-3xl font-bold font-poppins">
                    Have a project in mind?
                </h2>
                <p className="mt-2 text-xl md:text-2xl text-black font-afacad">{`Let's bring your vision to life`}</p>
                </div>
                <Link
                href="/contact"
                className="mt-4 md:mt-0 bg-black text-white font-afacad px-6 py-3 rounded-md font-medium hover:bg-black/90 transition-colors"
                >
                Contact Us
                </Link>
            </div>
            </div>
        </div>
        </main>
    );
}
