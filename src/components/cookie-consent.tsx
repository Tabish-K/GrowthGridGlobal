"use client";

import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import CookieIcon from "./cookie-icon";

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem("cookie_consent");

        // If no choice has been made, show the consent banner after a short delay
        if (!cookieConsent) {
        const timer = setTimeout(() => {
            setShowConsent(true);
        }, 1000);

        return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setShowConsent(false);
        toast({
        title: "Cookies accepted",
        description: "Your preferences have been saved",
        duration: 3000,
        });
    };

    const handleReject = () => {
        localStorage.setItem("cookie_consent", "rejected");
        setShowConsent(false);
        toast({
        title: "Cookies rejected",
        description: "Only essential cookies will be used",
        duration: 3000,
        });
    };

    if (!showConsent) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 md:pb-6">
        <div className="transform transition-all duration-500 ease-in-out translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-10">
            <div className="max-w-xl mx-auto bg-white/70 backdrop-blur backdrop-saturate-150 rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6">
                <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5 hidden sm:block">
                    <CookieIcon className="h-10 w-10 text-[#4F1C51]" />
                </div>
                <div className="ml-3 flex-1">
                    <h3 className="text-lg font-medium text-gray-900 font-poppins">
                    Cookie Consent
                    </h3>
                    <p className="mt-1 text-sm sm:text-md text-gray-700 font-afacad">
                    {`We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies.`}
                    </p>
                    <div className="mt-4 font-afacad flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                    <button
                        onClick={handleAccept}
                        className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4F1C51] hover:bg-[#4F1C51]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#] transition-colors duration-200"
                    >
                        <Check className="mr-2 h-4 w-4" />
                        Accept All
                    </button>
                    <button
                        onClick={handleReject}
                        className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F1C51] transition-colors duration-200"
                    >
                        <X className="mr-2 h-4 w-4" />
                        Reject Non-Essential
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CookieConsent;
