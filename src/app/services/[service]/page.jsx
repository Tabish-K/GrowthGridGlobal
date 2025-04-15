import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { serviceContent, services } from "../../../lib/servicesContent";

export async function generateStaticParams() {
    return services.map((service) => ({
        service: service.slug,
    }));
}

export default function ServicePage({ params }) {
    const { service } = params;
    const content = serviceContent[service];

    if (!content) {
        return <div>Service not found</div>;
    }

return (
    <div className="w-full">
        {/* Service Navigation */}
        {/* <div className="sticky top-0 bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-4 flex gap-4 overflow-x-auto">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`px-4 py-2 rounded-full whitespace-nowrap ${
                                params.service === service.slug
                                    ? "bg-[#CC0000] text-white"
                                    : "bg-gray-100 hover:bg-gray-200"
                            }`}
                        >
                            {service.title}
                        </Link>
                    ))}
                </div>
            </div> */}

        <div className="w-full bg-white">
            {/* Hero Section */}
            <div
            className="min-h-[20rem] md:h-[22rem] bg-cover bg-center flex justify-start items-center px-4 md:px-8 lg:px-16 relative"
            style={{
                backgroundImage: `url(${content.hero.backgroundImage})`,
            }}
            >
            <div className="absolute inset-0 bg-black/40" />
            <div className="w-full md:w-[60rem] mt-12 relative z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-poppins">
                {content.hero.title}
                </h1>
            </div>
            </div>

            {/* Research Section */}
            <div className="bg-[#D77914]/10">
            <div className="mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 px-4 md:px-8 lg:px-20 py-12">
                <div className="w-full lg:w-[80rem] flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#4F1C51] font-poppins">
                    {content.research.title}
                </h2>
                <p className="text-black text-justify leading-relaxed text-md md:text-lg font-afacad">
                    {content.research.content}
                </p>
                </div>
                <div className="bg-white p-6 w-full rounded-lg lg:w-auto border-l-4 border-[#4F1C51]">
                <h3 className="text-[#4F1C51] font-semibold font-poppins text-xl mb-4">
                    Key Changes
                </h3>
                <div className="flex flex-col gap-3 text-sm md:text-md font-afacad">
                    {content.research.keyChanges.map((change, index) => (
                    <p
                        key={index}
                        className="flex items-center gap-2 text-black text-[15px] md:text-[20px]"
                    >
                        <ChevronRight className="text-[#4F1C51] w-5 h-5 md:h-7 md:w-7" />
                        {change}
                    </p>
                    ))}
                </div>
                </div>
            </div>
            </div>

            {/* Advantage Section */}
            <div className="bg-white">
            <div className="mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                <div className="flex flex-col gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#4F1C51] font-poppins">
                    {content.advantage.title}
                </h2>
                <p className="text-black font-afacad leading-relaxed text-lg md:text-2xl">
                    {content.advantage.description}
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
                {/* AI Tools */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#D77914] font-poppins">
                        AI Tools We Use
                    </h3>
                    <div className="space-y-6">
                    {content.advantage.aiTools.map((tool, index) => (
                        <div key={index} className="bg-[#4F1C51] font-afacad text-white border rounded-xl p-4 w-full">
                        <div className="bg-white/20 w-max p-4 rounded-lg mb-4">
                            {tool.icon}
                        </div>
                        <h4 className="font-semibold text-xl md:text-2xl">
                            {tool.title}
                        </h4>
                        <p className="text-[14px] md:text-[18px]">
                            {tool.description}
                        </p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Unique Approach */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#4F1C51] font-poppins">
                        Our Unique Approach
                    </h3>
                    <div className="space-y-6">
                    {content.advantage.approach.map((item, index) => (
                        <div key={index} className="bg-[#D77914] text-white rounded-xl border p-4 w-full font-afacad">
                        <div className="bg-white/20 w-max p-4 rounded-lg mb-4">
                            {item.icon}
                        </div>
                        <h4 className="font-semibold text-xl md:text-2xl">
                            {item.title}
                        </h4>
                        <p className="text-[14px] md:text-[18px]">
                            {item.description}
                        </p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Process Section */}
            <div className="bg-[#D77914]/10">
            <div className="mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4F1C51] font-poppins mb-8">
                {content.process.title}
                </h2>
                <div className="space-y-8">
                {content.process.phases.map((phase, index) => (
                    <div key={index} className="bg-white p-6 border-l-[4px] rounded-lg border-[#D77914]">
                    <h3 className="text-xl text-[#4F1C51] font-poppins md:text-2xl font-semibold mb-4">
                        <span className="text-[#4F1C51]">{index + 1}.</span>{" "}
                        {phase.title}
                    </h3>
                    <div className="space-y-2 font-afacad text-md md:text-lg">
                        {phase.steps.map((step, stepIndex) => (
                        <p key={stepIndex} className="flex items-center gap-2">
                            <ChevronRight className="text-[#D77914] w-4 h-4" />
                            {step}
                        </p>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Results Section */}
            <div className="bg-white">
            <div className="mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4F1C51] font-poppins mb-8">
                {content.results.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {content.results.items.map((item, index) => (
                    <div key={index} className="bg-[#4F1C51]/10 border-[#4F1C51] p-6 border-l-[4px] rounded-lg">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#4F1C51] mb-4 font-poppins">
                        <span className="text-[#4F1C51]">{index + 1}.</span>{" "}
                        {item.title}
                    </h3>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 font-afacad">
                        → How We Achieve It:
                    </h4>
                    <p className="font-afacad text-[14px] md:text-[18px]">
                        {item.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Case Study Section */}
            <div className="bg-[#D77914]/10 px-4 md:px-8 lg:px-20 py-12 md:py-16">
            <div className="mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4F1C51] font-poppins mb-8">
                    {content.caseStudy.title}
                    </h2>
                    <div className="space-y-6 font-afacad">
                    <div>
                        <p className="font-semibold text-lg md:text-xl">Problem:</p>
                        <p className="text-lg md:text-xl">{content.caseStudy.problem}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg md:text-xl">Solution:</p>
                        <ul className="space-y-2">
                        {content.caseStudy.solution.map((item, index) => (
                            <li
                            key={index}
                            className="flex items-start text-lg md:text-xl gap-2"
                            >
                            <ChevronRight className="text-[#D77914] w-4 h-4 mt-1" />
                            {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg md:text-xl font-semibold">Results:</p>
                        <ul className="space-y-2">
                        {content.caseStudy.results.map((item, index) => (
                            <li
                            key={index}
                            className="flex items-start text-lg md:text-xl gap-2"
                            >
                            <ChevronRight className="text-[#D77914] w-4 h-4 mt-1" />
                            {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Related Services */}
            <div className="bg-white px-4 md:px-8 lg:px-20 py-12 lg:py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4F1C51] font-poppins mb-8 text-start">
                Related Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.relatedServices.map((service, index) => (
                    <Link href={`/services/${service.slug}`} key={index}>
                    <div className="border font-afacad p-6 relative hover:border-b-[6px] border-[#4F1C51] transition-all rounded-lg">
                        <div className="bg-[#4F1C51] w-max text-white p-4 rounded-lg mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold">
                        {service.title}
                        </h3>
                        <p className="text-gray-400 font-semibold mb-5">{service.description}</p>
                        <div className="absolute bottom-4 left-6 flex items-center space-x-1 group">
                        <span className="font-semibold text-sm md:text-lg">
                            Learn More
                        </span>
                        <ArrowUpRight
                            className="transition-transform group-hover:translate-x-1"
                            size={18}
                        />
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}