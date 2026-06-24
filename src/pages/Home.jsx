import ImageWithLoader from "../components/ImageWithLoader";
import Plans from "../components/Plans";
import Button from "../components/PrimaryBtn";
import Testimonials from "../components/Testimonials";

export default function Home() {

    return (
        <>
            <section className="px-6 md:px-16 py-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    <div>
                        <h1 className="font-semibold text-3xl md:text-6xl text-(--primary-color) leading-tight mb-2">
                            Smart Phones. <br /> Smarter Living.
                        </h1>
                        <p className="text-md font-bold mb-2">
                            Discover top brands, powerful features, and real value.
                        </p>
                        <h3 className="md:text-3xl text-2xl text-(--secondary-color) font-bold mb-2">
                            Welcome to Uni-Movil
                        </h3>
                        <p className="text-lg mb-6">
                            Shop the latest and pre-owned smartphones with confidence. Premium quality, trusted deals, and accessories you’ll love all in one place.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Join Now" />
                        </div>
                    </div>

                    <div>
                        <ImageWithLoader
                            src="/assets/home-1.png"
                            alt="Home 1"
                            className="w-full max-w-md lg:max-w-full"
                        />
                    </div>

                </div>
            </section>

            <section className="px-6 md:px-16 py-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    <div>
                        <ImageWithLoader
                            src="/assets/home-2.jpg"
                            alt="Home 2"
                            className="w-full max-w-md rounded-2xl lg:max-w-full"
                        />
                    </div>

                    <div>
                        <h1 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
                            Experience the Power of Modern Smartphones.
                        </h1>
                        <p className="text-md font-bold mb-2">
                            Browse the latest devices, compare performance, and choose a smartphone designed to match your lifestyle and budget.
                        </p>
                        <h3 className="text-xl text-(--secondary-color) font-bold mb-2">
                            Manage everything in one easy app.
                        </h3>
                        <p className="text-lg mb-6">
                            Open the Uni-Movil app, choose add-ons, and instantly boost your data, minutes, or texts anytime, anywhere—giving you complete control over your mobile experience.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Join Now" />
                        </div>
                    </div>

                </div>
            </section>

            <Plans />

            <section className="px-6 md:px-16 py-8 mb-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    <div>
                        <h1 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
                            Step Into the World of Freedom
                        </h1>
                        <h3 className="text-xl text-(--secondary-color) font-bold mb-2">
                            Real connections. Unlimited possibilities.
                        </h3>
                        <p className="text-lg mb-6">
                            With Uni-Movil, enjoy reliable connectivity, exclusive offers, and seamless communication designed to keep you connected, informed, and in control wherever you go.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Join Now" />
                        </div>
                    </div>

                    <div>
                        <ImageWithLoader
                            src="/assets/home-3.webp"
                            alt="Home 3"
                            className="w-full max-w-md rounded-2xl lg:max-w-full"
                        />
                    </div>

                </div>
            </section>

            <section className="px-6 md:px-16 py-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    <div>
                        <ImageWithLoader
                            src="/assets/home-4.png"
                            alt="Home 4"
                            className="w-full max-w-md lg:max-w-full"
                        />
                    </div>

                    <div>
                        <h1 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
                            Always On. Always Connected.
                        </h1>
                        <h3 className="text-xl text-(--secondary-color) font-bold mb-2">
                            Stay powered with Uni-Movil.
                        </h3>
                        <p className="text-lg mb-6">
                            Uni-Movil keeps up with your lifestyle—fast, reliable, and always ready. Enjoy strong coverage, affordable plans, and seamless connectivity to stay connected with what matters most, every day.
                        </p>

                        <div className="flex gap-4">
                            <Button to="/plan" text="Join Now" />
                        </div>
                    </div>

                </div>
            </section>

            <Testimonials />
        </>

    );
}