"use client"

import React from 'react';
import Image from 'next/image';
import techcrunch from "../../public/Featured-Icons/simple-icons_techcrunch (1).png";
import phunt from "../../public/Featured-Icons/simple-icons_producthunt.png";
import indiehacker from "../../public/Featured-Icons/simple-icons_indiehackers.png";
import designrush from "../../public/Featured-Icons/Frame 207.png";
import campaignasia from "../../public/Featured-Icons/Frame 208.png";
import dribble from "../../public/Featured-Icons/icon-park-outline_dribble.png";
import growthhackers from "../../public/Featured-Icons/Frame 257.png";
import hackernoons from "../../public/Featured-Icons/simple-icons_hackernoon.png";
import behance from "../../public/Featured-Icons/mage_behance.png";

// Define the type for platform data
interface Platform {
    name: string;
    logo: any;
    alt: string;
}

const platforms: Platform[] = [
    {
        name: 'TechCrunch',
        logo: techcrunch,
        alt: 'TechCrunch logo'
    },
    {
        name: 'Product Hunt',
        logo: phunt,
        alt: 'Product Hunt logo'
    },
    {
        name: 'Indie Hackers',
        logo: indiehacker,
        alt: 'Indie Hackers logo'
    },
    {
        name: 'DesignRush',
        logo: designrush,
        alt: 'DesignRush logo'
    },
    {
        name: 'Campaign Asia',
        logo: campaignasia,
        alt: 'Campaign Asia logo'
    },
    {
        name: 'Dribbble',
        logo: dribble,
        alt: 'Dribbble logo'
    },
    {
        name: 'GrowthHackers',
        logo: growthhackers,
        alt: 'GrowthHackers logo'
    },
    {
        name: 'HackerNoon',
        logo: hackernoons,
        alt: 'HackerNoon logo'
    },
    {
        name: 'Behance',
        logo: behance,
        alt: 'Behance logo'
    }
];

export default function FeaturedIn() {
    return (
        <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
            <h2 className="text-2xl md:text-5xl font-extrabold font-poppins text-[#D77914]">
                Featured in
            </h2>
            <p className="text-lg text-justify md:text-center md:text-2xl tracking-wide text-black font-afacad mt-2">
                Recognized by leading industry platforms and trusted by innovators worldwide.
            </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {platforms.map((platform) => (
                <div 
                key={platform.name} 
                className="flex flex-col items-center"
                >
                <div className="w-10 h-10 md:w-16 md:h-16 relative flex items-center justify-center">
                    {/* Use a div with background image as fallback if you don't have the SVGs yet */}
                    <div 
                    className="w-full h-full flex items-center justify-center rounded-md"
                    style={{ background: '', borderRadius: '8px' }}
                    >
                    {/* Replace with actual images when available */}
                    <Image
                        src={platform.logo}
                        alt={platform.alt}
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                    
                    {/* Temporary text placeholders for logos */}
                    <span className="text-white text-xs font-medium">
                        {platform.name === 'TechCrunch' && 'TC'}
                        {platform.name === 'Product Hunt' && 'P'}
                        {platform.name === 'Indie Hackers' && 'IH'}
                        {platform.name === 'DesignRush' && '↓'}
                        {platform.name === 'Campaign Asia' && 'C'}
                        {platform.name === 'Dribbble' && '⊚'}
                        {platform.name === 'GrowthHackers' && 'GH'}
                        {platform.name === 'HackerNoon' && '⌄⌄'}
                        {platform.name === 'Behance' && 'Be'}
                    </span>
                    </div>
                </div>
                <p className="text-xs md:text-lg text-[#4F1C51] mt-2 text-center font-medium font-afacad">
                    {platform.name === 'TechCrunch' && 'TechCrunch'}
                    {platform.name === 'Product Hunt' && 'Product Hunt'}
                    {platform.name === 'Indie Hackers' && 'Indie Hackers'}
                    {platform.name === 'DesignRush' && 'DesignRush'}
                    {platform.name === 'Campaign Asia' && 'Campaign Asia'}
                    {platform.name === 'Dribbble' && 'Dribbble'}
                    {platform.name === 'GrowthHackers' && 'GrowthHackers'}
                    {platform.name === 'HackerNoon' && 'HackerNoon'}
                    {platform.name === 'Behance' && 'Behance'}
                </p>
                </div>
            ))}
            </div>
        </div>
        <div className="bg-black h-[2px] w-[70dvw] mx-auto mt-10 md:mt-20"/>
        </section>
    );
}