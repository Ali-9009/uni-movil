import StepLayout from "./StepLayout";
import { useState } from "react";
import { Calendar } from "lucide-react";
import Button from "../../components/PrimaryBtn";

// ── Reusable Input ──────────────────────────────────────────────────────────
const FormInput = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder || label}
      className="bg-gray-100 p-3 rounded-md w-full outline-none"
    />
  </div>
);

// ── Internet Left Side ──────────────────────────────────────────────────────
function InternetCheckoutForm({ card, handleCard }) {
  return (
    <>
      {/* Contact */}
      <div className="border border-gray-300 rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <input
          type="text"
          placeholder="Email or mobile phone number"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Payment */}
      <div className="border border-gray-300 rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-1">Payment</h3>
        <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

        {/* Express */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-3">Express Payment</p>
          <div className="flex gap-3 mb-4">
            <button className="flex-1 bg-yellow-400 text-blue-900 py-3 rounded-md font-bold hover:bg-yellow-500 transition">
              PayPal
            </button>
            <button className="flex-1 bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
              G Pay
            </button>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
        </div>

        {/* Card Fields — Step3 style */}
        <div className="space-y-4">
          <FormInput
            label="Card Number"
            name="number"
            value={card.number}
            onChange={handleCard}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Exp Date"
              name="exp"
              value={card.exp}
              onChange={handleCard}
              placeholder="MM/YY"
            />
            <FormInput
              label="CVV"
              name="cvv"
              value={card.cvv}
              onChange={handleCard}
            />
          </div>
          <FormInput
            label="Cardholder Name"
            name="name"
            value={card.name}
            onChange={handleCard}
          />
        </div>

        {/* PayPal Option */}
        <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <input type="radio" id="paypal" name="payment" className="w-4 h-4" />
            <label htmlFor="paypal" className="font-medium">PayPal</label>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6"
          />
        </div>
      </div>

      {/* Billing — HTML style */}
      <div className="border border-gray-300 rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Billing Address</h3>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Country / Region</label>
          <select className="w-full border border-gray-300 text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>United States</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-3 text-gray-400">🔍</span>
        </div>

        <input
          type="text"
          placeholder="House, apartment, etc. (optional)"
          className="w-full border border-gray-300 text-sm rounded-md px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-3 gap-3 mb-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded-md text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border border-gray-300 rounded-md text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>State</option>
          </select>
          <input
            type="text"
            placeholder="ZIP Code"
            className="border border-gray-300 rounded-md text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-3 text-gray-400">ⓘ</span>
        </div>
      </div>
    </>
  );
}

// ── Internet Right Summary ──────────────────────────────────────────────────
function InternetOrderSummary() {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
      <h3 className="text-2xl font-bold mb-5">Order Summary</h3>

      {/* Product */}
      <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=80&h=100&fit=crop"
            alt="Internet Plan"
            className="w-16 h-20 rounded object-cover"
          />
          <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-sm w-5 h-5 flex items-center justify-center">
            1
          </span>
        </div>
        <div className="flex-1 flex justify-between items-start">
          <div>
            <p className="font-medium text-sm">Internet Premier — 500 Mbps</p>
            <p className="text-xs text-gray-500 mt-1">1 Year Plan</p>
          </div>
          <p className="font-semibold">$30/mo</p>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-2 text-sm mb-4">
        <div className="flex justify-between">
          <span>Monthly Price</span>
          <span>$30</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount (was $50)</span>
          <span>-$20/mo</span>
        </div>
        <div className="flex justify-between">
          <span>Installation</span>
          <span className="text-green-600">Free</span>
        </div>
      </div>

      <div className="border-t border-gray-300 my-4 pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="text-blue-600">$30/mo</span>
      </div>

      {/* Terms */}
      <p className="text-xs text-gray-500 text-center mb-4">
        By continuing, you agree to the{" "}
        <a href="#" className="underline">Terms of Service</a> and{" "}
        <a href="#" className="underline">Privacy Policy</a>.
      </p>

      <Button text="Pay Now" to="/receipt" />
    </div>
  );
}

