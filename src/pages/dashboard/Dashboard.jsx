// src/App.jsx
import { useState } from 'react';
import { EyeOff, Filter, ChevronDown, ChevronUp, Phone, MessageSquare, Database, Eye } from 'lucide-react';
import Sidebar from './Sidebar';
import {
    ChangePasswordPopup,
    AddNewLinePopup,
    OrderSummaryPopup,
    CardPopup,
    RemovePaymentPopup,
    InvitePopup,
    TransferCreditsPopup,
    TransferConfirmationPopup,
    DeleteCardPopup
} from './Popup';

const App = () => {
    const [activeTab, setActiveTab] = useState('account-details');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [paymentAccordionOpen, setPaymentAccordionOpen] = useState(false);
    const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
    const [transferTab, setTransferTab] = useState('transfer-to-virtual-card');

    // Popup states
    const [popups, setPopups] = useState({
        'change-password': false,
        'add-new-line-popup': false,
        'order-summary': false,
        'add-card': false,
        'remove-payment': false,
        'invite-popup': false,
        'transfer-credits': false,
        'transfer-credits-to-friends': false,
        'transfer': false,
        'add-virtual-card': false,
        'delete-card': false
    });

    const togglePopup = (popupName) => {
        setPopups(prev => ({ ...prev, [popupName]: !prev[popupName] }));
    };

    const closePopup = (popupName) => {
        setPopups(prev => ({ ...prev, [popupName]: false }));
    };

    const copyReferralCode = () => {
        const code = "124122341231231241241";
        navigator.clipboard.writeText(code);
        const msg = document.getElementById('copyMessage');
        if (msg) {
            msg.classList.remove('hidden');
            setTimeout(() => msg.classList.add('hidden'), 2000);
        }
    };

    // Account Details Component
    const AccountDetails = () => (
        <div>
            <div className="flex md:hidden items-center p-2 gap-2 rounded-xl mb-18">
                <img className="max-lg:w-12" src="assets/avatar.png" alt="" />
                <div className="lg:space-y-1">
                    <h4 className="max-lg:text-sm">Alexa Rawles</h4>
                    <p className="font-medium max-lg:text-sm" style={{ color: 'var(--primary-color)' }}>
                        Alexa23Rawles@gmail.com
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col gap-4">
                    <label className="block text-[16px]" htmlFor="full-name">Full Name</label>
                    <input className="w-full py-2 bg-white px-3 text-[16px] rounded-md" type="text" placeholder="Your First Name" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="user-name">Uses Name</label>
                    <input className="w-full py-2 bg-white px-3 text-[16px] rounded-md" type="text" placeholder="Carl_mark" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="gender">Gender</label>
                    <input className="w-full py-2 bg-white px-3 text-[16px] rounded-md" type="text" placeholder="Your Gender" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="country">Country</label>
                    <input className="w-full py-2 bg-white px-3 text-[16px] rounded-md" type="text" placeholder="United States" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="email">Email Address</label>
                    <input className="w-full py-2 bg-white px-3 text-[16px] rounded-md" type="text" placeholder="farhsatonny@yahoo.com" />
                </div>
                <div className="flex flex-col gap-4 relative">
                    <label htmlFor="password">Password</label>
                    <input id="password" className="w-full py-2 bg-white px-3 text-[16px] rounded-md"
                        type={showPassword ? "text" : "password"} placeholder="" />
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-12 cursor-pointer">
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                    <p onClick={() => togglePopup('change-password')}
                        className="text-[var(--primary-color)] hover:border-b transition-all duration-300 text-[14px] font-medium absolute top-3 right-2 cursor-pointer">
                        Change Password
                    </p>
                </div>
            </div>

            <ChangePasswordPopup isOpen={popups['change-password']} onClose={() => closePopup('change-password')} />
        </div>
    );

    // Plan Details Component
    const PlanDetails = () => (
        <div>
            <div onClick={() => togglePopup('add-new-line-popup')} className="flex justify-end mb-8">
                <button className="flex items-center gap-2 bg-[var(--primary-color)] text-white px-4 py-2 rounded-md hover:bg-black">
                    <span className="text-xl font-bold">+</span>
                    Add a line
                </button>
            </div>

            <section className="w-full border border-gray-300 rounded-md p-4 bg-white max-lg:overflow-x-scroll">
                <div className="grid grid-flow-col auto-cols-auto font-semibold text-sm text-gray-700 border-b pb-2 gap-4 whitespace-nowrap">
                    <div>Line</div>
                    <div>Plan</div>
                    <div>Phone Number</div>
                    <div>Sim Type</div>
                    <div>Date</div>
                    <div className="text-right">Usage</div>
                    <div className="text-right">View Details</div>
                </div>

                <div className="grid grid-flow-col auto-cols-auto items-center py-4 border-b gap-4 whitespace-nowrap">
                    <div className="font-semibold text-gray-700">Line 1</div>
                    <div className="size-12">
                        <img src="assets/plan-img.png" alt="Plan" className="w-full rounded" />
                    </div>
                    <div className="font-semibold text-gray-700 whitespace-nowrap">
                        (786)484-8484
                    </div>
                    <div className="text-gray-700">E-Sim</div>
                    <div className="text-gray-700">11/17/2025</div>
                    <div className="text-gray-700 text-xs space-y-1 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                            <Phone size={12} />
                            Call: <span className="font-semibold">1042 Min</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <MessageSquare size={12} />
                            SMS: <span className="font-semibold">2000 SMS</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Database size={12} />
                            Data: <span className="font-semibold">10.76 GB</span>
                        </div>
                    </div>
                    {/* View Button */}
                    <div className="text-center">
                        <button className="text-black hover:text-gray-600 transition">
                            <Eye size={18} />
                        </button>
                    </div>
                </div>
            </section>

            <AddNewLinePopup isOpen={popups['add-new-line-popup']} onClose={() => closePopup('add-new-line-popup')} />
        </div>
    );

    // Billing Information Component
    const BillingInformation = () => (
        <div>
            <div id="order-list" className="bg-white p-4 rounded-xl shadow-md w-full overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="py-3 px-2 text-center">#</th>
                            <th className="py-3 px-2 text-center">Order ID</th>
                            <th className="py-3 px-2 text-center">Date</th>
                            <th className="py-3 px-2 text-center">Amount</th>
                            <th className="py-3 px-2 text-center">Status</th>
                            <th className="py-3 px-2 text-center">View</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 whitespace-nowrap">
                        {[
                            { id: 1, order: '#ORD122', date: '2023-07-10', amount: '356$', status: 'Clear', statusClass: 'bg-[var(--primary-color)]' },
                            { id: 2, order: '#ORD122', date: '2023-07-10', amount: '356$', status: 'Cancel', statusClass: 'bg-red-700' },
                            { id: 3, order: '#ORD122', date: '2023-07-10', amount: '356$', status: 'Pending', statusClass: 'bg-yellow-600' }
                        ].map(item => (
                            <tr key={item.id} className="border-b border-gray-200">
                                <td className="py-3 px-2 text-center">{item.id}</td>
                                <td className="py-3 px-2 font-medium text-center">{item.order}</td>
                                <td className="py-3 px-2 text-center">{item.date}</td>
                                <td className="py-3 px-2 text-center">{item.amount}</td>
                                <td className="py-3 px-2 text-center">
                                    <button className={`${item.statusClass} hover:bg-black transition-colors duration-300 text-white text-[12px] md:text-sm max-w-22 w-14 lg:w-22 text-center py-2 rounded-md`}>
                                        {item.status}
                                    </button>
                                </td>
                                <td className="py-3 px-2 text-center">
                                    <span onClick={() => togglePopup('order-summary')} className="cursor-pointer">
                                        <button className="text-black hover:text-gray-600 transition">
                                            <Eye size={18} />
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <OrderSummaryPopup isOpen={popups['order-summary']} onClose={() => closePopup('order-summary')} />
        </div>
    );

    // Manage Payment Method Component
    const ManagePaymentMethod = () => (
        <div>
            <div className="w-full text-center bg-white py-4">
                <h3 className="font-bold text-lg">Manage Payment Method</h3>
            </div>
            <div className="bg-white mt-4 px-3 py-2 space-y-1">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setPaymentAccordionOpen(!paymentAccordionOpen)}>
                    <div className="flex gap-2 items-center">
                        <img className="w-12" src="assets/visa.png" alt="" />
                        <span className="text-sm">Visa ending in 1112</span>
                    </div>
                    {paymentAccordionOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${paymentAccordionOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                        <div className="flex justify-between max-lg:gap-2 lg:items-center flex-col lg:flex-row mt-3">
                            <div className="text-sm">
                                <h6 className="font-bold">Name on Card</h6>
                                <p className="text-[12px]">Lorem, ipsum dolor.</p>
                            </div>
                            <div className="sm:space-x-2 max-md:text-sm">
                                <button onClick={() => togglePopup('add-card')} className="cursor-pointer bg-[var(--primary-color)] hover:bg-black transition-colors duration-300 px-3 sm:px-5 py-1 text-white rounded-full">
                                    Add
                                </button>
                                <button onClick={() => togglePopup('remove-payment')} className="cursor-pointer bg-[var(--primary-color)] hover:bg-black transition-colors duration-300 px-3 sm:px-5 py-1 text-white rounded-full">
                                    Remove
                                </button>
                                <button className="cursor-pointer bg-[var(--primary-color)] hover:bg-black transition-colors duration-300 px-3 sm:px-5 py-1 text-white rounded-full">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CardPopup isOpen={popups['add-card']} onClose={() => closePopup('add-card')} title="Add / Edit" />
            <RemovePaymentPopup isOpen={popups['remove-payment']} onClose={() => closePopup('remove-payment')} />
        </div>
    );

    // Referral Section Component
    const ReferralSection = () => (
        <div>
            <div className="max-w-4xl mx-auto bg-white relative rounded-lg shadow-lg p-4 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold max-sm:mt-12 mb-3">Referrals</h1>
                        <p className="text-gray-800 text-sm max-w-md">Invite Your Friends To Join And Earn Credits You Can Spend On Your Account.</p>
                    </div>
                    <button onClick={() => togglePopup('invite-popup')} className="bg-[var(--primary-color)] absolute top-5 right-5 hover:bg-black text-white px-4 py-2 whitespace-nowrap rounded-lg font-medium">
                        Invite a Friend
                    </button>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col items-start relative">
                        <button onClick={() => setStatusDropdownOpen(!statusDropdownOpen)} className="bg-[var(--primary-color)] hover:bg-black text-white px-4 py-1.5 rounded-lg font-medium flex items-center gap-2">
                            Status
                            <ChevronDown size={14} />
                        </button>
                        {statusDropdownOpen && (
                            <div className="absolute top-8 mt-2 bg-white shadow-lg rounded-lg w-40 z-10">
                                <ul className="flex flex-col text-sm">
                                    <li><button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Active</button></li>
                                    <li><button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Suspended</button></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="text-right">
                        <span className="text-gray-700 font-medium">Total Referral Credits: </span>
                        <span className="text-xl font-bold text-gray-900">$34.50</span>
                    </div>
                </div>

                <div className="flex max-sm:flex-col md:flex-col lg:flex-row justify-end gap-3 mb-8">
                    <button className="bg-[var(--primary-color)] hover:bg-black text-white px-4 py-2 rounded-lg font-medium">Activate Virtual credit card</button>
                    <button onClick={() => togglePopup('transfer-credits')} className="bg-[var(--primary-color)] hover:bg-black text-white px-4 py-2 rounded-lg font-medium">Transfer Credits</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="border-2 border-gray-200 rounded-lg p-4 relative">
                            <span className={`absolute top-4 right-4 ${item % 2 === 0 ? 'bg-red-600' : 'bg-[#50F100]'} text-white text-xs font-semibold px-3 py-1 rounded`}>
                                {item % 2 === 0 ? 'Suspended' : 'Active'}
                            </span>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm">
                                    👤
                                </div>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">John Doe</h3>
                            <p className="text-gray-700 font-medium">$5.75</p>
                        </div>
                    ))}
                </div>
            </div>

            <InvitePopup isOpen={popups['invite-popup']} onClose={() => closePopup('invite-popup')} copyReferralCode={copyReferralCode} />
            <TransferCreditsPopup
                isOpen={popups['transfer-credits']}
                onClose={() => closePopup('transfer-credits')}
                transferTab={transferTab}
                setTransferTab={setTransferTab}
                onTransfer={() => { closePopup('transfer-credits'); togglePopup('transfer'); }}
                onContinue={() => { closePopup('transfer-credits'); togglePopup('transfer-credits-to-friends'); }}
            />
            <TransferConfirmationPopup isOpen={popups['transfer']} onClose={() => closePopup('transfer')} onConfirm={() => alert('Transfer confirmed!')} />
        </div>
    );

    // Virtual Credit Card Component
    const VirtualCreditCard = () => (
        <div>
            <div className="p-4">
                <h1 className="text-3xl font-bold text-gray-900">Virtual Credit Cards</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="relative mb-6">
                            <img src="assets/credit-card.png" alt="" />
                        </div>
                        <div className="flex gap-8">
                            <button onClick={() => togglePopup('delete-card')} className="flex-1 bg-[var(--primary-color)] hover:bg-black text-white font-semibold py-2 rounded-lg">Activate</button>
                            <button onClick={() => togglePopup('delete-card')} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg">Remove card</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="mb-6">
                            <img src="assets/vitual-card.png" alt="" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">You don't have any saved<br />cards yet.</h2>
                        <p className="text-gray-600 text-sm">When you add a new card, you'll see your saved card<br />details here</p>
                        <button onClick={() => togglePopup('add-virtual-card')} className="bg-[var(--primary-color)] hover:bg-black text-white font-semibold px-4 text-sm py-2 mt-4 rounded-lg">
                            Add Virtual Credit Card
                        </button>
                    </div>
                </div>
            </div>

            <CardPopup isOpen={popups['add-virtual-card']} onClose={() => closePopup('add-virtual-card')} title="Add Virtual" />
            <DeleteCardPopup isOpen={popups['delete-card']} onClose={() => closePopup('delete-card')} onConfirm={() => alert('Card deleted!')} />
        </div>
    );

    // Render the active content based on selected tab
    const renderContent = () => {
        switch (activeTab) {
            case 'account-details': return <AccountDetails />;
            case 'plan-details': return <PlanDetails />;
            case 'billing-information': return <BillingInformation />;
            case 'manage-payment': return <ManagePaymentMethod />;
            case 'referral': return <ReferralSection />;
            case 'virtual-credit-card': return <VirtualCreditCard />;
            default: return <AccountDetails />;
        }
    };

    return (
        <div className="bg-white max-w-[1320px] mx-auto flex md:flex-row flex-col max-md:items-center gap-4 px-4 md:px-4 lg:px-12 lg:py-16 py-8">
            {/* Overlay for mobile */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-90 md:hidden" onClick={() => setSidebarOpen(false)}></div>}

            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Mobile filter button */}
            <div onClick={() => setSidebarOpen(true)} className="bg-[#f3f3f3] px-6 py-4 md:hidden block w-full filter-div cursor-pointer">
                <Filter size={16} className="inline mr-2" /> filter
            </div>

            {/* Right Content */}
            <div className="right-div bg-[#f3f3f3] lg:w-[calc(100%_-_300px)] w-full md:w-[calc(100%_-_280px)] rounded-2xl px-6 py-4 md:py-12">
                {renderContent()}
            </div>
        </div>
    );
};

export default App;