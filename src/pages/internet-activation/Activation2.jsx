import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/PrimaryBtn";

export default function Activation2() {
    const navigate = useNavigate();
    const timerRef = useRef(null);

    const [form, setForm] = useState({
        address: "",
        apt: "",
        zip: "",
        email: "",
        present: "yes",
    });

    const [errors, setErrors] = useState({});
    const [showFootprintPopup, setShowFootprintPopup] = useState(false);

    const handleChange = (key, value) => {
        let nextValue = value;

        if (key === "zip") {
            nextValue = value.replace(/\D/g, "").slice(0, 5);
        }

        setForm((prev) => ({
            ...prev,
            [key]: nextValue,
        }));

        setErrors((prev) => ({
            ...prev,
            [key]: "",
        }));
    };

    const validate = () => {
        const nextErrors = {};

        if (!form.address.trim()) {
            nextErrors.address = "Street address is required";
        }

        if (!/^\d{5}$/.test(form.zip)) {
            nextErrors.zip = "Enter a valid 5-digit ZIP code";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            nextErrors.email = "Enter a valid email address";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const showPopup = () => {
        console.log("showPopup called"); // Add this
        setShowFootprintPopup(true);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            console.log("hiding popup"); // Add this
            setShowFootprintPopup(false);
        }, 5000);
    };

    const handleSubmit = () => {
        const street = form.address.trim().toLowerCase();

        // ❗ FIRST: check if address is empty
        if (!street) {
            setErrors((prev) => ({
                ...prev,
                address: "Street address is required",
            }));
            return;
        }

        // ❗ DEV LOGIC: only "usa" is valid
        const isSpectrumEligible = street.includes("usa");

        // ❗ If NOT eligible → show popup (no validation block)
        if (!isSpectrumEligible) {
            showPopup();
            return;
        }

        // ❗ If eligible → then validate other fields
        if (!validate()) return;

        // Navigate if everything is good
        navigate("/activation-3", {
            state: {
                customerInfo: {
                    ...form,
                    address: form.address.trim(),
                    apt: form.apt.trim(),
                    zip: form.zip.trim(),
                    email: form.email.trim().toLowerCase(),
                },
            },
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            {showFootprintPopup && (
                <div className="fixed top-6 left-6 z-50 bg-white border border-gray-200 shadow-xl rounded-md w-[320px] p-5 animate-fadeIn">
                    <h3 className="text-[28px] font-light text-(--primary-color) mb-3">
                        Attention required
                    </h3>

                    <p className="text-xs text-gray-700 mb-3">
                        {form.address || "1712 N Washtenaw Ave"},{" "}
                        {form.apt || "Apt 2F"}, {form.zip || "60647"}
                    </p>

                    <p className="text-sm font-medium text-gray-900 mb-2">
                        Location not in Spectrum footprint
                    </p>

                    <p className="text-xs text-gray-500">
                        This address belongs to COMCAST
                    </p>
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="mb-7">
                    <h2 className="text-2xl font-semibold text-(--primary-color)">
                        GET STARTED
                    </h2>
                    <div className="mt-2 border-b border-gray-300" />
                </div>

                <div className="max-w-md">
                    <div className="mb-6">
                        <p className="text-base font-medium text-gray-800">
                            Customer Information
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Enter the customer’s address to get the most accurate information.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <InputField
                            label="Customer’s street address"
                            value={form.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            placeholder="7707 USA Street"
                            error={errors.address}
                        />

                        <InputField
                            label="Apt/unit"
                            value={form.apt}
                            onChange={(e) => handleChange("apt", e.target.value)}
                            placeholder="E204/51"
                        />

                        <InputField
                            label="ZIP Code"
                            value={form.zip}
                            onChange={(e) => handleChange("zip", e.target.value)}
                            placeholder="63123"
                            error={errors.zip}
                        />

                        <InputField
                            label="Agent Email"
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="salesperson@email.com"
                            error={errors.email}
                        />

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Is the customer present?
                            </label>

                            <div className="flex gap-6 text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={form.present === "yes"}
                                        onChange={() => handleChange("present", "yes")}
                                    />
                                    Yes
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={form.present === "no"}
                                        onChange={() => handleChange("present", "no")}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button type="button" onClick={handleSubmit} text="Continue" />
                    </div>
                </div>
            </div>
        </div>
    );
}

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
                className={`w-full h-11 px-3 rounded-md text-sm border outline-none transition ${error
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-300 focus:border-(--primary-color)"
                    }`}
            />

            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}