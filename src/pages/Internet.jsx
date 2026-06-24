import { useState } from "react";
import Button from "../components/PrimaryBtn";

// ── Coverage Popup ──────────────────────────────────────────────────────────
function CoveragePopup({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [zip, setZip] = useState("");

  function handleSubmit() {
    setSubmitted(true);
    setTimeout(onClose, 3000);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-white/10 backdrop-blur-sm bg-opacity-20 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Form */}
        {!submitted ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4 text-(--primary-color) ">
              Check Your Coverage
            </h2>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Enter your ZIP Code"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSubmit}
              className="w-full mt-4 bg-(--primary-color)  hover:bg-(--secondary-color)  text-white font-semibold py-3 rounded-lg"
            >
              Submit
            </button>
          </div>
        ) : (
          /* Success Message */
          <div className="text-center py-12 px-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🎉 Your ZIP Code is eligible for High-Speed Internet!
            </h3>
            <p className="text-3xl font-bold text-green-600 mb-4">$200 OFF</p>
            <a
              href="tel:8443033178"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition mb-4"
            >
              Call Now
            </a>
            <p className="text-lg text-green-600 mb-4">844–303–3178</p>
            <p className="text-sm text-gray-500">
              Use this discount code when you call to redeem your offer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Internet Plans Data ─────────────────────────────────────────────────────
const plans = [
  {
    tag: "INTERNET ADVANTAGE",
    title: "100 Mbps Internet",
    desc: "Reliable speeds for a smooth online experience.",
    price: "$30",
    features: [
      "Mobile included for 1 year",
      "Add Advanced WiFi for $10/mo",
      "No contracts",
    ],
  },
  {
    tag: "INTERNET PREMIER",
    title: "500 Mbps Internet",
    desc: "Powers seamless work and entertainment across multiple devices.",
    price: "$50",
    features: [
      "Free installation and activation",
      "Mobile included for 1 year",
      "Add Advanced WiFi for $10/mo",
      "No contracts",
    ],
  },
  {
    tag: "INTERNET GIG",
    title: "1 Gig Internet",
    desc: "Fuels serious gaming, streaming and working from home for the whole household.",
    price: "$70",
    features: [
      "Free installation and activation",
      "Mobile included for 1 year",
      "Advanced WiFi with WiFi 7 included",
      "No contracts",
    ],
  },
];

// ── Products Data ───────────────────────────────────────────────────────────
const products = [
  {
    tag: "MOBILE®",
    title: "Try Mobile for a Full Year",
    desc: "One full year of Mobile service is included when you get Internet. That's a $360 value!",
  },
  {
    tag: "MOBILE®",
    title: "Try Mobile for a Full Year",
    desc: "One full year of Mobile service is included when you get Internet. That's a $360 value!",
  },
  {
    tag: "MOBILE®",
    title: "Try Mobile for a Full Year",
    desc: "One full year of Mobile service is included when you get Internet. That's a $360 value!",
  },
];

// ── Main Component ──────────────────────────────────────────────────────────
export default function Internet() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="max-w-7xl mx-auto px-6 mt-6 space-y-10">
      {/* ── Hero Banner ── */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-8 gap-6">
          {/* Left */}
          <div className="space-y-4">
            <p className="  font-semibold tracking-wide">INTERNET®</p>

            <h1 className="text-3xl md:text-6xl text-(--primary-color) leading-tight mb-2 font-semibold">
              Fiber-Powered 500 Mbps Internet
            </h1>

            <p className="text-md font-bold mb-2">
              Get a fast, reliable connection for an incredible price.
            </p>

            {/* Price Card */}
            <div className="border border-(--primary-color) rounded-xl px-4 py-4 w-54">
              <p className="text-[20px]">Internet Premier</p>
              <p className="text-gray-400 line-through text-[16px]">$50</p>
              <p className="text-[20px] font-semibold">$30/mo</p>
              <p className="text-(--primary-color)  font-semibold text-sm mt-1">
                For 1 year
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-start gap-4">
              <button
                onClick={() => setPopupOpen(true)}
                className="px-6 py-2 rounded-lg cursor-pointer
    bg-(--primary-color) text-white font-medium
    hover:bg-(--secondary-color)
    transition-all duration-300 
    flex items-center justify-center gap-2"
              >
                Check my coverage
              </button>
              <span className="text-(--primary-color)  font-semibold tracking-wide">
                844–303–3178
              </span>
            </div>

            {/* <p className="text-sm">
              Internet is powered by fiber and delivered to your home via HFC.
            </p> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/banner.png"
              className="max-w-full h-auto"
              alt="Banner"
            />
          </div>
        </div>
      </section>

      {/* ── Internet Plans ── */}
      <section className="w-full lg:py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
            Internet Service Built for You
          </h2>
          <p className="text-md font-bold mb-2">
            Explore affordable Internet plans designed for speed, reliability
            and security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="rounded-3xl border border-gray-200 p-8 shadow-sm"
              >
                <p className="text-(--primary-color)  font-semibold text-sm tracking-wide">
                  {plan.tag}
                </p>
                <h3 className="text-2xl font-bold mt-4">{plan.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{plan.desc}</p>

                <p className="text-3xl font-bold mt-6">
                  {plan.price}
                  <span className="text-lg font-medium">/mo</span>
                </p>
                <p className="text-gray-600 text-sm">for 1 year</p>

                <hr className="my-6 border-gray-200" />

                <ul className="space-y-3 text-sm text-gray-600">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-(--primary-color)  rounded-full inline-block flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button to="/step3?type=internet" text="Shop Now" className="mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Work Better Together ── */}
      <section className="w-full py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
            Our Products Work Better Together
          </h2>
          <p className="text-md font-bold mb-2 max-w-2xl">
            When you're connected everywhere, you can go anywhere. Don't miss a
            beat with the coverage and entertainment you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {products.map((product, i) => (
              <div
                key={i}
                className="rounded-3xl border border-gray-200 p-6 shadow-sm"
              >
                <img
                  src="/assets/sec-img.png"
                  className="rounded-2xl w-full h-48 object-cover"
                  alt="Product"
                />
                <p className="text-gray-700 font-semibold text-xs mt-6 tracking-wide">
                  {product.tag}
                </p>
                <h3 className="text-xl font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {product.desc}
                </p>
                <Button to="/step3?type=internet" text="Shop Now" className="mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banner Section (desktop only) ── */}
      <div
        className="hidden lg:flex w-full h-[300px] bg-contain bg-no-repeat bg-center items-end justify-start p-8 rounded-2xl"
        style={{ backgroundImage: "url('/assets/bg.png')" }}
      >
        <div className="max-w-md">
          <h2 className="font-semibold text-3xl md:text-5xl text-(--primary-color) leading-tight mb-2">
            Your Title Goes Here
          </h2>
          <p className="text-md font-bold mb-2">
            This is your description text. Everything stays aligned to the start
            (left side).
          </p>
          <Button to="/step3?type=internet" text="Click Here" className="mt-4 max-w-42" />

        </div>
      </div>

      {/* ── Coverage Popup ── */}
      {popupOpen && <CoveragePopup onClose={() => setPopupOpen(false)} />}
    </main>
  );
}
