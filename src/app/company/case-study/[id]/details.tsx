"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import type { CaseStudy } from "../data"

interface CaseStudyDetailProps {
    caseStudy: CaseStudy
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
    return (
        <main className="flex flex-col items-center">
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
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-6 font-bold bg-gradient-to-r from-white drop-shadow-2xl to-transparent text-transparent bg-clip-text">
                Case Study
            </h1>
            </div>
        </div>

        {/* Case Study Content */}
        <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
            {/* Back to Case Studies Link */}
            <div className="mt-6">
            <Link href="/company/case-study" className="text-[#4F1C51] font-poppins hover:underline flex items-center">
                ← Back to all case studies
            </Link>
            </div>

            {/* Header Section */}
            <div className="bg-[#4F1C51] text-white p-6 md:p-8 rounded-md mt-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-2/3 z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-poppins">{caseStudy.subtitle}</h2>
                <p className="text-sm md:text-base font-poppins mb-4">Client Case Study</p>
                <p className="text-base md:text-lg font-afacad">{caseStudy.description}</p>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 relative z-10">
                <div className="relative w-full h-40 md:h-48">
                    <div className="absolute top-0 right-0 w-full h-full">
                    <Image
                        src={caseStudy.image || "/placeholder.svg"}
                        alt="Dashboard visualization"
                        width={300}
                        height={200}
                        className="object-contain"
                    />
                    </div>
                </div>
                </div>
            </div>
            {/* <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-30"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div> */}
            </div>

            {/* The Challenge Section */}
            <div className="mt-12 mb-8">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl md:text-3xl font-semibold font-poppins text-[#4F1C51]">The Challenge</h2>
                <div className="ml-2">
                <ChevronDown className="h-6 w-6 text-[#4F1C51]" />
                </div>
            </div>
                <div className="bg-[#4F1C51] w-full h-[2px] mb-4"></div>
            <ul className="space-y-4 font-poppins">
                {caseStudy.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-[#4F1C51] font-bold mr-2">•</span>
                    <div>
                    <span className="font-semibold">{challenge.title}: </span>
                    {challenge.description}
                    </div>
                </li>
                ))}
            </ul>
            </div>

            {/* Our Solution Section */}
            <div className="bg-[#D77914] text-white p-6 md:p-8 rounded-md">
            <h2 className="text-2xl md:text-4xl tracking-wide text-center font-bold mb-6 font-poppins">Our Solution</h2>

            {caseStudy.solution.phases.map((phase, phaseIndex) => (
                <div key={phaseIndex} className={phaseIndex < caseStudy.solution.phases.length - 1 ? "mb-8" : ""}>
                <h3 className="text-xl font-bold mb-2 font-poppins">{phase.title}</h3>
                <div className="border-t border-white/70 pt-3">
                    <ul className="space-y-2 font-afacad">
                    {phase.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <p>{point}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            ))}
            </div>

            {/* The Results Section */}
            <div className="mt-12 mb-16">
            <h2 className="text-2xl md:text-4xl tracking-wide font-bold text-[#D77914] mb-8 font-poppins">The Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-20 max-w-4xl mx-auto">
                {caseStudy.outcomes.map((outcome, index) => (
                <div key={index} className="bg-[#4F1C51] text-white p-6 rounded-lg font-afacad">
                    <h3 className="text-4xl font-bold mb-1">{outcome.value}</h3>
                    <h4 className="text-xl font-semibold mb-3">{outcome.title}</h4>
                    <p className="text-sm">{outcome.description}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </main>
    )
}
