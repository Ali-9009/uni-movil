import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/PrimaryBtn";

export default function Services1() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");

    const affiliates = [
        "CTI-A2Z LLC",
        "CTI-cellphones Depot",
        "CTI-Global Wireless Telecom Group INC",
        "CTI-Infinite Net Cell",
        "CTI-wirelesss LLC",
        "CTI-Lorys Smart Phones LLC",
        "CTI-Marya Phone Repair",
        "CTI-Mobile Mania",
        "CTI-MTI Cellular LLC",
        "CTI-Payless Wireless LLC",
        "CTI-PhoneBotics LLC",
        "CTI-Qbani IT Solution LLC",
    ];

    const filteredAffiliates = useMemo(() => {
        return affiliates.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-[#0b2d57]">
                    Welcome! Karen Herran
                </h2>

                <button className="text-sm text-sky-600 hover:underline">
                    Spectrum Support Page
                </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                    <div>
                        <p className="text-base font-medium text-gray-800">
                            Select Affiliate
                        </p>
                        <p className="text-sm text-sky-600">
                            Total Affiliates - {filteredAffiliates.length}
                        </p>
                    </div>

                    <div className="relative w-full md:w-72">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search affiliate"
                            className="w-full h-11 pl-10 pr-4 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-500"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                    {filteredAffiliates.map((item) => (
                        <label
                            key={item}
                            className={`rounded-lg border px-4 py-4 flex items-center gap-3 cursor-pointer transition-all ${selected === item
                                    ? "border-sky-500 bg-sky-50"
                                    : "border-gray-200 hover:border-sky-300"
                                }`}
                        >
                            <input
                                type="radio"
                                name="affiliate"
                                checked={selected === item}
                                onChange={() => setSelected(item)}
                                className="w-4 h-4"
                            />

                            <span className="text-sm font-medium text-[#16345f]">
                                {item}
                            </span>
                        </label>
                    ))}
                </div>

                {filteredAffiliates.length === 0 && (
                    <div className="text-center text-sm text-gray-500 py-8">
                        No affiliate found
                    </div>
                )}

                {selected && (
                    <div className="mt-6 flex justify-end">
                        <Button text="Launch Buy Flow" onClick={() => navigate("/services2")} />
                    </div>
                )}
            </div>
        </div>
    );
}