import { useState } from "react";
import Button from "../../components/PrimaryBtn";
import BroadbandModal from "../../components/popup/BroadbandModal";


export default function Activation5() {
    const [open, setOpen] = useState(false);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Review Order</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                Contact
                            </h2>

                            <p>Jhon</p>
                            <p>000-000-000</p>
                            <p>Jhon@gmailcom</p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                Installation
                            </h2>

                            <p>Self-Installation</p>
                            <p>
                                The customer has selected self-installation. The self-installation kit has an estimated delivery date of October 1st, 2025.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                Broadband Label
                            </h2>

                            <p className="text-sm">
                                Access and email Broadband Label information to customers upon request.{" "}
                                <span
                                    onClick={() => setOpen(true)}
                                    className="text-blue-600 underline cursor-pointer hover:text-blue-800"
                                >
                                    View
                                </span>
                            </p>
                            <BroadbandModal isOpen={open} onClose={() => setOpen(false)} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                Order Review Recap
                            </h2>

                            <p>Please read the following message to customer:</p>
                            <p>
                                You will receive an email confirmation of your services but I would also like to recap our conversation today to ensure I have everything correct.
                            </p>
                            <p>
                                You will be receiving Internet Gig for the promotional rate of $70.00, additional taxes and fee apply, and will expire in 12 months from the install date of the self or professional installation activation date or eight days after receipt of your Uni-Movil equipment, whichever comes first. Your first monthly statement will also include an installation and/or activation fee of $73.47.
                            </p>
                        </div>

                        {/* TERMS OF SERVICE */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                Terms of Service
                            </h2>

                            <div className="flex items-start gap-2 mb-2">
                                <input type="checkbox" className="mt-1" />
                                <p className="text-sm">
                                    By checking this box, I agree to the following terms of service
                                </p>
                            </div>

                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>
                                    I am 18 years of age or older and agree to purchase the equipment and/or services described in the order.
                                </li>
                                <li>
                                    I agree to Charter's Electronic Records & Consent Disclosure
                                </li>
                                <li>
                                    I acknowledge receipt of Charter's Privacy Policy.
                                </li>
                                <li>
                                    I agree to Uni-Movil Internet Acceptable Use Policy, Uni-Movil Residential Internet Services Agreement, Uni-Movil Residential General Terms and Conditions of Service, Residential Customer Guarantees, and Age Consent.
                                </li>
                                <li>
                                    I agree to the Self Installation Agreement.
                                </li>
                                <li>
                                    If I do not make a payment today, I understand and agree that I will be billed for the applicable services and equipment described in this order upon activation.
                                </li>
                                <li>
                                    I understand and agree that estimated taxes and government fees are included. Final taxes and fees will be calculated once the order is placed and account is set up.
                                </li>
                            </ul>
                        </div>
                        <Button text="Continue" to="/" />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 space-y-5 h-fit sticky top-20">
                    <div className="bg-(--primary-color) text-white px-3 py-2 rounded-md font-semibold text-sm">
                        MONTHLY HOME SERVICES
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium text-gray-900">Internet</p>

                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Uni-Movil Internet Gig</span>
                            <span className="text-gray-900">$70.00</span>
                        </div>

                        <p className="text-xs text-gray-400">
                            Discount of $30.00 for 12 months
                        </p>

                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Advanced WiFi</span>
                            <span className="text-gray-900">Included</span>
                        </div>
                    </div>

                    <div className="bg-(--primary-color) text-white px-3 py-2 rounded-md font-semibold text-sm">
                        ONE-TIME CHARGES
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Professional Installation</span>
                        <span className="text-gray-900">Included</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                        <SummaryRow label="Est. Monthly Home Services" value="$70.00" />
                        <SummaryRow label="Est. Monthly Total" value="$70.00" bold />
                        <SummaryRow label="Est. Initial Payment" value="$70.00" bold />
                    </div>

                    <p className="text-xs text-gray-400">
                        Additional taxes and fees apply.
                    </p>
                </div>
            </div>
        </div>
    );
}


/* ---------- SUMMARY ---------- */

function SummaryRow({ label, value, bold }) {
    return (
        <div
            className={`flex justify-between text-sm ${bold ? "font-semibold text-gray-900" : "text-gray-600"
                }`}
        >
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}