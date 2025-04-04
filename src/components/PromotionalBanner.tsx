"use client";

import Image from "next/image";

const PromotionalBanner = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg">
        {/* Header section */}
        <div className="px-6 py-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-black font-poppins">
            No more <span className="text-amber-500">confusion.</span>
            </h1>
            <p className="text-xl font-semibold mt-1 text-black font-afacad">
            Only clarity. Let us show you how.
            </p>
        </div>
        <div className="relative w-full px-2">
            {/* Image container */}
            <Image
            src={"/PromotionalBanner.png"}
            alt="Growth Grid promotional banner"
            width={800}
            height={400}
            className="w-full h-full rounded-xl"
            priority
            style={{ objectFit: 'cover' }}
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col font-afacad">
            {/* Content layout */}
            <div className="flex flex-1">
                {/* Logo and Left Content - "After" */}
                <div className="w-1/2 flex flex-col">
                <div className="p-4">
                        <Image
                        src={"/whiteLogo1.png"}
                        width={100}
                        height={100}
                        alt="company logo"
                        className="h-5 w-10 md:h-10 md:w-20"
                        style={{ objectFit: 'cover' }}
                        />
                </div>
                <div className="p-4 mt-auto pl-6">
                    <p className="text-xs md:text-lg -mt-6 text-black/70 max-w-[14rem]">
                    Streamlined operations, increased efficiency, and measurable
                    business impact.
                    </p>
                    <h3 className="font-bold text-black/70 text-sm md:text-xl">After</h3>
                </div>
                </div>

                {/* Right Content - "Before" */}
                <div className="w-1/2 p-4 flex flex-col items-end pr-6">
                <div className="mt-auto flex flex-col justify-between items-end h-full">
                    <div>
                        <h3 className="font-bold text-white text-sm md:text-xl text-right mt-0">
                        Before
                        </h3>
                        <p className="text-xs md:text-lg mt-1 text-white text-right">
                        Endless Meetings & No Results, Consultancies
                        </p>
                    </div>
                    <div className="right-0 relative">
                    <p className="text-xs md:text-lg text-right text-white max-w-[14rem]">
                        Disorganized processes, missed opportunities, and slow
                        growth.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Footer section */}
        <div className="p-6">
            <p className="text-lg md:text-2xl text-black font-afacad">
                {`Say goodbye to fragmented processes and inconsistent results. With our
                expertise in tech, automation, and strategy, we help businesses
                streamline operations, secure data, and achieve measurable growth, all
                with analytics that fit like a glove.`}
            </p>
        </div>
        </div>
    );
};

export default PromotionalBanner;
