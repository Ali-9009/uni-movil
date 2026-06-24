// src/components/Popups.jsx
import { useEffect, useRef } from 'react';
import { X, ChevronDown, Copy, ArrowLeft } from 'lucide-react';

// Custom hook for click outside
const useClickOutside = (isOpen, onClose) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    return ref;
};

// Change Password Popup
export const ChangePasswordPopup = ({ isOpen, onClose }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" />
            <div className="fixed px-4 w-full h-screen z-95 top-0 left-0 flex justify-center items-center">
                <div ref={ref} className="bg-white sm:w-92 w-72 sm:px-4 px-4 py-4 pb-10 rounded-[10px] shadow-lg">
                    <div className="flex justify-end">
                        <span onClick={onClose} className="text-lg cursor-pointer">
                            <X size={20} />
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-4 sm:pt-6 w-full">
                        <label htmlFor="new-pass">New Password</label>
                        <input className="px-3 py-2 rounded-xl bg-gray-100" type="text" placeholder="AQER88@#SAF" />
                        <label htmlFor="confirm-pass">Confirm Password</label>
                        <input className="px-3 py-2 rounded-xl bg-gray-100" type="text" placeholder="AQER88@#SAF" />
                    </div>
                </div>
            </div>
        </>
    );
};

// Add New Line Popup
export const AddNewLinePopup = ({ isOpen, onClose }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed inset-0 bg-black/40 z-99 top-0 left-0 w-full h-full flex items-center justify-center p-6">
                <div ref={ref} className="bg-white rounded-lg w-96 max-h-screen p-3 sm:p-6 shadow-lg overflow-y-auto">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="text-xl text-gray-500 hover:text-gray-700">
                            <X size={20} />
                        </button>
                    </div>
                    <h2 className="md:text-2xl text-lg font-semibold text-center text-[var(--primary-color)] mb-4">Great News!</h2>
                    <p className="text-center max-sm:text-sm text-gray-600 mb-6">
                        Your Device Is Compatible. IMEI <span className="font-semibold">3573050900457179</span> Works Perfectly.
                    </p>
                    <div className="space-y-4">
                        {['I have a Physical Sim Card', 'Send me a Physical Sim', 'Your Device is eSIM Compatible'].map((text, idx) => (
                            <div key={idx}>
                                <label className="sim-option flex items-center p-3 rounded-[10px] cursor-pointer bg-[#F8F1FF] border border-transparent hover:border-[var(--primary-color)] max-sm:text-sm">
                                    <input type="radio" name="sim_type" className="mr-3 accent-[var(--primary-color)]" defaultChecked={idx === 2} />
                                    <div>
                                        <span className="font-semibold">{text}</span>
                                        <p className="text-gray-500 text-sm">
                                            {idx === 0 ? "I already have a physical SIM card that I want to use" :
                                                idx === 1 ? "We'll ship it straight to your door as soon as your order is placed." :
                                                    "Includes digital delivery"}
                                        </p>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <label htmlFor="imei" className="block text-sm font-medium text-gray-700">Enter your SIM card number <span className="text-gray-400">(IMEI)</span></label>
                        <input type="text" id="imei" className="mt-2 max-sm:text-sm w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter IMEI" />
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg max-sm:text-sm font-semibold text-gray-700">Activation Details</h3>
                        <div className="space-y-4 max-sm:text-sm">
                            <input type="text" placeholder="Address 1" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <input type="text" placeholder="Address 2" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <input type="text" placeholder="City" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <input type="text" placeholder="Post Code" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <input type="text" placeholder="Zip Code" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                    </div>
                    <div className="mt-6 mb-4 flex justify-center">
                        <button className="w-full max-sm:text-sm py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-black">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Order Summary Popup
export const OrderSummaryPopup = ({ isOpen, onClose }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed inset-0 bg-black/40 z-95 flex items-center justify-center p-6">
                <div ref={ref} className="bg-white p-4 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                    <div onClick={onClose} className="bg-white hover:bg-black transition-colors duration-300 hover:text-white w-fit px-2 py-1 text-black font-semibold rounded-lg cursor-pointer">
                        <ArrowLeft size={18} />
                    </div>
                    <div className="w-full flex flex-col items-center mb-8">
                        <img src="assets/Mobile-mobile.png" alt="" />
                        <h4 className="text-lg font-bold">John</h4>
                        <p>Money Transfer of <span className="font-bold">$700.00</span> on 15-Nov-2025 to Bank Account was successful</p>
                        <p>example@gmail.com</p>
                    </div>
                    <p className="font-semibold mb-4">Alexa Rawles</p>
                    <h2 className="font-semibold text-[30px] border-b border-gray-300 pb-2 mb-4">Order Summary</h2>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 mt-4 mb-4 space-y-6">
                        <div className="max-w-xl space-y-2">
                            <h3 className="font-semibold text-[26px]">Get esim (Qty:1)</h3>
                            <p className="text-[16px] mt-1 leading-4">Lorem ipsum odor amet, consectetur adipiscing elit...</p>
                            <button className="font-bold underline mt-2">Read More</button>
                        </div>
                        <p className="font-medium mt-2 sm:mt-0">$1750.00</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between"><span className="font-semibold">Subtotal</span><span>$175.00</span></div>
                        <div className="flex justify-between"><span className="font-semibold">Sim monthly plan</span><span>$175.00</span></div>
                        <div className="flex justify-between border-b border-gray-300 pb-3"><span className="font-semibold">VAT</span><span>$175.00</span></div>
                        <div className="flex justify-between items-center text-black font-bold"><span>Total</span><span>$2125.00</span></div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-[var(--primary-color)] hover:bg-black transition-colors duration-300 text-white px-8 py-2 rounded-full cursor-pointer">
                            Print
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Card Popup (Add/Edit Card)
export const CardPopup = ({ isOpen, onClose, title = "Add / Edit Card" }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed px-4 w-full h-screen z-95 top-0 left-0 flex justify-center items-center">
                <div ref={ref} className="relative max-w-[400px] mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-6">
                    <button onClick={onClose} className="absolute top-2 right-2 px-2 py-1 rounded-md cursor-pointer">
                        <X size={20} />
                    </button>
                    <h1 className="text-2xl font-bold mb-4">{title} <span className="text-[var(--primary-color)]">Card</span></h1>
                    <div className="flex justify-between items-center space-x-2 mb-4">
                        {['VISA', 'Mastercard', 'UnionPay', 'AMEX', 'JCB'].map((card, idx) => (
                            <div key={idx} className="w-12 flex justify-center items-center">
                                <div className="w-full h-12 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">{card}</div>
                            </div>
                        ))}
                    </div>
                    <form className="space-y-2">
                        <div className="flex flex-col gap-2">
                            <label>Name on Card</label>
                            <input type="text" placeholder="Michael" className="w-full px-4 py-2 bg-gray-100 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Card Number</label>
                            <input type="text" placeholder="1111-1111--1111" className="w-full px-4 py-2 bg-gray-100 rounded-lg" />
                        </div>
                        <div className="flex justify-between gap-4">
                            <div className="w-full flex flex-col gap-2">
                                <label>Expiration Date</label>
                                <input type="text" placeholder="12/5/202" className="w-full px-4 py-2 bg-gray-100 rounded-lg" />
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label>CVV</label>
                                <input type="text" placeholder="221" className="w-full px-4 py-2 bg-gray-100 rounded-lg" />
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            <h3 className="font-bold text-gray-800 mb-1">Learn More About Security</h3>
                            <p>Stripe has been audited by a PCI-certified auditor and is certified to PCI Service Provider level 1.</p>
                            <button type="button" className="mt-4 px-4 py-2 text-red-500 border border-red-500 rounded-lg font-semibold hover:bg-[#FDEDED] transition-colors">
                                Powered by Stripe
                            </button>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-[var(--primary-color)] text-white font-bold py-3 rounded-full shadow-lg">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

// Remove Payment Popup
export const RemovePaymentPopup = ({ isOpen, onClose }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed px-4 w-full h-screen z-95 top-0 left-0 flex justify-center items-center">
                <div ref={ref} className="bg-white p-4 rounded md:max-w-[600px]">
                    <div className="flex justify-between items-center border-b pb-3 border-gray-300">
                        <h2 className="md:text-2xl text-lg font-semibold text-gray-700">Remove Payment Information</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl md:text-4xl cursor-pointer">
                            <X size={24} />
                        </button>
                    </div>
                    <p className="md:text-lg text-[12px] py-2 text-gray-600 mt-4 pb-4 border-b border-gray-300">
                        If you don't want this payment method to be displayed in your list of payment options, click "Confirm".
                    </p>
                    <div className="flex justify-end gap-2 mt-6">
                        <button onClick={onClose} className="px-4 py-2 max-md:text-[12px] bg-black hover:bg-[var(--primary-color)] transition text-white rounded-full">
                            Cancel
                        </button>
                        <button className="px-4 py-2 max-md:text-[12px] bg-[var(--primary-color)] hover:bg-black text-white rounded-full transition">
                            Confirm Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Invite Popup
export const InvitePopup = ({ isOpen, onClose, copyReferralCode }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/40 z-95 p-6">
                <div ref={ref} className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-800 hover:bg-gray-100 transition-colors">
                        <X size={14} />
                    </button>
                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Invite A Friend</h2>
                    <p className="text-center text-gray-700 text-sm leading-relaxed mb-6">Invite Your Friends To Join And Earn Credits You Can Spend On Your Account.</p>
                    <div className="flex justify-center gap-4 mb-6">
                        {['W', 'F', 'I', 'X', 'S'].map((social, idx) => (
                            <button key={idx} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-xs font-bold">
                                {social}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center mb-6">
                        <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                            <img src="assets/qr-code.png" className="size-26" alt="" />
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Your Referral Code</h3>
                        <div className="flex items-center justify-between bg-white border-2 border-gray-800 rounded-[10px] px-4 py-2">
                            <span className="font-mono text-gray-900 text-sm">124122341231231241241</span>
                            <button onClick={copyReferralCode} className="ml-4 hover:opacity-70 transition-opacity">
                                <Copy size={18} />
                            </button>
                        </div>
                        <div id="copyMessage" className="hidden text-green-600 text-sm font-semibold mt-2">✓ Copied to clipboard!</div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Transfer Credits Popup
export const TransferCreditsPopup = ({ isOpen, onClose, transferTab, setTransferTab, onTransfer, onContinue }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed inset-0 w-full flex items-center justify-center bg-black/40 z-95 p-6">
                <div ref={ref} className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-sm:pt-8 p-4 sm:p-8 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-800">
                        <X size={14} />
                    </button>
                    <div className="flex gap-2 mb-6 mt-4">
                        <button onClick={() => setTransferTab('transfer-to-virtual-card')} className={`flex-1 font-semibold py-1.5 text-sm px-4 rounded-lg ${transferTab === 'transfer-to-virtual-card' ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-100 text-gray-700'}`}>
                            Transfer To Virtual Card
                        </button>
                        <button onClick={() => setTransferTab('transfer-to-a-friend')} className={`flex-1 font-semibold py-1.5 text-sm px-4 rounded-lg ${transferTab === 'transfer-to-a-friend' ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-100 text-gray-700'}`}>
                            Transfer To A Friend
                        </button>
                    </div>

                    {transferTab === 'transfer-to-virtual-card' ? (
                        <div>
                            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Transfer To Virtual Card</h2>
                            <div className="text-center mb-6">
                                <span className="text-gray-700 font-medium">Total Referral Credits: </span>
                                <span className="text-2xl font-bold text-gray-900">$34.50</span>
                            </div>
                            <p className="text-center text-gray-700 text-sm leading-relaxed mb-6">Load Your Available Credits Into Your Virtual Card Instantly.</p>
                            <div className="mb-6">
                                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 border-2 border-gray-200">
                                    <span className="text-gray-800 text-xl font-semibold mr-3">$</span>
                                    <input type="number" placeholder="0.00" step="0.01" className="flex-1 bg-transparent outline-none text-gray-800 text-lg" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={onTransfer} className="bg-[var(--primary-color)] hover:bg-black text-white font-semibold py-3 px-12 rounded-lg">Transfer</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-bold text-center mb-6 px-4">Select A Friend</h2>
                            <div className="px-4 mb-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div key={item} className="border-2 border-gray-300 rounded-lg p-2 cursor-pointer hover:border-[var(--primary-color)] transition">
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg">👤</div>
                                                <span className="bg-[#50F100] text-black text-xs font-bold px-2 py-1 rounded">Active</span>
                                            </div>
                                            <p className="text-sm font-medium text-gray-800">John Doe</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center pb-6">
                                <button onClick={onContinue} className="bg-[var(--primary-color)] hover:bg-black text-white font-bold py-3 px-16 rounded-[10px]">
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

// Transfer Confirmation Popup
export const TransferConfirmationPopup = ({ isOpen, onClose, onConfirm }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black/40 z-95 p-6">
                <div ref={ref} className="bg-white rounded-2xl shadow-2xl w-86 p-2 sm:p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                        <X size={16} />
                    </button>
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">✓</div>
                    </div>
                    <h2 className="text-center lg:text-2xl font-bold text-gray-900 mb-6">Are You Sure You Want To Transfer Credits?</h2>
                    <div className="flex gap-4">
                        <button onClick={onClose} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 px-3 rounded-[10px]">Cancel</button>
                        <button onClick={onConfirm} className="flex-1 bg-[var(--primary-color)] hover:bg-black text-white font-semibold py-1.5 px-3 rounded-[10px]">Transfer</button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Delete Card Popup
export const DeleteCardPopup = ({ isOpen, onClose, onConfirm }) => {
    const ref = useClickOutside(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-90" onClick={onClose} />
            <div className="fixed px-4 w-full h-screen z-95 top-0 left-0 flex justify-center items-center">
                <div ref={ref} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm relative">
                    <button onClick={onClose} className="absolute top-6 right-6">
                        <X size={18} />
                    </button>
                    <div className="flex justify-center mb-2"><div className="text-2xl">⚠️</div></div>
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Are You Sure?</h2>
                    <p className="text-center text-gray-600 mb-4 leading-relaxed">You're about to deactivate this plan. This action cannot be undone.</p>
                    <div className="flex gap-2">
                        <button onClick={onClose} className="flex-1 text-sm bg-(--primary-color) hover:bg-black text-white font-semibold py-1.5 px-2 rounded-lg">Cancel</button>
                        <button onClick={onConfirm} className="flex-1 text-sm bg-(--primary-color) hover:bg-black text-white font-semibold py-1.5 px-2 rounded-lg">Yes, Delete Plan</button>
                    </div>
                </div>
            </div>
        </>
    );
};