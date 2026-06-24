import { Home, User, Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/PrimaryBtn";

export default function Receipt() {
    return (
        <div className="flex items-center justify-center p-4">

            <div className="w-full max-w-105 rounded-2xl shadow-md p-5">

                {/* HEADER */}
                <h2 className="text-center text-xl font-bold mb-6">
                    Activation Details
                </h2>

                {/* ORDER SUMMARY */}
                <div className="space-y-2 text-sm">

                    <SectionTitle>Order Summary</SectionTitle>

                    <div className="flex items-start gap-2">
                        <img src="/assets/plan-img.png" className="w-10 h-10 rounded" />
                        <div>
                            <p className="font-semibold">$45 Premium Plan</p>
                            <p className="text-xs text-gray-500">
                                3 Month Value And Convenience{" "}
                                <span className="text-green-500 font-semibold">
                                    30% OFF Save 40.50
                                </span>
                            </p>
                        </div>
                    </div>

                    <Row label="Order ID" value="8124120wefh3" />
                    <Row label="Transaction Date" value="17/11/2025" />
                    <Row label="Transaction Time" value="7:30:42 PM" />
                </div>

                {/* CONTACT */}
                <div className="mt-5">
                    <SectionTitle>Contact Information</SectionTitle>

                    <div className="space-y-2 text-sm text-gray-700">

                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>Carlos Fonte</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>(786) 484-8484</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>Carlos@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>7500 NW 25 ST MIAMI FL 33122</span>
                        </div>
                    </div>
                </div>

                {/* PRODUCT */}
                <div className="mt-5">
                    <SectionTitle>Product Details</SectionTitle>

                    <div className="flex justify-between items-start">
                        <div className="space-y-1 text-sm">
                            <p className="font-medium">
                                Activation Date:
                            </p>
                            <p className="font-semibold">17/11/2025</p>
                        </div>

                        {/* QR */}
                        <div className="text-center">
                            <img
                                src="/assets/qr-code.png"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                </div>

                {/* PAYMENT */}
                <div className="mt-5">
                    <SectionTitle>Payment Details</SectionTitle>

                    <div className="space-y-2 text-sm">

                        <Row label="Subtotal" value="$135.00" />
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                                30% OFF
                            </span>
                        </div>

                        <Row label="Tax" value="$3.19" />
                        <Row label="Service Charge" value="$0.00" />
                    </div>

                    {/* TOTAL */}
                    <div className="flex justify-between items-center mt-4 pt-3 border-t">
                        <span className="font-bold">Total</span>
                        <span className="text-green-600 font-bold text-lg">
                            $97.69
                        </span>
                    </div>
                </div>

                {/* BUTTON */}
                <Button className="mt-4" text="Back to Home" to="/" />
            </div>
        </div>
    );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function SectionTitle({ children }) {
    return (
        <h3 className="font-bold text-sm mb-2 text-gray-900">
            {children}
        </h3>
    );
}

function Row({ label, value }) {
    return (
        <div className="flex justify-between text-gray-700">
            <span>{label}:</span>
            <span className="font-medium">{value}</span>
        </div>
    );
}