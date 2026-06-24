import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("EN");

    const wrapperRef = useRef(null);

    const languages = [
        { code: "EN", label: "English", flag: "/assets/us.png" },
        { code: "CN", label: "中文", flag: "/assets/china.png" },
    ];

    const current = languages.find(l => l.code === lang);

    // close on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className="relative">
            {/* Trigger */}
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center border-2 border-(--primary-color) rounded-full p-1 gap-1 cursor-pointer"
            >
                <img src={current.flag} className="w-6 h-6 rounded-full" />
                <span className="text-xs">
                    <ChevronDown size={18} />
                </span>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 p-2 w-30 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                    {languages.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setLang(item.code);
                                setOpen(false);
                            }}
                            className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer text-sm
                            ${lang === item.code
                                    ? "bg-yellow-400 font-medium text-black"
                                    : ""
                                }`}
                        >
                            <img src={item.flag} className="w-5 h-5 rounded-full" />
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;