import { useState } from "react";
import Button from "../../components/PrimaryBtn";

export default function Activation4() {
    const [promoOptIn, setPromoOptIn] = useState(true);
    const [phoneType, setPhoneType] = useState("mobile");
    const [livedOverYear, setLivedOverYear] = useState("yes");
    const [sameAsService, setSameAsService] = useState(false);
    const [paperless, setPaperless] = useState(false);
    const [autoPay, setAutoPay] = useState("no");

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

                        <h2 className="text-lg font-semibold text-gray-900 mb-6">
                            Contact & Billing Info
                        </h2>

                        {/* Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="First Name" value="John" />
                            <InputField label="Last Name" value="Smith" />
                        </div>

                        {/* Phone */}
                        <div className="mt-4">
                            <InputField label="Contact Phone" value="213-555-5555" />
                        </div>

                        {/* Phone Type */}
                        <div className="mt-6">
                            <p className="text-sm font-medium text-gray-700 mb-2">
                                Phone Type
                            </p>

                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={phoneType === "mobile"}
                                        onChange={() => setPhoneType("mobile")}
                                        className="accent-(--primary-color)"
                                    />
                                    <span className="text-sm text-gray-700">Mobile</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={phoneType === "home"}
                                        onChange={() => setPhoneType("home")}
                                        className="accent-(--primary-color)"
                                    />
                                    <span className="text-sm text-gray-700">Home</span>
                                </label>
                            </div>
                        </div>

                        {/* Opt-in */}
                        <div className="mt-6 space-y-2">
                            <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={promoOptIn}
                                    onChange={() => setPromoOptIn(!promoOptIn)}
                                    className="mt-1 accent-(--primary-color)"
                                />
                                Opt in to receive promotional text messages.
                            </label>

                            <p className="text-xs text-gray-400 leading-relaxed">
                                By opting in, you agree to receive recurring automated promotional messages...
                            </p>
                        </div>

                        {/* Emails + DOB */}
                        <div className="mt-6 space-y-4">
                            <InputField label="Email address" placeholder="Email address" />
                            <InputField label="Confirm Email address" placeholder="Confirm Email address" />
                            <InputField label="Date of Birth" placeholder="Date of Birth" />
                        </div>

                        {/* Address duration */}
                        <div className="mt-6">
                            <p className="text-sm font-medium text-gray-700 mb-2">
                                Have you lived at this address for over a year?
                            </p>

                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={livedOverYear === "yes"}
                                        onChange={() => setLivedOverYear("yes")}
                                        className="accent-(--primary-color)"
                                    />
                                    <span className="text-sm text-gray-700">Yes</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={livedOverYear === "no"}
                                        onChange={() => setLivedOverYear("no")}
                                        className="accent-(--primary-color)"
                                    />
                                    <span className="text-sm text-gray-700">No</span>
                                </label>
                            </div>
                        </div>

                        {/* Billing + Paperless */}
                        <div className="mt-8 space-y-5">

                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">
                                    Billing Address
                                </p>

                                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={sameAsService}
                                        onChange={() => setSameAsService(!sameAsService)}
                                        className="accent-(--primary-color)"
                                    />
                                    Same as service address
                                </label>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">
                                    Paperless Billing
                                </p>

                                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={paperless}
                                        onChange={() => setPaperless(!paperless)}
                                        className="accent-(--primary-color)"
                                    />
                                    Receive email notifications when your monthly statement is ready
                                </label>
                            </div>

                            {/* Auto Pay */}
                            <div>
                                <p className="text-sm font-medium text-gray-700">
                                    Enroll in Auto Pay
                                </p>

                                <p className="text-sm w-120 text-gray-400 leading-relaxed mb-2">
                                    Save time and never miss a payment with Auto Pay. Payment preferences can be modified at any time in the My Uni-Movil App.
                                </p>

                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={autoPay === "yes"}
                                            onChange={() => setAutoPay("yes")}
                                            className="accent-(--primary-color)"
                                        />
                                        <span className="text-sm text-gray-700">Yes</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={autoPay === "no"}
                                            onChange={() => setAutoPay("no")}
                                            className="accent-(--primary-color)"
                                        />
                                        <span className="text-sm text-gray-700">No</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* ================= NEW CONTENT ADDED AT END ================= */}

                        {/* Auto Pay Message */}
                        <div className="mt-10 p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-2">
                            <p className="text-sm font-medium text-gray-700">
                                Please read the following message to the customer:
                            </p>

                            <p className="text-sm text-gray-600">
                                <span className="font-medium">[Customer's preferred name]</span>, setting up Auto Pay can make managing your payments much easier. Before we move forward, let me share some key details with you:
                            </p>

                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                <li>You are authorizing Uni-Movil to draft the total amount from your credit or debit card each month.</li>
                                <li>If your card changes or expires, it’s your responsibility to update the information with us.</li>
                                <li>There may be fees up to $25.00 for returned unpaid payments.</li>
                                <li>The total amount will be drafted on each billing due date, starting with the next one.</li>
                                <li>This agreement is both non-negotiable and non-transferable.</li>
                            </ul>

                            {/* UPDATED LAST LINE -> CHECKBOX */}
                            <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer pt-2">
                                <input
                                    type="checkbox"
                                    className="accent-(--primary-color)"
                                />
                                I have effectively communicated to the customer.
                            </label>
                        </div>

                        <div className="mt-10 p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-2">
                            <p className="text-sm font-medium text-gray-700">
                                Additional Authorized Contacts
                            </p>

                            <p className="text-sm text-gray-600">
                                Although at least one fully authorized user is required, you can add up to four, allowing them to:
                            </p>

                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                <li>Disconnect or change the service level of any line of business</li>
                                <li>Change voice service feature settings</li>
                                <li>Port a number</li>
                                <li>Perform WiFi password changes</li>
                                <li>Obtain account balance information</li>
                                <li>Seasonal Service Plan address changes</li>
                                <li>Change or capture the contact email on new or existing service</li>
                                <li>Create and set permissions for standard or admin email addresses</li>
                            </ul>
                        </div>

                        {/* Additional Authorized Contacts */}
                        <div className="mt-8 space-y-3">
                            <InputField label="Authorized Contact" value="John Smith" />

                            <div className="flex gap-3">
                                <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
                                    ADD CONTACT
                                </button>
                                <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
                                    REMOVE CONTACT
                                </button>
                            </div>
                        </div>

                        {/* Agent Info */}
                        <div className="mt-8 space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900">
                                Agent Information
                            </h3>

                            <InputField label="Email address" placeholder="Email address" />
                            <InputField label="Confirm Email address" placeholder="Confirm Email Address" />
                            <InputField label="Assistant Agent Name" placeholder="Assistant Agent Name" />
                        </div>

                        {/* Installation */}
                        <div className="mt-8 space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900">
                                Installation
                            </h3>

                            <label className="flex items-start gap-3 p-4 border rounded-lg border-gray-300">
                                <input type="radio" name="install" defaultChecked className="mt-1 accent-(--primary-color)" />
                                <div>
                                    <p className="text-sm font-medium">SELF-INSTALLATION KIT (Selected)</p>
                                    <p className="text-xs text-gray-500">Deliver to customer</p>
                                    <p className="text-xs text-gray-500">Estimated Delivery: Change estimated delivery date</p>
                                    <p className="text-xs font-medium">$30.00 / one-time charge</p>
                                </div>
                            </label>

                            <label className="flex items-start gap-3 p-4 border rounded-lg border-gray-300">
                                <input type="radio" name="install" className="mt-1 accent-(--primary-color)" />
                                <div>
                                    <p className="text-sm font-medium">SELF-INSTALLATION KIT</p>
                                    <p className="text-xs text-gray-500">Self Installation - Store Pickup</p>
                                    <p className="text-xs font-medium">$30.00 / one-time charge</p>
                                </div>
                            </label>

                            <p className="text-xs text-gray-400 leading-relaxed">
                                For Self-Install orders that have not yet activated service, billing begins when service is activated or after eight days after shipping—whichever comes first. Self-installation is required for Apple TV.
                            </p>
                        </div>
                        <Button text="Continue" to="/activation-5" className="mt-4" />
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

/* ---------- INPUT FIELD (your version improved usage) ---------- */

function InputField({
    label,
    error,
    type = "text",
    value,
    onChange,
    placeholder,
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full h-11 px-3 rounded-md text-sm border outline-none transition bg-white
                ${error
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-(--primary-color) focus:ring-2 focus:ring-sky-100"
                    }`}
            />

            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
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