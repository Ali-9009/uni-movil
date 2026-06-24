import Button from "../PrimaryBtn";

export default function PlanModal({ isOpen, onClose, plan }) {
    if (!isOpen || !plan) return null;

    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl w-full max-w-2xl p-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* TOP */}
                <div className="flex justify-between items-center mb-6">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                        <img
                            src={plan.img}
                            alt={plan.gb}
                            className="w-20 h-20 object-cover rounded-lg"
                        />

                        <div>
                            <h2 className="text-xl font-bold">
                                {plan.type}
                            </h2>

                            <p className="text-gray-500">
                                {plan.gb} Plan
                            </p>
                        </div>
                    </div>

                    {/* PRICE */}
                    <h2 className="text-2xl font-bold text-green-600">
                        {plan.currency}{Number(plan.price).toLocaleString()}
                    </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    This {plan.type} plan gives you {plan.gb} high-speed access with full premium features.
                    Perfect for users who want reliable performance and flexibility.
                </p>

                {/* BUTTON */}
                <div className="flex justify-center">
                    <Button
                        to="/step1"
                        text="Choose plan"
                        state={{ plan }} 
                    />
                </div>
            </div>
        </div>
    );
}