import Image from "next/image";

function Services() {
    return (
        <div id="services" className="py-16">
            <section className="bg-red-700 w-full flex items-center justify-center py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* LEFT COLUMN: Heading + Services List */}
                <div className="text-white">
                    {/* Gradient Heading with "Our" on top & "Services" below */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    <span className="block bg-gradient-to-r from-white via-[#FFD25B] to-[#A5D86E] text-transparent bg-clip-text">
                        Our
                    </span>
                    <span className="block bg-gradient-to-r from-white via-[#FFD25B] to-[#A5D86E] text-transparent bg-clip-text">
                        Services
                    </span>
                    </h2>

                    {/* Service Links */}
                    <div className="space-y-5 text-lg md:text-xl font-medium">
                    {/* Service Row 1 */}
                    <div className="flex items-center justify-between border-b border-white/25 pb-3 cursor-pointer hover:text-[#FFD25B] transition-all">
                        <span>Technology &amp; Development</span>
                        <span className="ml-4 text-2xl">&rarr;</span>
                    </div>

                    {/* Service Row 2 */}
                    <div className="flex items-center justify-between border-b border-white/25 pb-3 cursor-pointer hover:text-[#FFD25B] transition-all">
                        <span>Automation &amp; Analytics</span>
                        <span className="ml-4 text-2xl">&rarr;</span>
                    </div>

                    {/* Service Row 3 */}
                    <div className="flex items-center justify-between border-b border-white/25 pb-3 cursor-pointer hover:text-[#FFD25B] transition-all">
                        <span>Marketing &amp; Branding</span>
                        <span className="ml-4 text-2xl">&rarr;</span>
                    </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Mockup Image + Dots Positioned Directly Below */}
                <div className="flex flex-col items-center lg:items-end">
                    <div>
                    {/* Mockup Image */}
                    <Image
                    width={600}
                    height={600}
                    src="/images/laptopPhone.png" // Replace with your image path
                    alt="Laptop and phone mockup"
                    />
                    </div>

                    {/* Carousel Dots - Now Directly Below the Image */}
                    <div className="flex space-x-2 mt-[-10px]">
                    <div className="w-3 h-3 rounded-full bg-white" />
                    <div className="w-3 h-3 rounded-full bg-white/50" />
                    <div className="w-3 h-3 rounded-full bg-white/50" />
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
