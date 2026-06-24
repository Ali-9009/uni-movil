import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/PrimaryBtn";

export default function Activation3() {
    const [tab, setTab] = useState("featured");
    const navigate = useNavigate();

    const [customPlan, setCustomPlan] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const featuredPlans = [
        {
            title: "INTERNET ADVANTAGE + MOBILE",
            speed: "100 Mbps | 1 Unlimited Line",
            desc: "Fast internet for streaming and sharing with speeds up to 100 Mbps",
            price: 30,
        },
        {
            title: "INTERNET PREMIER + MOBILE",
            speed: "500 Mbps | 1 Unlimited Line",
            desc: "Our most popular internet for remote work, online learning and live streaming with speeds up to 500 Mbps",
            price: 50,
        },
    ];

    /* RESET EVERYTHING ON TAB CHANGE */
    useEffect(() => {
        setSelectedPlan(null);
        setCustomPlan(null);
    }, [tab]);

    const handleContinue = () => {
        if (!selectedPlan) return;
        navigate("/activation-4", {
            state: { plan: selectedPlan },
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-base font-medium text-gray-900 mb-4">
                    Choose a Featured Offer or Build a Bundle
                </h2>

                {/* TABS */}
                <div className="flex gap-8 border-b border-gray-200 mb-6">
                    {["featured", "bundle"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`pb-3 text-sm font-medium relative ${tab === t ? "text-gray-900" : "text-gray-500"
                                }`}
                        >
                            {t === "featured" ? "Featured Offers" : "Build A Bundle"}
                            {tab === t && (
                                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-300" />
                            )}
                        </button>
                    ))}
                </div>

                {/* FEATURED */}
                {tab === "featured" && (
                    <div className="grid md:grid-cols-2 gap-5">
                        {featuredPlans.map((plan) => (
                            <PlanCard
                                key={plan.title}
                                plan={plan}
                                selected={selectedPlan?.title === plan.title}
                                onSelect={() => {
                                    setSelectedPlan(plan);
                                    setCustomPlan(null); // clear bundle selection
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* BUNDLE */}
                {tab === "bundle" && (
                    <BuildBundle
                        setCustomPlan={setCustomPlan}
                        setSelectedPlan={setSelectedPlan}
                    />
                )}

                {/* CUSTOM PLAN */}
                {customPlan && tab === "bundle" && (
                    <div className="mt-8 border-t pt-6">
                        <h3 className="text-sm font-medium mb-3 text-gray-800">
                            Your Custom Bundle
                        </h3>

                        <PlanCard
                            plan={customPlan}
                            selected={selectedPlan?.title === customPlan.title}
                            onSelect={() => {
                                setSelectedPlan(customPlan);
                            }}
                        />
                    </div>
                )}

                {/* CONTINUE BUTTON */}
                {selectedPlan && (
                    <div className="mt-6 flex justify-end">
                        <Button onClick={handleContinue} text="Continue" />
                    </div>
                )}
            </div>
        </div>
    );
}

/* ---------- PLAN CARD ---------- */
function PlanCard({ plan, selected, onSelect }) {
    return (
        <div className="max-w-120 border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <p className="text-[11px] font-semibold text-(--primary-color) tracking-wide">
                        {plan.title}
                    </p>

                    <p className="text-sm font-medium text-gray-900 mt-1">
                        {plan.speed}
                    </p>
                </div>

                {/* TOGGLE */}
                <button
                    onClick={onSelect}
                    className={`w-10 h-5 rounded-full relative transition ${selected ? "bg-(--primary-color)" : "bg-gray-300"
                        }`}
                >
                    <span
                        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition ${selected ? "left-5" : "left-0.5"
                            }`}
                    />
                </button>
            </div>

            <p className="text-xs text-gray-600 leading-5 mb-4">
                {plan.desc}
            </p>

            <p className="text-xs text-gray-500 mb-6">
                Unlock the best value by combining with 2 Mobile lines
            </p>

            <div className="flex items-end justify-between">
                <div>
                    <span className="text-3xl font-light text-gray-900">
                        ${plan.price}
                    </span>
                    <span className="text-xs text-gray-500">/mo</span>
                </div>

                <button className="text-xs text-(--primary-color) hover:underline">
                    Pricing and offer info
                </button>
            </div>
        </div>
    );
}

/* ---------- BUILD BUNDLE ---------- */
function BuildBundle({ setCustomPlan, setSelectedPlan }) {
    const [selected, setSelected] = useState([]);

    const options = {
        internet: ["INTERNET ADVANTAGE", "UP TO 500 Mbps", "UP TO 1 Gbps"],
        tv: ["TV STREAM", "TV CHOICE", "TV SELECT"],
        mobile: ["MOBILE LINE"],
        voice: ["VOICE FEATURES"],
    };

    const toggleItem = (item) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    const handleReset = () => {
        setSelected([]);
        setCustomPlan(null);
        setSelectedPlan(null);
    };

    const handleApply = () => {
        if (!selected.length) return;

        let price = 20;

        if (selected.includes("UP TO 500 Mbps")) price += 20;
        if (selected.includes("UP TO 1 Gbps")) price += 40;
        if (selected.includes("TV STREAM")) price += 15;
        if (selected.includes("TV CHOICE")) price += 25;
        if (selected.includes("MOBILE LINE")) price += 10;
        if (selected.includes("VOICE FEATURES")) price += 5;

        const plan = {
            title: "CUSTOM BUNDLE",
            speed: selected.join(" | "),
            desc: "Your personalized package based on selected services.",
            price,
        };

        setCustomPlan(plan);
        setSelectedPlan(null);
    };

    return (
        <div>
            <div className="grid md:grid-cols-4 gap-8">
                {Object.entries(options).map(([key, list]) => (
                    <div key={key}>
                        <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase">
                            {key}
                        </h3>

                        <div className="space-y-3">
                            {list.map((item) => (
                                <label
                                    key={item}
                                    className="flex items-center gap-2 text-sm cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(item)}
                                        onChange={() => toggleItem(item)}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-3 mt-8">
                <button
                    onClick={handleReset}
                    className="px-5 h-10 text-sm border border-gray-300 rounded-md"
                >
                    Reset
                </button>

                <Button onClick={handleApply} text="Apply" />
            </div>
        </div>
    );
}