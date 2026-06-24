export default function StepProgress({ step }) {
    const steps = [
        { id: 1, label: "Activate Device" },
        { id: 2, label: "Create Account" },
        { id: 3, label: "Checkout" },
    ];

    const progress = (step / steps.length) * 100;

    return (
        <div className="max-w-xl mx-auto mb-10 px-2">

            {/* TOP */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-lg">
                    {steps[step - 1].label}
                </h2>

                <span className="text-sm text-gray-500">
                    Step {step} of 3
                </span>
            </div>

            {/* BAR */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-2 bg-(--primary-color) rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}