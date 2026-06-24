import StepLayout from "./StepLayout";
import Button from "../../components/PrimaryBtn"
import { useState } from "react";
import { Info, ChevronDown, CheckCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Step1() {
    const location = useLocation();
    const selectedPlanData = location.state?.plan;
    const [imei, setImei] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);

    const [selectedPlan, setSelectedPlan] = useState("Select Your Plan");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [carrier, setCarrier] = useState(null);

    // IMEI Validation (basic 15 digit check)
    const handleCheckIMEI = () => {
        if (!/^\d{15}$/.test(imei)) {
            setError("IMEI must be exactly 15 digits");
            setIsValid(false);
        } else {
            setError("");
            setIsValid(true);
        }
    };

    return (
        <StepLayout title="Activate your Device" step={1}>
            <div className="flex gap-4 max-md:flex-col lg:items-start">

                {/* LEFT CARD */}
                <div className="flex p-6 bg-(--primary-color) flex-col items-center max-w-75 mx-auto shadow-2xl rounded-2xl">
                    <img
                        src={selectedPlanData?.img || "/assets/plan-img.png"}
                        alt=""
                    />

                    <h3 className="font-bold pt-4 text-2xl text-center text-white">
                        {selectedPlanData
                            ? `${selectedPlanData.type} ${selectedPlanData.gb}`
                            : "Select a Plan"}
                    </h3>

                    <p className="text-white mt-2">
                        {selectedPlanData?.currency}
                        {selectedPlanData?.price}/month
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col lg:w-155 w-full gap-4">

                    <p className="font-bold sm:text-xl text-lg">
                        Check your Device Compatibility
                    </p>

                    {/* IMEI */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1">
                            Enter your IMEI number
                            <Info size={16} className="text-blue-500 cursor-pointer" />
                        </div>

                        <div className="flex sm:flex-row flex-col gap-2">
                            <input
                                type="text"
                                value={imei}
                                onChange={(e) => setImei(e.target.value)}
                                placeholder="Enter IMEI"
                                className="flex-1 rounded-md px-3 py-3 bg-gray-100 outline-none"
                            />

                            <div className="flex gap-2 max-sm:w-full">
                                <button
                                    onClick={handleCheckIMEI}
                                    className="bg-(--primary-color) hover:bg-black text-white px-4 py-2 rounded-[10px] w-full"
                                >
                                    Check
                                </button>
                                <button
                                    onClick={() => {
                                        setError("");
                                        setIsValid(true);
                                    }}
                                    className="bg-(--primary-color) hover:bg-black text-white px-4 py-2 rounded-[10px] w-full"
                                >
                                    Skip
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                    </div>

                    {/* SUCCESS MESSAGE */}
                    {isValid && (
                        <div>
                            <h2 className="text-(--primary-color) text-2xl font-bold flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} />
                                Great News!
                            </h2>
                            <p className="text-sm">
                                Your Device is eSIM Compatible{" "}
                                <span className="font-bold">{imei || "IMEI"}</span>.
                                You’ll receive your new number and eSIM QR code after checkout.
                            </p>
                        </div>
                    )}

                    {/* CARRIERS */}
                    <div>
                        <h4 className="text-sm font-bold mb-2">Select Your Carrier</h4>
                        <div className="flex items-center gap-4">
                            {[
                                { name: "att", img: "/assets/att.png", color: "#00A8E0" },
                                { name: "tmobile", img: "/assets/t-mobile.png", color: "#E00F84" },
                                { name: "verizon", img: "/assets/verizon.png", color: "#C60502" },
                            ].map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => setCarrier(item.name)}
                                    className={`border-2 px-4 h-10 flex items-center rounded-md cursor-pointer transition
                                    ${carrier === item.name ? "scale-105 bg-gray-50" : ""}
                                    `}
                                    style={{
                                        borderColor: carrier === item.name ? item.color : "#ddd",
                                    }}
                                >
                                    <img src={item.img} className="w-14" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DROPDOWN */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full px-4 py-3 bg-gray-100 rounded-lg flex justify-between items-center"
                        >
                            <span>{selectedPlan}</span>
                            <ChevronDown
                                className={`transition ${dropdownOpen ? "rotate-180" : ""}`}
                                size={18}
                            />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute w-full mt-2 bg-white border border-gray-300 p-2 rounded-lg shadow-lg z-10">
                                {[
                                    "1 Month best for trying it out",
                                    "2 Month great short term option",
                                    "3 Month Value and Convenience",
                                ].map((plan) => (
                                    <button
                                        key={plan}
                                        onClick={() => {
                                            setSelectedPlan(plan);
                                            setDropdownOpen(false);
                                        }}
                                        className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100"
                                    >
                                        {plan}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* NEXT BUTTON */}
                    <div className="flex justify-end mt-6">
                        <Button
                            to="/step2"
                            text="Next"
                            state={{ plan: selectedPlanData }}
                        />
                    </div>

                </div>
            </div>
        </StepLayout>
    );
}