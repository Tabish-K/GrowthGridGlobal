"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HorizontallyScrollableBrands from "./HorizontallyScrollableBrands";
import {
  Factory,
  Plane,
  Car,
  Banknote,
  ArrowLeft,
  MoveRight,
  MoveLeft,
  CreditCard,
  LineChart,
  Globe,
  Settings,
  Lightbulb,
  Shuffle,
  TrendingUp,
  BarChart3,
  Users,
  RefreshCw,
  Megaphone,
  Building2,
  Building,
  School,
  HeartPulse,
  ShoppingCart,
  Laptop,
} from "lucide-react";

// Define the type for industry objects
interface Industry {
  id: any;
  icon: JSX.Element;
  label: string;
}

interface BusinessNeeds {
  id: any;
  icon: JSX.Element;
  label: string;
}

const Solutions: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedNeed, setSelectedNeed] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllNeeds, setShowAllNeeds] = useState(false);

  const industries: Industry[] = [
    { id: 1, icon: <Laptop size={20} />, label: "Technology" }, // Tech-related
    { id: 2, icon: <ShoppingCart size={20} />, label: "E-Commerce" }, // Shopping-related
    { id: 3, icon: <HeartPulse size={20} />, label: "Healthcare" }, // Medical/Health
    { id: 4, icon: <Banknote size={20} />, label: "Financial Services" }, // Finance/Banking
    { id: 5, icon: <Factory size={20} />, label: "Manufacturing" }, // Industrial/Production
    { id: 6, icon: <School size={20} />, label: "Education" }, // Learning/Education
    { id: 7, icon: <Building size={20} />, label: "Real Estate" }, // Property/Infrastructure
    { id: 8, icon: <Plane size={20} />, label: "Travel & Hospitality" }, // Travel/Tourism
    { id: 9, icon: <Car size={20} />, label: "Automotive" }, // Vehicles/Cars
  ];

  const businessNeeds: BusinessNeeds[] = [
    { id: 1, icon: <LineChart size={20} />, label: "Digital Strategy" }, // Strategy-related
    { id: 2, icon: <CreditCard size={20} />, label: "Cost Reduction" }, // Finance-related
    { id: 3, icon: <Globe size={20} />, label: "Market Expansion" }, // Global expansion
    { id: 4, icon: <Settings size={20} />, label: "Operations" }, // Process/Operations
    { id: 5, icon: <Lightbulb size={20} />, label: "Innovation" }, // Creativity/Innovation
    { id: 6, icon: <Shuffle size={20} />, label: "Change Management" }, // Change/Adaptability
    { id: 7, icon: <TrendingUp size={20} />, label: "Revenue Growth" }, // Business Growth
    { id: 8, icon: <BarChart3 size={20} />, label: "Data Analytics" }, // Data/Reports
    { id: 9, icon: <Users size={20} />, label: "Customer Experience" }, // User/Customer-focused
    { id: 10, icon: <RefreshCw size={20} />, label: "Transformation" }, // Business transformation
    { id: 11, icon: <Megaphone size={20} />, label: "Sales & Marketing" }, // Marketing/Promotion
    { id: 12, icon: <Building2 size={20} />, label: "Organization" }, // Business Structure
  ];

  // Initial limited options
  const initialIndustries = industries.slice(0, 8);
  const initialNeeds = businessNeeds.slice(0, 6);

  const handleNext = () => {
    if (currentQuestion === 1 && selectedIndustry) {
      setCurrentQuestion(2);
    } else if (currentQuestion === 2 && selectedNeed) {
      console.log("Selected Industry:", selectedIndustry);
      console.log("Selected Need:", selectedNeed);
    }
  };

  const handleBack = () => {
    if (showAllIndustries) {
      setShowAllIndustries(false);
    } else if (showAllNeeds) {
      setShowAllNeeds(false);
    } else if (currentQuestion === 2) {
      setCurrentQuestion(1);
    }
  };

  const renderQuestionSection = () => {
    if (showAllIndustries) {
      return (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800">
              All Industries
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 w-full max-w-xl">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => {
                  setSelectedIndustry(industry.id);
                  setShowAllIndustries(false);
                }}
                className={`flex items-center justify-center gap-2 px-4 py-2 border border-black rounded-full font-medium transition-all duration-200
                              ${
                                selectedIndustry === industry.id
                                  ? "text-[#FFFFFF] bg-[#D77914]"
                                  : "text-gray-800"
                              }
                              `}
              >
                {industry.icon} {industry.label}
              </button>
            ))}
          </div>
          <div className="flex w-full justify-between">
            <input
              type="text"
              placeholder="Enter Your Industry Here"
              className="border-b-[2px] placeholder-gray-600 border-gray-400 px-4 bg-red-50 w-full outline-none"
            />
            <button className="uppercase rounded-full bg-[#D77914] text-white px-10 py-3 text-sm">
              Submit
            </button>
          </div>
        </div>
      );
    }

    if (showAllNeeds) {
      return (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-black">
              All Business Needs
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 w-full max-w-xl">
            {businessNeeds.map((need) => (
              <button
                key={need.id}
                onClick={() => {
                  setSelectedNeed(need.id);
                  setShowAllNeeds(false);
                }}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full border-black border font-medium transition-all duration-200
                              ${
                                selectedNeed === need.id
                                  ? "text-[#FFFFFF] bg-[#D77914]"
                                  : "text-gray-800"
                              }
                          `}
              >
                {need.icon} {need.label}
              </button>
            ))}
          </div>
          <div className="flex w-full justify-between">
            <input
              type="text"
              placeholder="Enter Your Needs Here"
              className="border-b-[2px] placeholder-gray-600 border-gray-400 px-4 bg-red-50 w-full outline-none"
            />
            <button className="uppercase bg-[#D77914] text-white px-10 rounded-full py-3 text-sm">
              Submit
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {currentQuestion === 1 ? (
          <>
            <div className="flex items-center flex-col md:flex-row gap-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-black font-poppins">
                <span className="text-[#D77914] mr-2">1.</span>What is your
                industry?
              </h2>
              {/* Progress Indicator */}
              {!showAllIndustries && !showAllNeeds && (
                <div className="flex items-center space-x-2 text-md md:text-lg text-gray-600 font-afacad">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      currentQuestion >= 1 ? "bg-[#D77914]" : "bg-gray-300"
                    }`}
                  />
                  <div
                    className={`h-2 w-2 rounded-full ${
                      currentQuestion >= 2 ? "bg-[#D77914]" : "bg-gray-300"
                    }`}
                  />
                  <span className="ml-2 text-gray-500">
                    Question {currentQuestion} of 2
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-3 w-full max-w-xl">
              {initialIndustries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-black font-medium transition-all duration-200
                              ${
                                selectedIndustry === industry.id
                                  ? "text-[#FFFFFF] bg-[#D77914]"
                                  : "text-gray-800"
                              }
                              `}
                >
                  {industry.icon} {industry.label}
                </button>
              ))}
              <button
                onClick={() => setShowAllIndustries(true)}
                className="flex items-center justify-center text-[#4F1C51] underline font-afacad text-xl gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200"
              >
                View All Industries
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <h2 className="text-xl md:text-3xl font-semibold text-black font-poppins">
                <span className="text-[#D77914] text-2xl md:text-3xl mr-2">
                  2.
                </span>
                What is your business need?
              </h2>
              {/* Progress Indicator */}
              {!showAllIndustries && !showAllNeeds && (
                <div className="flex items-center space-x-2 font-afacad text-md md:text-large text-gray-600">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      currentQuestion >= 1 ? "bg-[#D77914]" : "bg-gray-300"
                    }`}
                  />
                  <div
                    className={`h-2 w-2 rounded-full ${
                      currentQuestion >= 2 ? "bg-[#D77914]" : "bg-gray-300"
                    }`}
                  />
                  <span className="ml-2 text-gray-500">
                    Question {currentQuestion} of 2
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-3 w-full max-w-xl font-afacad">
              {initialNeeds.map((need) => (
                <button
                  key={need.id}
                  onClick={() => setSelectedNeed(need.id)}
                  className={`flex items-center justify-center text-md md:text-lg gap-2 px-4 py-2 rounded-full border border-black font-medium transition-all duration-200
                              ${
                                selectedNeed === need.id
                                  ? "border-[#D77914] text-[#FFFFFF] bg-[#D77914]"
                                  : "text-gray-800"
                              }
                              `}
                >
                  {need.icon} {need.label}
                </button>
              ))}
              <button
                onClick={() => setShowAllNeeds(true)}
                className="flex items-center text-[#4F1C51] underline text-xl justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200"
              >
                View All Needs
              </button>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          {currentQuestion === 2 && !showAllNeeds && (
            <button
              onClick={handleBack}
              className="px-8 flex items-center gap-2 py-3 font-medium border rounded-full border-gray-300 hover:border-[#D77914] hover:text-[#D77914] transition-colors"
            >
              <MoveLeft /> Back
            </button>
          )}
          {!showAllIndustries && !showAllNeeds && (
            <button
              disabled={
                currentQuestion === 1 ? !selectedIndustry : !selectedNeed
              }
              className="bg-[#D77914] text-white px-8 py-3 font-medium rounded-full hover:bg-[#D77914]/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {currentQuestion === 1 ? (
                <span onClick={handleNext} className="flex items-center gap-2">
                  Next Question <MoveRight />
                </span>
              ) : (
                <Link href="explore" className="flex items-center gap-2">
                  Submit <MoveRight />
                </Link>
              )}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white w-full py-8 md:pt-12 md:pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center md:mb-16 mb-6">
          <h1 className="text-[26px] md:text-6xl capitalize relative md:mb-4 font-poppins">
            <span className="text-[#4F1C51] font-extrabold">
              Trusted by brands across{" "}
            </span>
            <span className="text-[#D77914] font-extrabold">12+ countries</span>
          </h1>
          <p className="text-lg md:text-3xl tracking-wider font-afacad text-justify px-3 md:text-center md:px-0">
            {`Empowering businesses with AI automation solutions, business process automation, and digital transformation consulting to drive measurable growth.`}
          </p>
        </div>
      </div>

      {/* AutoScrollableBrands - Full Width */}
      <div className="w-full">
        <HorizontallyScrollableBrands />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8">
        {/* Left Column - Form */}
        <div className="md:w-1/2 px-4">
          {/* Header Content */}
          {!showAllIndustries && !showAllNeeds && (
            <div className="mb-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-poppins">
                {`What's Your Business Challenge?`}
              </h1>
              <p className="text-xl md:text-2xl text-black leading-relaxed font-afacad">
                {`Answer two questions and put our thinking to work on your
                                    unique business challenges.`}
              </p>
            </div>
          )}
          {/* Questions Container */}
          <div className="hidden lg:block">{renderQuestionSection()}</div>

          {/* Mobile Questions Container */}
          <div className="lg:hidden">{renderQuestionSection()}</div>
        </div>

        {/* Right Column - Image */}
        {/* Right Image - Hide when showing all options */}
        {!showAllIndustries && !showAllNeeds && (
          <div className="md:w-1/2">
            <div className="md:rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/meeting-desk-chair.jpg"
                alt="Modern conference room with chairs and a desk"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solutions;
