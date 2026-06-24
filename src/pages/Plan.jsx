import Plans from "../components/Plans";

export default function Plan() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-3 sm:px-10 mt-8">

                <div className="bg-(--primary-color) rounded-2xl py-6 flex justify-center">
                    <h1 className="font-semibold text-white text-center lg:text-6xl text-4xl">
                        Plans
                    </h1>
                </div>

            </section>

            <Plans />
        </>

    );
}