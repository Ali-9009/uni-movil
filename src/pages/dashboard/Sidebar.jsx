// src/components/Sidebar.jsx
import { User, List, FileText, CreditCard, Gift, LogOut, Phone } from 'lucide-react';

const navItems = [
    { id: 'account-details', label: 'Accounts Details', icon: User },
    { id: 'plan-details', label: 'Plan Details', icon: List },
    { id: 'billing-information', label: 'Billing Information', icon: FileText },
    { id: 'manage-payment', label: 'Manage Payment Method', icon: CreditCard },
    { id: 'referral', label: 'Referral Tab', icon: Gift },
    { id: 'virtual-credit-card', label: 'Virtual Credit Card', icon: CreditCard }
];

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
    return (
        <div className={`left-div fixed md:static max-md:top-[50%] max-md:left-[50%] max-md:-translate-x-1/2 max-md:-translate-y-1/2 h-fit md:h-fit w-70 md:w-70 lg:w-75 bg-[#f3f3f3] flex-col gap-2 rounded-lg max-md:shadow-2xl md:rounded-2xl px-3 lg:px-3 py-4 md:py-8 transform ${sidebarOpen ? 'scale-100' : 'scale-0 md:scale-100'} transition-transform duration-300 md:z-44 z-90`}>
            <div className="flex items-center p-2 md:gap-2 bg-white rounded-xl mb-3">
                <img className="max-lg:w-12 max-md:w-10" src="/assets/profile.png" alt="" />
                <div className="lg:space-y-0 max-md:-space-y-1">
                    <h4 className="max-lg:text-sm lg:text-sm max-md:text-[12px] font-bold">Alexa Rawles</h4>
                    <p className="font-medium lg:text-sm max-lg:text-sm max-md:text-[12px]">
                        <Phone size={12} className="inline mr-1" /> (786)484-8484
                    </p>
                    <p className="font-medium max-lg:text-sm lg:text-sm max-md:text-[12px]">
                        Referral Credits <span className="font-bold">$35.45</span>
                    </p>
                </div>
            </div>

            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                    <div
                        key={item.id}
                        onClick={() => {
                            setActiveTab(item.id);
                            setSidebarOpen(false);
                        }}
                        className={`transition-colors duration-300 flex rounded-lg items-center text-[14px] lg:text-[16px] gap-4 md:px-6 px-3 py-2 md:py-4 cursor-pointer ${activeTab === item.id ? 'bg-(--primary-color) text-white rounded-lg' : 'text-gray-900'}`}
                    >
                        <Icon size={18} />
                        <h4>{item.label}</h4>
                    </div>
                );
            })}

            <div className="flex transition-colors duration-300 items-center gap-4 text-[14px] lg:text-[16px] md:px-6 px-3 pt-2 md:pt-4">
                <LogOut size={18} color="red" />
                <h3 className="cursor-pointer text-red-700">Logout</h3>
            </div>
        </div>
    );
};

export default Sidebar;