import StepLayout from "./StepLayout";
import Button from "../../components/PrimaryBtn"
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Step2() {
    
    const location = useLocation();
    const selectedPlanData = location.state?.plan;
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        postcode: "",
        zipcode: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <StepLayout title="Create Account" step={2}>
            <div className="flex justify-evenly gap-4 max-md:flex-col lg:items-start">

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
                <div className="lg:w-155 mt-4 w-full">

                    {/* ACCOUNT */}
                    <h2 className="text-2xl font-bold mb-3">Create Your Account</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                        <Input label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                        <Input label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
                        <Input label="Your Email" name="email" value={form.email} onChange={handleChange} />
                        <Input label="Contact Number" name="phone" value={form.phone} onChange={handleChange} />
                    </div>

                    {/* ADDRESS */}
                    <h2 className="text-2xl font-bold mb-3">Activation Details</h2>

                    <div className="flex flex-col gap-4">
                        <Input label="Address 1" name="address1" value={form.address1} onChange={handleChange} />
                        <Input label="Address 2" name="address2" value={form.address2} onChange={handleChange} />

                        <div className="flex max-sm:flex-col gap-4">
                            <Input label="City" name="city" value={form.city} onChange={handleChange} />
                            <Input label="Post Code" name="postcode" value={form.postcode} onChange={handleChange} />
                            <Input label="Zip Code" name="zipcode" value={form.zipcode} onChange={handleChange} />
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-between mt-6">
                        <Button to="/step1" text="Back" />
                        <Button to="/step3" text="Next" />
                    </div>

                </div>
            </div>
        </StepLayout>
    );
}


// Reusable Input Component
function Input({ label, name, value, onChange }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm sm:text-base">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={label}
                className="bg-gray-100 rounded-md px-3 py-3 w-full outline-none"
            />
        </div>
    );
}