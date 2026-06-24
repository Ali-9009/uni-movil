import { useState } from "react";
import PlanModal from "../components/popup/PlanModal";
import Button from "../components/PrimaryBtn";

export default function Plans() {
    const [open, setOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            id: 1,
            gb: "1GB",
            type: "Basic",
            price: 15,
            currency: "$",
            img: "/assets/plan-img.png",
        },
        {
            id: 2,
            gb: "5GB",
            type: "Starter",
            price: 29,
            currency: "$",
            img: "/assets/plan-img.png",
        },
        {
            id: 3,
            gb: "15GB",
            type: "Premium",
            price: 39,
            currency: "$",
            img: "/assets/plan-img.png",
        },
        {
            id: 4,
            gb: "30GB",
            type: "Pro",
            price: 59,
            currency: "$",
            img: "/assets/plan-img.png",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto py-12 px-5">

            <h2 className="font-semibold text-3xl md:text-5xl text-center text-(--primary-color) leading-tight mb-4">
                Plan Price Data Lifestyle Access
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="group w-full max-w-sm bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                    >
                        {/* IMAGE CARD */}
                        <div className="relative rounded-2xl overflow-hidden flex items-center justify-center">
                            <img src={plan.img} />

                            {/* CONTENT ON IMAGE */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                {plan.type && (
                                    <>
                                        <h3 className="text-xl font-semibold">{plan.type}</h3>
                                        <p className="text-sm opacity-90">
                                            Power for the Everyday Hustle
                                        </p>
                                    </>
                                )}

                                <h1 className="text-5xl font-bold mt-2">
                                    {plan.gb}
                                </h1>

                                <p className="text-lg mt-2">
                                    {plan.currency}{Number(plan.price).toLocaleString()}
                                    <span className="text-sm">/month</span>
                                </p>
                            </div>
                        </div>

                        {/* BOTTOM CONTENT */}
                        <div className="mt-6 flex flex-col items-center text-center">
                            <h3 className="text-(--secondary-color) font-bold text-lg group-hover:text-(--primary-color) transition">
                                {plan.title?.toUpperCase() || ""}
                            </h3>

                            <h3 className="text-2xl font-bold mt-2">
                                {plan.currency}{Number(plan.price).toLocaleString()}
                                <span className="text-sm"> /month</span>
                            </h3>

                            <div className="mt-4">
                                <Button
                                    text="View Plans"
                                    onClick={() => {
                                        setSelectedPlan(plan);
                                        setOpen(true);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <PlanModal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    plan={selectedPlan}
                />
            </div>
        </section>
    );
}