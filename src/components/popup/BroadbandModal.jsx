import React, { useRef } from "react";

export default function BroadbandModal({ isOpen, onClose }) {
    const modalRef = useRef();

    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2 sm:px-4"
            onClick={handleOutsideClick}
        >
            <div
                ref={modalRef}
                className="bg-white w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative"
            >
                {/* Close Button */}
                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* Header */}
                <div className="p-4 border-b">
                    <h2 className="text-lg sm:text-xl font-semibold">
                        Broadband Label
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-600 underline cursor-pointer mt-1">
                        Use the link to email these details upon customer request.
                    </p>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 border border-black m-3 sm:m-4">

                    <h1 className="text-xl sm:text-2xl font-bold border-b pb-2">
                        Broadband Facts
                    </h1>

                    <p className="mt-2 font-semibold text-sm sm:text-base">Spectrum</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                        Internet Gig Fixed Broadband Consumer Disclosure
                    </p>

                    {/* Pricing */}
                    <div className="mt-4 border-t pt-2">
                        <div className="flex justify-between font-semibold text-sm sm:text-base">
                            <span>Monthly Price</span>
                            <span>$70.00</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                            This is a 12 month introductory rate. The post-introductory rate is
                            $100 and subject to change. Modem and Advanced WiFi service included.
                        </p>
                    </div>

                    {/* Additional Charges */}
                    <div className="mt-4 border-t pt-2">
                        <h3 className="font-semibold text-sm sm:text-base">
                            Additional Charges & Terms
                        </h3>

                        <div className="flex justify-between text-xs sm:text-sm mt-1">
                            <span>Optional WiFi Service</span>
                            <span>$0.00</span>
                        </div>

                        <div className="mt-2 text-xs sm:text-sm space-y-1">
                            <div className="flex justify-between">
                                <span>Professional Install</span>
                                <span>$65.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Self-Install Activation</span>
                                <span>$30.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Late Fee</span>
                                <span>Up to $8.95</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2 text-xs sm:text-sm">
                            <span>Early Termination Fee</span>
                            <span>$0.00</span>
                        </div>

                        <div className="flex justify-between text-xs sm:text-sm">
                            <span>Government Taxes</span>
                            <span>Varies</span>
                        </div>
                    </div>

                    {/* Speeds */}
                    <div className="mt-4 border-t pt-2">
                        <h3 className="font-semibold text-sm sm:text-base">
                            Speeds Provided with Plan
                        </h3>
                        <div className="flex justify-between text-xs sm:text-sm">
                            <span>Typical Download Speed</span>
                            <span>1036 Mbps</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                            <span>Typical Upload Speed</span>
                            <span>40 Mbps</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                            <span>Typical Latency</span>
                            <span>22 ms</span>
                        </div>
                    </div>

                    {/* Data */}
                    <div className="mt-4 border-t pt-2">
                        <div className="flex justify-between font-semibold text-sm sm:text-base">
                            <span>Data Included with Monthly Price</span>
                            <span>Unlimited</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                            <span>Charges for Additional Data Usage</span>
                            <span>$0.00</span>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-4 border-t pt-2 text-xs sm:text-sm">
                        <p className="text-blue-600 underline cursor-pointer">
                            spectrum.com/nmnp
                        </p>
                        <p className="text-blue-600 underline cursor-pointer mt-1">
                            spectrum.com/privacy-policy
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}