"use client";

import {
  ArrowUpRight,
  BadgeDollarSign,
  Clock,
  CodeXml,
  DollarSignIcon,
  HeartPulse,
  UserCircle,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Working at Growth Grid has given me the chance to solve real-world problems and work with clients from various industries. The learning curve is steep, but the growth is incredible!",
    author: "Product Manager",
  },
  {
    quote:
      "I've never been part of such a dynamic team before. The collaborative environment pushes me to bring my best ideas forward every day.",
    author: "UX Designer",
  },
  {
    quote:
      "Growth Grid doesn't just talk about work-life balance, they actively promote it. I feel valued both as an employee and as a person.",
    author: "Software Engineer",
  },
];

const CareersPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openPositions = [
    {
      title: "Senior AI Engineer 1",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Senior data Engineer 2",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Digital Marketing Strategist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
    },
  ];

  const benefits = [
    {
      icon: <DollarSignIcon />,
      title: "Competitive Compensation",
    },
    {
      icon: <HeartPulse />,
      title: "Comprehensive Healthcare",
    },
    {
      icon: <Clock />,
      title: "Flexible Work Arrangements",
    },
    {
      icon: <CodeXml />,
      title: "Professional Development",
    },
    {
      icon: <UserCircle />,
      title: "Mental Health Support",
    },
    {
      icon: <Users />,
      title: "Team Events & Activities",
    },
  ];

  const whyUs = [
    {
      prefix:
        "Work on transformative projects that help businesses scale and innovate.",
      highlight: "Impact-Driven Projects:",
    },
    {
      prefix:
        "Continuous learning through workshops, certifications, and mentorship.",
      highlight: "Learning & Growth:",
    },
    {
      prefix:
        "Join a team that values diverse perspectives, open communication, and teamwork.",
      highlight: "Collaborative Culture:",
    },
    {
      prefix:
        "Be at the forefront of AI, cloud computing, and digital strategy.",
      highlight: "Cutting-Edge Technologies:",
    },
    {
      prefix: "Flexible work environments that prioritize your well-being.",
      highlight: "Work-Life Balance:",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div
        className="min-h-[20rem] md:h-[22rem] bg-cover bg-center flex justify-start items-center px-4 md:px-8 lg:px-16 relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1638864616271-04a85f133205?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        <div className="relative z-10 w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
            Join the Growth Grid Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-afacad">
            Where Innovation Meets Opportunity
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 py-8 md:py-16">
        <h1 className="text-2xl md:text-5xl text-[#D77914] font-poppins font-semibold">
          {`Join Our Mission `}
          <br />
          {`To Drive Digital Transformation`}
        </h1>
        <p className="mt-4 leading-1 font-afacad text-xl md:text-2xl text-justify">
          {`At Growth Grid, we empower businesses to thrive by delivering cutting-edge digital solutions across industries. Our team is driven by innovation, data-driven insights, and a passion for solving complex challenges. We’re looking for dynamic individuals who are ready to make a difference.`}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:gap-8 md:mt-12 px-4 md:mx-0">
        <div className="">
          <h2 className="text-2xl md:text-4xl text-[#D77914] font-bold font-poppins">
            Why Work with Us?
          </h2>
          <p className="text-black md:mt-4 text-lg sm:text-xl md:text-2xl font-afacad">
            {`When you choose Growth Grid, you will find: `}
          </p>
        </div>
        <div className="mx-auto max-w-2xl md:px-4 md:py-0 py-6 font-afacad">
          <ul className="space-y-5 md:space-y-7">
            {whyUs.map((item, index) => (
              <li key={index} className="flex">
                {/* Checkbox container - fixed width on mobile */}
                <div className="flex-shrink-0 mt-1">
                  <span className="bg-[#4F1C51] rounded-full w-4 h-4 md:w-6 md:h-6 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 md:w-4 md:h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                {/* Text content - with wrapping capabilities */}
                <div className="ml-3 text-base md:text-lg lg:text-[22px] text-gray-900 tracking-wide leading-tight">
                  <span className="text-[#4F1C51] font-bold">
                    {item.highlight}
                  </span>
                  {item.prefix && <span>{item.prefix} </span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>

      </div>
        <div className="bg-[#4F1C51] w-[60dvw] mt-8 md:mt-16 mx-auto h-[2px]"/>

      {/* Benefits Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#D77914] font-poppins">
            Perks & Benefits
          </h2>
          <div className="grid grid-cols-2 md:gap-x-20 md:gap-y-10 gap-x-3 gap-y-2 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-3 md:p-6 bg-[#4F1C51] gap-6 rounded-lg border border-gray-200"
              >
                <div className="text-white bg-white/30 w-max p-4 rounded-md">
                  {benefit.icon}
                </div>
                <div className="text-white font-afacad text-md md:text-2xl">
                  {benefit.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#4F1C51] w-[60dvw] mx-auto h-[3px] my-8"/>

      {/* Life at GrowthGrid */}
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <h1 className="text-3xl font-bold font-poppins text-[#D77914]">
          Life at Growth Grid
        </h1>
        <p className="text-lg max-w-3xl md:text-2xl font-afacad">
          {`Innovate. Collaborate. Grow. At Growth Grid, we foster a culture where ideas are celebrated, challenges are embraced, and everyone has the opportunity to excel.`}
        </p>

        <div className="relative w-full max-w-3xl mx-auto my-12 p-4 bg-[#4F1C51] text-white rounded-lg overflow-hidden">
          <h1 className="text-lg md:text-xl font-bold font-poppins tracking-wide">
            Team Testimonials
          </h1>
          <div className="relative h-40">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 font-afacad left-0 w-full h-full p-8 transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <blockquote className="text-xl italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="relative justify-end flex text-lg md:text-xl">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#4F1C51]" : "bg-[#D77914]"
              }`}
            />
          ))}
        </div>
        <div className="h-[2px] w-[60dvw] bg-[#4F1C51] mx-auto mt-12 md:mt-20" />
      </div>

      {/* Open Positions */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl text-[#4F1C51] font-bold font-poppins text-center mb-8 md:mb-12">
            Open Positions
          </h2>

          <div className="max-w-4xl grid grid-cols-2 gap-4 md:gap-8 items-center mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg border-2 border-gray-300 hover:border-b-[6px] transition-all hover:border-[#4F1C51] flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6"
              >
                <div className="space-y-2">
                  <h3 className="text-sm md:text-xl font-semibold font-poppins">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-lg font-bold text-gray-600 font-afacad">
                    <span className="">{position.department}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{position.location}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{position.type}</span>
                  </div>
                  <button className="flex items-center justify-center gap-2 text-[#4F1C51] w-full md:w-auto font-poppins text-xs md:text-sm font-bold">
                    Learn More
                    <ArrowUpRight className="md:w-4 md:h-4 h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