// ── Mobile/SIM Left Side (original Step3) ──────────────────────────────────
function MobileCheckoutForm({ card, handleCard, simType, setSimType, date, setDate }) {
  const FormInputLocal = ({ label, name, value, onChange, placeholder, type = "text" }) => (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
        className="bg-gray-100 p-3 rounded-md w-full outline-none"
      />
    </div>
  );

  return (
    <>
      {/* Top Info */}
      <div className="border border-gray-300 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-[var(--primary-color)]">Great News!</h2>
        <p className="text-gray-600 mt-2">
          Your Device is <b>eSIM Compatible</b>
        </p>

        {/* Date */}
        <div className="mt-5 relative">
          <label className="text-sm font-medium">Choose start date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mt-2 border border-gray-300 rounded-md p-3 pl-10"
          />
          <Calendar className="absolute left-3 top-12 text-gray-500" size={18} />
        </div>

        {/* SIM Type */}
        <div className="mt-6 space-y-3">
          {[
            { id: "esim", title: "eSIM Compatible", desc: "Digital delivery" },
            { id: "physical", title: "Physical SIM", desc: "Shipped to your door" },
            { id: "own", title: "I have SIM card", desc: "Use existing SIM" },
          ].map((item) => (
            <label
              key={item.id}
              className={`flex gap-3 p-4 rounded-xl border border-gray-300 cursor-pointer transition ${
                simType === item.id
                  ? "border-[var(--primary-color)] bg-gray-50"
                  : "hover:border-gray-400"
              }`}
            >
              <input
                type="radio"
                checked={simType === item.id}
                onChange={() => setSimType(item.id)}
                className="mt-1"
              />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </label>
          ))}
        </div>

        {simType === "own" && (
          <div className="mt-4">
            <FormInputLocal label="SIM Card Number" name="sim" value="" onChange={() => {}} />
          </div>
        )}
      </div>

      {/* Card */}
      <div className="border border-gray-300 rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Card Information</h3>
        <div className="space-y-4">
          <FormInputLocal label="Card Number" name="number" value={card.number} onChange={handleCard} />
          <div className="grid grid-cols-2 gap-4">
            <FormInputLocal label="CVV" name="cvv" value={card.cvv} onChange={handleCard} />
            <FormInputLocal label="Exp Date" name="exp" value={card.exp} onChange={handleCard} placeholder="MM/YY" />
          </div>
        </div>
      </div>

      {/* Billing */}
      <div className="border border-gray-300 rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Billing Information</h3>
        <div className="space-y-4">
          <FormInputLocal label="Address" name="address" value="" onChange={() => {}} />
          <div className="grid grid-cols-3 gap-4">
            <FormInputLocal label="City" name="city" value="" onChange={() => {}} />
            <FormInputLocal label="Zip" name="zip" value="" onChange={() => {}} />
            <FormInputLocal label="Postal" name="postal" value="" onChange={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
}

// ── Mobile/SIM Right Summary (original Step3) ───────────────────────────────
function MobileOrderSummary() {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
      <h3 className="text-2xl font-bold mb-5">Order Summary</h3>

      {/* Plan */}
      <div className="flex gap-3 border-b border-gray-300 pb-4 mb-4">
        <img src="/assets/plan-img.png" className="w-10 h-10" alt="plan" />
        <div>
          <p className="font-bold">$45 Premium Plan</p>
          <p className="text-sm text-gray-500">3 Month Plan</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 p-3 rounded-lg text-sm space-y-1 mb-4">
        <p className="font-semibold">Contact Info</p>
        <p className="text-gray-600">Carlos Fonte</p>
        <p className="text-gray-600">+92 000 000000</p>
        <p className="text-gray-600">carlos@email.com</p>
      </div>

      {/* Price */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>$135</span></div>
        <div className="flex justify-between"><span>Discount</span><span className="text-green-600">-30%</span></div>
        <div className="flex justify-between"><span>Tax</span><span>$3.19</span></div>
      </div>

      <div className="border-t border-gray-300 my-4 pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="text-[var(--primary-color)]">$40</span>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3 text-sm mb-4">
        <label className="flex gap-2 items-center">
          <input type="checkbox" /> Enable Auto Pay
        </label>
        <label className="flex gap-2 items-center">
          <input type="checkbox" /> I agree to Terms & Conditions
        </label>
      </div>

      <Button text="Confirm Purchase & Activate SIM" to="/receipt" />
    </div>
  );
}

// ── Main Step3 ──────────────────────────────────────────────────────────────
export default function Step3() {
  // Detect ?type=internet from URL
  const params = new URLSearchParams(window.location.search);
  const isInternet = params.get("type") === "internet";

  const [simType, setSimType] = useState("esim");
  const [date, setDate] = useState("");
  const [card, setCard] = useState({ number: "", cvv: "", exp: "", name: "" });

  const handleCard = (e) => setCard({ ...card, [e.target.name]: e.target.value });

  return (
    <StepLayout title={isInternet ? "Checkout" : "Finish Checkout"} step={3} hideSteps={isInternet}>
      <div className="grid lg:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="space-y-8 col-span-7">
          {isInternet ? (
            <InternetCheckoutForm card={card} handleCard={handleCard} />
          ) : (
            <MobileCheckoutForm
              card={card}
              handleCard={handleCard}
              simType={simType}
              setSimType={setSimType}
              date={date}
              setDate={setDate}
            />
          )}
        </div>

        {/* RIGHT */}
        <div className="col-span-5">
          <div className="sticky top-24">
            {isInternet ? <InternetOrderSummary /> : <MobileOrderSummary />}
          </div>
        </div>
      </div>
    </StepLayout>
  );
}