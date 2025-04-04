"use client";

import Image from 'next/image';
import cloud from '../../public/Tools-Icons/simple-icons_googlecloud.png';
import meta from '../../public/Tools-Icons/Group.png';
import linkedin from '../../public/Tools-Icons/Vector.png';
import combinator from '../../public/Tools-Icons/Vector (2).png';
import stripe from '../../public/Tools-Icons/Frame 213.png';
import notion from '../../public/Tools-Icons/Frame 214.png';
import chatgpt from '../../public/Tools-Icons/Frame 215.png';
import figma from '../../public/Tools-Icons/solar_figma-bold-duotone.png';
import slack from '../../public/Tools-Icons/mdi_slack.png';
import microsoft from '../../public/Tools-Icons/Vector (1).png';
import canva from '../../public/Tools-Icons/cib_canva.png';
import webflow from '../../public/Tools-Icons/lineicons_webflow.png';
import shopify from '../../public/Tools-Icons/Vector (3).png';
import circle from '../../public/Tools-Icons/Vector (4).png';
import crunchbase from '../../public/Tools-Icons/Vector (5).png';
import zapier from '../../public/Tools-Icons/Vector (6).png';

interface Tool {
    name: string;
    icon: any;
    alt: string;
}

const ToolsAndPlatforms: React.FC = () => {
    // List of tools with their icons
    const tools: Tool[] = [
        { name: 'Cloud', icon: cloud, alt: 'Cloud icon' },
        { name: 'Meta', icon: meta, alt: 'Meta icon' },
        { name: 'LinkedIn', icon: linkedin, alt: 'LinkedIn icon' },
        { name: 'Y Combinator', icon: combinator, alt: 'Y Combinator icon' },
        { name: 'Stripe', icon: stripe, alt: 'Stripe icon' },
        { name: 'Notion', icon: notion, alt: 'Notion icon' },
        { name: 'ChatGPT', icon: chatgpt, alt: 'Hubspot icon' },
        { name: 'Figma', icon: figma, alt: 'Figma icon' },
        { name: 'Slack', icon: slack, alt: 'Slack icon' },
        { name: 'Microsoft', icon: microsoft, alt: 'Microsoft icon' },
        { name: 'Canva', icon: canva, alt: 'Canva icon' },
        { name: 'Webflow', icon: webflow, alt: 'Webflow icon' },
        { name: 'Shopify', icon: shopify, alt: 'Shopify icon' },
        { name: 'Circle', icon: circle, alt: 'Circle icon' },
        { name: 'Crunchbase', icon: crunchbase, alt: 'Crunchbase icon' },
        { name: 'Zapier', icon: zapier, alt: 'Zapier icon' },
    ];

return (
    <div className="pb-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#4F1C51] mb-4 font-poppins">Tools & Platforms we work with</h2>
            <p className="text-black max-w-5xl mx-auto font-afacad text-lg md:text-2xl text-justify md:text-center">
            {`Harnessing the power of industry-leading tools to streamline workflows, enhance
            collaboration, and drive measurable results.`}
            </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6 md:gap-12">
            {tools.map((tool) => (
            <div key={tool.name} className="flex justify-center items-center">
                <div className="w-10 h-10 md:h-12 md:w-12 flex items-center justify-center">
                <Image
                    src={tool.icon}
                    alt={tool.alt}
                    width={48}
                    height={48}
                    className="max-w-full max-h-full"
                />
                </div>
            </div>
            ))}
        </div>
        <div className="bg-black h-[2px] w-[70dvw] mx-auto mt-10 md:mt-20"/>
        </div>
    );
};

export default ToolsAndPlatforms;