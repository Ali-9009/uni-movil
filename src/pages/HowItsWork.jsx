import FAQ from "../components/Faqs";

export default function HowItsWork() {
    const steps = [
        {
            id: 1,
            title: "Choose Your Plan",
            desc: "Pick the SIM plan that suits your needs data, talk time, and validity that fit your lifestyle.",
            img: "./assets/choose.png",
        },
        {
            id: 2,
            title: "Place Your Order",
            desc: "Add your favorite plan to the cart and complete a quick, secure checkout in just a few clicks.",
            img: "./assets/plan.png",
        },
        {
            id: 3,
            title: "Activate & Enjoy",
            desc: "Insert your SIM, follow the simple activation steps, and start enjoying seamless connectivity.",
            img: "./assets/active.png",
        },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-3 sm:px-10 mt-8">
                <div className="bg-(--primary-color) rounded-2xl py-6 flex justify-center">
                    <h1 className="font-semibold text-white text-center lg:text-6xl text-4xl">
                        How Its Work
                    </h1>
                </div>
            </div>

            <section className="py-12">
                <div className="max-w-6xl mx-auto text-center">

                    {/* Heading */}
                    <div className="lg:px-12 px-6">
                        <h2 className="font-semibold text-3xl md:text-5xl text-center text-(--primary-color) leading-tight mb-4">
                            Simple Steps to Get Connected
                        </h2>

                        <p className="mb-7 text-md">
                            Get connected in minutes with affordable plans, quick activation, and fast delivery.
                        </p>
                    </div>
                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-12 px-6">

                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="border border-gray-300 flex flex-col items-center text-center p-6 rounded-2xl gap-4 shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className=""
                                />

                                <h2 className="font-bold text-xl md:text-[18px] text-black">
                                    {step.title}
                                </h2>

                                <p className="text-gray-600 text-base">
                                    {step.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <FAQ />
        </>
    );
}