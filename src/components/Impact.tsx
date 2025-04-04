"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
    id: string;
    category: string;
    region: string;
    title: string;
    description: string;
    imageUrl: string;
}

const CaseStudies: React.FC = () => {
    const caseStudies: CaseStudy[] = [
        {
        id: "1",
        category: "Wellness",
        region: "KDC (North America)",
        title:
            "Conversions increased from 1.1% to 3.6% after implementing the new and improved website",
        description: "",
        imageUrl: "/wellness-case-study.jpg",
        },
        {
        id: "2",
        category: "Telecom",
        region: "B2B SaaS Platform (Europe)",
        title:
            "Limited resources led to 19% increase in product development velocity through a strategic dashboard and intuitive UX redesign",
        description: "",
        imageUrl: "/telecom-case-study.jpg",
        },
        {
        id: "3",
        category: "Retail",
        region: "Growth OnRemote Work SaaS",
        title:
            "Senior SAAS team found after Growth Grid rebuilt GTM results and investor decks...",
        description: "",
        imageUrl: "/retail-case-study.jpg",
        },
    ];

return (
    <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#4F1C51] font-poppins">Case studies</h2>
            <p className="text-lg md:text-2xl mt-2 mx-auto font-afacad">
            {`Explore how we've helped businesses achieve scalable growth through AI
            automation, data-driven strategies, and innovative digital solutions.`}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {caseStudies.map((study) => (
            <div
                key={study.id}
                className="rounded-md overflow-hidden shadow-lg relative"
            >
                <div className="relative h-[30rem]">
                <Image
                    src={study.imageUrl}
                    alt={study.title}
                    // layout="fill"
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover' }}
                />
                </div>
                <div className="p-4 absolute bottom-0 bg-black/70 text-white h-[40%] border-t-2 font-afacad flex flex-col justify-between">
                <div className="mb-2 text-sm md:text-xl font-medium">
                    {study.category} {study.region}
                <div className="bg-gray-300 h-[1px] w-full"/>
                </div>
                <p className="mb-4 text-justify">{study.title}</p>
                <Link href={`/#/case-studies/${study.id}`}>
                    <p className="inline-flex items-center gap-2 text-sm md:text-lg font-medium">
                    Read Case Study
                    <ArrowRight size={16}/>
                    </p>
                </Link>
                </div>
            </div>
            ))}
        </div>

        <div className="text-center">
            <Link href="/case-studies">
            <p className="inline-block bg-[#D77914] hover:bg-[#D77914]/80 text-white font-medium font-afacad text-lg md:text-2xl py-2 px-12 rounded-full transition-colors">
                Read all case studies
            </p>
            </Link>
        </div>
        </div>
    );
};

export default CaseStudies;
