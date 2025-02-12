import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { serviceContent, services } from '@/lib/servicesContent';

export async function generateStaticParams() {
    return services.map((service) => ({
        service: service.slug,
    }));
}

function ServicePage({ params }) {
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {content.hero.title}
                </h1>
            </div>
            </div>

            {/* Research Section */}
            <div className="bg-gray-50">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                <div className="w-full lg:w-[80rem] flex flex-col gap-6 lg:gap-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    {content.research.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-md md:text-lg">
                    {content.research.content}
                </p>
                </div>
                <div className="bg-white p-6 w-full lg:w-auto border-l-4 border-[#CC0000]">
                <h3 className="text-[#CC0000] font-semibold text-xl mb-4">
                    Key Changes
                </h3>
                {/* <div className="flex flex-col gap-3 text-sm md:text-md">
                    {content.research.keyChanges.map((change, index) => (
                    <p
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                    >
                        <ChevronRight className="text-[#CC0000] w-5 h-5" />
                        {change}
                    </p>
                    ))}
                </div> */}
                </div>
            </div>
            </div>

            {/* Advantage Section */}
            <div className="bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                <div className="flex flex-col gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    {content.advantage.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-md md:text-lg">
                    {content.advantage.description}
                </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* AI Tools */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-900">
                    <span className="text-[#CC0000]">1.</span> AI Tools We Use
                    </h3>
                    {/* <div className="space-y-6">
                    {content.advantage.aiTools.map((tool, index) => (
                        <div key={index} className="bg-gray-50 border p-4">
                        <h4 className="text-[#CC0000] font-semibold mb-2">
                            → {tool.title}
                        </h4>
                        <p className="text-gray-700 text-sm md:text-md">
                            {tool.description}
                        </p>
                        </div>
                    ))}
                    </div> */}
                </div>

                {/* Unique Approach */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-900">
                    <span className="text-[#CC0000]">2.</span> Our Unique Approach
                    </h3>
                    {/* <div className="space-y-6">
                    {content.advantage.approach.map((item, index) => (
                        <div key={index} className="bg-gray-50 border p-4">
                        <h4 className="text-[#CC0000] font-semibold mb-2">
                            → {item.title}
                        </h4>
                        <p className="text-gray-700 text-sm md:text-md">
                            {item.description}
                        </p>
                        </div>
                    ))}
                    </div> */}
                </div>
                </div>
            </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                {content.process.title}
                </h2>
                <div className="space-y-8">
                {content.process.phases.map((phase, index) => (
                    <div key={index} className="bg-white p-6 border">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        <span className="text-[#CC0000]">{index + 1}.</span>{" "}
                        {phase.title}
                    </h3>
                    <div className="space-y-2 text-gray-700 text-sm md:text-md">
                        {phase.steps.map((step, stepIndex) => (
                        <p key={stepIndex} className="flex items-center gap-2">
                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
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
            <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                {content.results.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.results.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 border">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        <span className="text-[#CC0000]">{index + 1}.</span>{" "}
                        {item.title}
                    </h3>
                    <h4 className="text-[#CC0000] font-semibold mb-2">
                        → How We Achieve It:
                    </h4>
                    <p className="text-gray-700 text-sm md:text-md">
                        {item.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Case Study Section */}
            <div className="bg-gray-50 px-4 md:px-8 lg:px-20 py-12 lg:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                    {content.caseStudy.title}
                    </h2>
                    <div className="space-y-6">
                    <div>
                        <p className="text-[#CC0000] font-semibold">Problem:</p>
                        <p className="text-gray-700">{content.caseStudy.problem}</p>
                    </div>
                    <div>
                        <p className="text-[#CC0000] font-semibold">Solution:</p>
                        <ul className="space-y-2">
                        {content.caseStudy.solution.map((item, index) => (
                            <li
                            key={index}
                            className="text-gray-700 flex items-start gap-2"
                            >
                            <ChevronRight className="text-[#CC0000] w-4 h-4 mt-1" />
                            {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-[#CC0000] font-semibold">Results:</p>
                        <ul className="space-y-2">
                        {content.caseStudy.results.map((item, index) => (
                            <li
                            key={index}
                            className="text-gray-700 flex items-start gap-2"
                            >
                            <ChevronRight className="text-[#CC0000] w-4 h-4 mt-1" />
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
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">
                Related Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.relatedServices.map((service, index) => (
                    <Link href={`/services/${service.slug}`} key={index}>
                    <div className="border bg-gray-50 p-6 relative hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold mb-2">
                        {service.title}
                        </h3>
                        <p className="text-gray-700 mb-8">{service.description}</p>
                        <div className="absolute bottom-4 left-6 flex items-center space-x-1 group">
                        <span className="text-[#CC0000] font-semibold text-sm">
                            More
                        </span>
                        <ChevronRight
                            className="text-[#CC0000] transition-transform group-hover:translate-x-1"
                            size={20}
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

export default ServicePage;
